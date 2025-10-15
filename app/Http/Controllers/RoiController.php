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
    public function generateDailyRoi(Request $request){

        $dateFor = date('Y-m-d');

        $purchasePackage =  PurchasePackage::with('package')->get();

        foreach($purchasePackage as $purchase){
           $packageAmount = $purchase->amount;
           $commissionStructure =  $this->commissionDistribution($packageAmount);
           $commissionAmount =  $commissionStructure['daily'];

            // check the package purchase is not before
            $todayPay =  RoiEarning::where('date_for',$dateFor)->where('user_id',$purchase->user_id)->get();

            if(( strtotime($dateFor)  > strtotime($purchase->to_date)) && $todayPay->isEmpty()){

                $user =  User::find($purchase->user_id);

               RoiEarning::create([
                   'user_id' => $purchase->user_id,
                   'package_id' => $purchase->package_id,
                   'date_for' => $dateFor,
                   'amount' => $commissionAmount,
                   'earning_level' => 0,
                   'referral_id' => $user->referrer,
               ]);

                $userLastBalance = WalletBalance::where('user_id', $purchase->user_id)->orderBy('created_at', 'desc')->first();
                $userNewBalance = $commissionAmount ;
                if($userLastBalance){
                    $userNewBalance = $userLastBalance ? $userLastBalance->balance + $commissionAmount :  $userLastBalance->balance;
                }

                WalletBalance::create([
                   'user_id' => $purchase->user_id,
                   'balance' =>  $userNewBalance,
                   'income' =>  $userNewBalance,
                   'expense' =>  0,
                   'type'=> 'roi',
               ]);

                $userChain = $this->getReferralChainDescending($purchase->user_id, 3);
                $commissionLevel = CommissionLevel::where('plan_type','roi')->get();
                for($i=0 ; $i<count($userChain); $i++) {

                    $commissionPercentage =  $commissionLevel[$i]->commission_amount;

                    $lastBalance = WalletBalance::where('user_id', $userChain[$i]->id)
                        ->orderBy('created_at', 'desc') // Ensure you get the latest balance
                        ->first();

                    $commission =  $this->calculatePercentage($commissionPercentage, $commissionAmount);

                    $LUser = User::find($userChain[$i]->id);

                    $LuserLastBalance = WalletBalance::where('user_id', $LUser->user_id)->orderBy('created_at', 'desc')->first();
                    $LUserBalance = $commission ;
                    if($LuserLastBalance){
                        $LUserBalance = $LuserLastBalance ? $LuserLastBalance->balance + $commission :  $commission;
                    }

                    RoiEarning::create([
                        'user_id' => $userChain[$i]->id,
                        'package_id' => $purchase->package_id,
                        'date_for' => $dateFor,
                        'amount' => $commission,
                        'earning_level' => $i+1,
                        'referral_id' =>  $LUser->referrer,
                    ]);

                    WalletBalance::create(
                        [
                            'user_id' => $userChain[$i]->id,
                            'balance' => $LUserBalance,
                            'income'=> $LUserBalance,
                            'expense' => 0,
                            'type'=>'roi',
                        ]);
                }

            }else{
                echo "NO ROI";
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
