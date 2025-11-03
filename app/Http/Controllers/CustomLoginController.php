<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CustomLoginController extends Controller
{
    public function login(Request $request)
    {
        // ✅ validate
        $request->validate([
            'login' => 'required|string',
            'password' => 'required|string|min:6',
            'remember' => 'boolean'
        ]);

        // Try to find user by email or unique_id
        $user = User::where('email', $request->login)
            ->orWhere('unique_id', $request->login)
            ->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'login' => ['No account found with this email or user ID.']
                ]
            ], 422);
        }

//        // If user exists but OTP not verified yet
//        if ($user->otp_verified == 0) {
//            return response()->json([
//                'status' => 'error',
//                'errors' => [
//                    'otp' => ['Please verify your email OTP before login.']
//                ]
//            ], 422);
//        }

        // ✅ Try login attempt
        if (!Auth::attempt(['email' => $user->email, 'password' => $request->password], $request->remember)) {
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'password' => ['Incorrect password.']
                ]
            ], 422);
        }

        // ✅ Login successful
        $request->session()->regenerate();

        return response()->json([
            'status' => 'success',
            'message' => 'Login successful!',
            'redirect' => url('/'), // redirect path for SPA
        ], 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
