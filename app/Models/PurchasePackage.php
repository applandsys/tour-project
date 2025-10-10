<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchasePackage extends Model
{
    protected $fillable = ['user_id', 'package_id', 'amount','to_date','from_date'];

    public function package(){
        return $this->belongsTo(Package::class,'package_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}

