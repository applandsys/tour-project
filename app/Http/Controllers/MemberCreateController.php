<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\SendOtpMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class MemberCreateController extends Controller
{
    public function Signup(Request $request)
    {
        // ✅ validate request first
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'transPass' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(), // <-- important
            ], 422);
        }

        // ✅ Check if user exists
        $userExist = User::where('email', $request->email)->first();

        if ($userExist && $userExist->otp_verified==1) {
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'email' => ['Account already exists with this email.'],
                ]
            ], 422);
        }

        if ($userExist && $userExist->otp_verified==0) {
            return response()->json([
                'status' => 'success',
                'message' => [
                    'otp' => ['OTP Verification needed'],
                ],
                'otp'=> 1
            ], 200);
        }

        $referrer = User::where('unique_id',$request->referral)->first();

        if (!$referrer) {
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'referral' => ['Referrer Not found'],
                ]
            ], 422);
        }

       $created =  User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'transaction_password'=>$request->transPass,
            'referrer'=> $referrer->id
        ]);

        // send and email
        // ✅ generate OTP
        $otp = rand(1000, 9999);
        $created->otp = $otp;
        $created->otp_expires_at = now()->addMinutes(10); // optional
        $created->save();

        // ✅ send email
        $sendMail = Mail::to($created->email)->send(new SendOtpMail($otp));

        // ✅ If not exist -> send OTP (dummy response for now)
        return response()->json([
            'status' => 'success',
            'message' => 'OTP sent to your email!',
            'otp'=> 2,
            'mail'=>$sendMail,
            'user'=>$created
        ], 200);
    }

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use App\Models\User;

    public function Verify(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric'
        ]);

        $user = User::where('otp', $request->otp)->first();

        if (!$user) {
            return back()->withErrors([
                'otp' => 'Incorrect OTP'
            ]);
        }

        // Clear OTP after successful verification (security best practice)
        $user->otp = null;
        $user->save();

        // Log the user in
        Auth::login($user, $request->remember);

        // ✅ With Inertia, redirect using intended
        return redirect()->intended('/');
    }


}
