<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WalletBalance extends Model
{
    protected  $fillable = ['user_id','balance','income','expense','type'];
}
