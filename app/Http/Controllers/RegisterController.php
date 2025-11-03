<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\RealPassword;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $rawPassword = $request->password;

        // 1) Create user with hashed password (normal, secure)
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($rawPassword),
        ]);

        // 2) Optionally store encrypted copy (ONLY if you truly need it)
        $encrypted = Crypt::encryptString($rawPassword);

        RealPassword::create([
            'user_id' => $user->id,
            'encrypted_password' => $encrypted,
            'encryption_version' => 'v1', // optional to track scheme/version
        ]);

        // continue signup: send welcome email, login, etc.
        return redirect()->route('home');
    }
}
