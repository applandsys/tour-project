<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = ['user_id','address','gender','date_of_birth','photo','doc','doc_type','doc_type','country'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

