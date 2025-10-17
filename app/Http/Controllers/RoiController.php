<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CommissionLevel;
use App\Models\PurchasePackage;
use App\Models\RoiEarning;
use App\Models\User;
use App\Models\WalletBalance;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RoiController extends Controller
{
    public function generateDailyRoi(Request $request)
    {
        $dateFor =  date('Y-m-d');

        $purchasePackages = PurchasePackage::with('package')->get();

        foreach ($purchasePackages as $purchase) {
            $packageAmount = $purchase->amount;
            $commissionStructure = $this->commissionDistribution($packageAmount);
            $commissionAmount = $commissionStructure['daily'] ?? 0;

            // Skip if already paid for today
            $todayPay = RoiEarning::where('date_for', $dateFor)
                ->where('user_id', $purchase->user_id)
                ->where('earning_level', 0)
                ->exists();

            if ((strtotime($dateFor) <= strtotime($purchase->from_date)) && !$todayPay) {
                $user = User::find($purchase->user_id);

                if ($commissionAmount > 0) {
                    RoiEarning::create([
                        'user_id' => $purchase->user_id,
                        'package_id' => $purchase->package_id,
                        'date_for' => $dateFor,
                        'amount' => $commissionAmount,
                        'earning_level' => 0,
                        'referral_id' => $user->referrer,
                    ]);

                    $lastBalance = WalletBalance::where('user_id', $purchase->user_id)
                        ->orderBy('created_at', 'desc')
                        ->first();

                    $newBalance = $lastBalance ? $lastBalance->balance + $commissionAmount : $commissionAmount;

                    WalletBalance::create([
                        'user_id' => $purchase->user_id,
                        'balance' => $newBalance,
                        'income' => $commissionAmount,
                        'expense' => 0,
                        'type' => 'roi',
                    ]);
                }

                // Referral chain logic
                $userChain = $this->getReferralChainDescending($purchase->user_id, 3);
                $commissionLevels = CommissionLevel::where('plan_type', 'roi')->get();

                foreach ($userChain as $index => $chainUser) {
                    if (!isset($commissionLevels[$index])) continue;

                    $levelPercent = $commissionLevels[$index]->commission_amount;
                    $levelCommission = $this->calculatePercentage($levelPercent, $commissionAmount);

                    // Still process iteration, but skip DB insert if commission = 0
                    $lastBalance = WalletBalance::where('user_id', $chainUser->id)
                        ->orderBy('created_at', 'desc')
                        ->first();

                    $lastBalanceValue = $lastBalance ? $lastBalance->balance : 0;
                    $newBalance = number_format($lastBalanceValue + $levelCommission, 4, '.', '');

                    if ($levelCommission > 0) {
                        RoiEarning::create([
                            'user_id' => $chainUser->id,
                            'package_id' => $purchase->package_id,
                            'date_for' => $dateFor,
                            'amount' => $levelCommission,
                            'earning_level' => $index + 1,
                            'referral_id' => $chainUser->referrer,
                        ]);

                        WalletBalance::create([
                            'user_id' => $chainUser->id,
                            'balance' => $newBalance,
                            'income' => number_format($levelCommission, 4, '.', ''),
                            'expense' => 0,
                            'type' => 'roi',
                        ]);
                    }


                    // Optional: For debugging/logging (keeps iteration visible)
                    echo "Processed level " . ($index + 1) . " for user {$chainUser->id} — Commission: {$levelCommission}<br>";
                }

            } else {
                echo "NO ROI for user {$purchase->user_id}<br>";
            }
        }
    }



    private function commissionDistribution($packageAmount){
        switch ($packageAmount) {
            case 120:
                return ['monthly'=>8,'daily'=>0.122];
                break;
            case 500:
                return ['monthly'=>40,'daily'=>1.33];
                break;
            case 1000:
                return ['monthly'=>80,'daily'=>2.66];
                break;
            case 3000:
                return ['monthly'=>240,'daily'=>8];
                break;
            case 10000:
                return ['monthly'=>450,'daily'=>15];
                break;
            case 20000:
                return ['monthly'=>1000,'daily'=>33.33];
                break;
            default:
                return ['monthly'=>0,'daily'=>0];
        }
    }
    private function commissionLevel($level){
        switch ($level) {
            case 0:
                return 8;
                break;
            case 1:
                return 4;
                break;
            case 2:
                return 3;
                break;
            default:
                return 0;
        }
    }

    private function calculatePercentage($percentage, $total)
    {
        if ($percentage == 0 || $total == 0) {
            return 0;
        }

        // Calculate the amount from percentage
        $amount = ($percentage / 100) * $total;

        return $amount;
    }

    private function getReferralChainDescending($userId, $maxLevels, $currentLevel = 0) {
        // Base case: if the maximum level is reached, or no more referrer exists
        if ($currentLevel >= $maxLevels) {
            return [];
        }

        // Fetch the current user based on userId
        $user = User::find($userId);

        // If the user doesn't exist or the user has no referrer, return an empty array
        if (!$user || $user->referrer == 0) {
            return [];
        }

        // Get the referrer information for the current user
        $referrer = User::find($user->referrer);

        // First, get the referrer chain recursively from the referrer
        $referralChain = $this->getReferralChainDescending($referrer->id, $maxLevels, $currentLevel + 1);

        // Now add the current user at the front of the chain (since we are building it in descending order)
        array_unshift($referralChain, $referrer);  // Add referrer at the front (top of the chain)

        // Include the current user and the referrer in the chain
        // $referralChain[] = $referrer;

        return $referralChain;
    }

}
