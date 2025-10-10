<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransferBalanceLog extends Model
{
    protected $table = ['user_id','receiver_id','amount'];
}
