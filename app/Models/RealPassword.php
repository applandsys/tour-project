<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RealPassword extends Model
{
    protected $fillable = ['user_id','encrypted_password','encryption_version'];
}

