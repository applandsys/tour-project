<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReferralEarning extends Model
{
    protected $fillable = ['user_id','package_id','amount','earning_level','referral_id'];
}
