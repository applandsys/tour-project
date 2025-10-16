<?php

namespace App\Http\Controllers;

use App\Models\CommissionLevel;
use App\Models\Package;
use App\Models\TransactionHistory;
use App\Models\User;
use App\Models\WalletBalance;
use App\Models\WithdrawModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Carbon\Carbon;

class MemberController extends Controller
{
    public function Page(){
        return Inertia::render('User/Deposit', [
            'packages' => Package::all(),
            'status' => session('status'),
        ]);
    }

    public function Payment($id)
    {
        $packageDetail = Package::findOrFail($id);
        $user_id =  Auth::id();
        return Inertia::render('User/Payment', [
            'packageDetail' => $packageDetail,
            'walletBalance' => WalletBalance::where('user_id',$user_id)->first()
            ,
        ]);
    }

    public function PaymentProcess(Request $request) {
        // Get the current user id
        $user_id = Auth::id();
        $amount = $request->amount;

        // Fetch the user chain in descending order (starting from the top-level referrer)
        $userChain = $this->getReferralChainDescending($user_id, 6);

        $commissionLevel = CommissionLevel::where('plan_type','affiliate')->get();

        $userLastBalance = WalletBalance::where('user_id', $user_id)->orderBy('created_at', 'desc')->first();

        if ($userLastBalance->balance  < $amount) {
            return redirect()->route('member.deposit')->with('error', 'Insufficient balance!');
        }

        $userNewBalance = $userLastBalance ? $userLastBalance->balance - $amount :  $amount;

        WalletBalance::create(
            [
                'user_id' => $user_id,
                'balance' => $userNewBalance,
                'income'=> $amount,
                'expense' => 0,
                'type'=>'package',
            ]);

        TransactionHistory::create([
            'user_id' => $user_id,
            'package_id' => 1,
            'transaction_type'=>'purchase-package',
            'amount' => $amount
        ]);

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


    public function GTUser(Request $request){

        $user = User::where('unique_id',$request->gtUser)->first();

        if(!$user){
            return response()->json([
                'status' => 'error',
                'message' => 'No Name found',
                'user' =>  null,
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Package purchased successfully!',
            'user' =>  $user,
        ]);
    }



    public function BackOffice(){
        return Inertia::render('User/BackOffice', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function ProfileSettings(){
        return Inertia::render('User/ProfileSetting', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function GiftCards(){
        return Inertia::render('User/GiftCard', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function WithdrawFund(){
        return Inertia::render('User/WithdrawFund', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function WithdrawProcess(Request $request){

        $user = auth()->user();

        WithdrawModel::create([
            'user_id'=>$user->id,
            'pay_method'=>$request->pay_method,
            'pay_id'=>$request->pay_id,
            'pay_info'=>$request->pay_info,
            'amount'=>$request->amount,
            'note'=>$request->note
        ]);
        $message = "Withdraw Request Successfully sent";
        return back()->with('success', $message);
    }

    public function EarningDashboard(){
        return Inertia::render('User/EarningDashboard', [
            'stats' => [],
        ]);
    }

    public function SupportTickets(){
        return Inertia::render('User/SupportTickets', [
            'stats' => [],
        ]);
    }


    public function Generation(){

        $user = auth()->user();

        // Load referrals and packages recursively
        $user->load('referredUsers.purchasePackages');

        // Get flat list with levels
        $referralsWithLevel = $user->getReferralsWithLevel();

        $directReferred = User::where('referrer',$user->id)->with(['purchasePackages'])->get();

        return Inertia::render('User/Generation', [
            'myReferrals' => $referralsWithLevel,
            'directRefer' => $directReferred,
            'status' => session('status'),
        ]);

    }

    public function RankAchieved(){
        return Inertia::render('User/RankAchieved', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function TransactionPassword(){
        return Inertia::render('User/TransactionPassword', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }
    public function ResetPassword(){
        return Inertia::render('User/ResetPassword', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }
    public function update(Request $request)
    {

        $type = $request->type;
        $message = "";

        $request->validate([
            'oldPassword' => ['required'],
            'newPassword' => ['required', 'min:8', 'confirmed'], // confirm field should be newPassword_confirmation
        ]);

        $user = $request->user();


        // Update password
        if( $type==="transaction"){
            // Check if old password matches
//            if (!Hash::check($request->oldPassword, $user->transaction_password)) {
//                return back()->withErrors(['oldPassword' => 'Your transaction current password is incorrect.']);
//            }

            $user->update([
                'transaction_password' => Hash::make($request->newPassword),
            ]);

            $message = 'Transaction Password   updated successfully!';
        }else{
            // Check if old password matches
            if (!Hash::check($request->oldPassword, $user->password)) {
                return back()->withErrors(['oldPassword' => 'Your current password is incorrect.']);
            }

            $user->update([
                'password' => Hash::make($request->newPassword),
            ]);

            $message = 'Password   updated successfully!';
        }


        return back()->with('success', $message);
    }

    public function TransferBalance(){
        return Inertia::render('User/TransferBalance', [
            'stats' => [],
            'status' => session('status'),
        ]);
    }

    public function  TransferBalanceProcess(Request $request)
    {
        $request->validate([
            'gt_user' => ['required'],
            'amount' => ['required', 'numeric'],
        ]);

        $GTUser = User::where('unique_id', $request->gt_user)->first();

        if (!$GTUser) {
            return back()->withErrors([
                'gt_user' => 'GT User does not exist in the system',
            ]);
        }

        WalletBalance::create([
            'user_id' => $GTUser->id,
            'balance' => $request->amount,
            'income' => $request->amount,
            'expense' => 0,
            'type' => 'received-transfer',
        ]);

        return back()->with('success', 'Balance Transfer Successful!');
    }



}
