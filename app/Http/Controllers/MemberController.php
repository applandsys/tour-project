<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function Page(){
        return Inertia::render('User/Deposit', [
            'packages' => Package::all(),
            'status' => session('status'),
        ]);
    }
}
