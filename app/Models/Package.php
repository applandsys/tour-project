<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = ['name','slug','reward','limit','voucher_amount','voucher_per_month','claim_deadline','description','image'];
}
