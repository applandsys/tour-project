<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function PurchasePackage(){
        return Inertia::render('User/PurchasePackage', [
            'packages' => Package::all(),
            'status' => session('status'),
        ]);
    }
}
