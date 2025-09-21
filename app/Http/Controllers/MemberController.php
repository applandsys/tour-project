<?php

namespace App\Http\Controllers;

use App\Models\CommissionLevel;
use App\Models\Package;
use App\Models\User;
use App\Models\WalletBalance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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

        // Fetch the user chain in descending order (starting from the top-level referrer)
        $userChain = $this->getReferralChainDescending($user_id, 6);

        $commissionLevel = CommissionLevel::where('plan_type','affiliate')->get();

       // dd( $commissionLevel);

        for($i=0 ; $i<count($userChain); $i++) {
                //echo $userChain[$i]->name;
                if($i==0){
                    $userChain[$i]->name;
                    return response()->json($userChain[$i]->name);
                }
        }



        // Output or process the chain as needed (for example, return it as a response)
        return response()->json($userChain);
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
