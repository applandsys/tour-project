<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseSubscription extends Model
{
    protected $fillable = ['user_id','expiry_date','buy_date','purchase_by','amount'];
}
