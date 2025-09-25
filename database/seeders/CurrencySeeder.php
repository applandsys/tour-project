<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('currency_rates')->insert([
            [
                'currency_name' => 'US$',
                'slug' => 'usd',
                'rate'=> 1
            ],
            [
                'currency_name' => 'BDT',
                'slug' => 'BDT',
                'rate'=> 120
            ]
        ]);
    }
}

