<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoiEarning extends Model
{
    protected $fillable = ['user_id','package_id','amount','earning_level','date_for','referral_id'];
}

