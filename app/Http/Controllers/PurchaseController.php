<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CommissionLevel;
use App\Models\Package;
use App\Models\TransactionHistory;
use App\Models\User;
use App\Models\WalletBalance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function PurchasePackage(){
        return Inertia::render('User/PurchasePackage', [
            'packages' => Package::all(),
            'status' => session('status'),
        ]);
    }

    public function PackageBuyProcess(Request $request) {


        $packageId = $request->packageId;
        $inputAmount = (int)$request->amount;
        $transactionPassword = $request->transactionPassword;
        // check the GT user exist
        $GTUser = User::where('unique_id',$request->userId)->first();


        if(!$GTUser){
            return back()->withErrors([
                'gt_user' => 'GT User not Exist in the System',
            ]);
        }

        $user_id = Auth::id();
        $GTUserId = $GTUser->id;

        $transactionPassword = User::find($user_id)->where('transaction_password',  $transactionPassword)->first();

        if(!$transactionPassword){
            return back()->withErrors([
                'transaction_password' => 'Wrong Transaction Password',
            ]);
        }

        $package = Package::find($packageId);
        $amount =  $package->amount;

       // dd([$inputAmount, $package->amount] );


        if($inputAmount !== $amount){
            return back()->withErrors([
                'input_amount' => 'Amount is Incorrect',
            ]);
        }

        $commissionLevel = CommissionLevel::where('plan_type','affiliate')->get();

        $userLastBalance = WalletBalance::where('user_id', $user_id)->orderBy('created_at', 'desc')->first();

        if ($userLastBalance->balance  < $amount) {
            return back()->withErrors([
                'balance' => 'Insufficient Balance',
            ]);
        }

        $userNewBalance = $userLastBalance ? $userLastBalance->balance - $amount :  $amount;

        WalletBalance::create(
            [
                'user_id' => $user_id,
                'balance' => $userNewBalance,
                'income'=> 0,
                'expense' => $amount || 0,
                'type'=>'package',
            ]);

        TransactionHistory::create([
            'user_id' => $user_id,
            'package_id' => 1,
            'transaction_type'=>'purchase-package',
            'amount' => $amount
        ]);

        // Fetch the user chain in descending order (starting from the top-level referrer)
        $userChain = $this->getReferralChainDescending($GTUserId, 6);

        for($i=0 ; $i<count($userChain); $i++) {

            $commissionPercentage =  $commissionLevel[$i]->commission_amount;

            $lastBalance = WalletBalance::where('user_id', $userChain[$i]->id)
                ->orderBy('created_at', 'desc') // Ensure you get the latest balance
                ->first();

            $commission =  $this->calculatePercentage($commissionPercentage, $amount);

            //   $newBalance = $lastBalance ? $lastBalance->balance + $income - $expense : $income - $expense;
            $newBalance = $lastBalance ? $lastBalance->balance + $commission :   $commission;

            WalletBalance::create(
                [
                    'user_id' => $userChain[$i]->id,
                    'balance' => $newBalance,
                    'income'=> $newBalance,
                    'expense' => 0,
                    'type'=>'affiliate-commission',
                ]);
        }

        return redirect()->route('member.deposit')->with('success', 'Payment processed successfully!');

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

    private function calculatePercentage($percentage, $total)
    {
        if ($percentage == 0 || $total == 0) {
            return 0;
        }

        // Calculate the amount from percentage
        $amount = ($percentage / 100) * $total;

        return $amount;
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


    public function Subscription(){
        return Inertia::render('User/Subscription', [
            'packages' => Package::all(),
            'status' => session('status'),
        ]);
    }


}
