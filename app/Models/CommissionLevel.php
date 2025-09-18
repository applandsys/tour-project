<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommissionLevel extends Model
{
    protected $fillable = ['level_name','level_number','commission_amount','plan_type'];
}
