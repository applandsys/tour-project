<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BalanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('wallet_balances')->insert([
            [
                'user_id' => 1,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 2,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 3,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 4,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 5,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 6,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ],
            [
                'user_id' => 7,
                'balance' => 10000000,
                'income'=>100000,
                'expense' => 0,
                'type' => 'deposit',
            ]
        ]);
    }
}
