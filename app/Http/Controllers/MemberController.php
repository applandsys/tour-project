<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\WalletBalance;
use Illuminate\Contracts\Auth\MustVerifyEmail;
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

    public function PaymentProcess(Request $request){
        dd($request->amount);
    }

}
