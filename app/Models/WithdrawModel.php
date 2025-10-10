<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WithdrawModel extends Model
{
    protected $fillable = ['user_id','pay_method','pay_id','pay_info','amount','note'];
}
