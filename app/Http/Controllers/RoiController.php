<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PurchasePackage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RoiController extends Controller
{
    public function generateDailyRoi(Request $request){
        // Purchase package
        $dateFor =  Carbon::today();
        $purchasePackage =  PurchasePackage::with('package')->get();
        foreach($purchasePackage as $package){

        }
        dd($purchasePackage);
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

}
