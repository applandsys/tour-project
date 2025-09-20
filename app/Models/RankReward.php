<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RankReward extends Model
{
    protected $fillable = ['name','slug','rank_level','required_amount','instant_bonus','alternative_bonus'];
}
