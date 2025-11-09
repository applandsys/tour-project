<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = ['user_id','address','gender','date_of_birth','photo','doc','doc_type','doc_type','country','nominee_name','nominee_phone','nominee_photo'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

