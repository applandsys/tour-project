<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommissionLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('commission_levels')->insert([
            [
                'level_name' => '1st Level',
                'level_number'=>1,
                'commission_amount'=> 8,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '2nd Level',
                'level_number'=>2,
                'commission_amount'=> 4,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '3rd Level',
                'level_number'=>3,
                'commission_amount'=> 3,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '4th Level',
                'level_number'=>4,
                'commission_amount'=> 2,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '5th Level',
                'level_number'=>5,
                'commission_amount'=> 1,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '6th Level',
                'level_number'=>6,
                'commission_amount'=> 2,
                'plan_type'=> 'affiliate'
            ],
            [
                'level_name' => '1st Level',
                'level_number'=>1,
                'commission_amount'=> 4,
                'plan_type'=> 'roi'
            ],
            [
                'level_name' => '1st Level',
                'level_number'=>1,
                'commission_amount'=> 4,
                'plan_type'=> 'roi'
            ],
            [
                'level_name' => '2nd Level',
                'level_number'=>2,
                'commission_amount'=> 3,
                'plan_type'=> 'roi'
            ],
            [
                'level_name' => '3rd Level',
                'level_number'=>3,
                'commission_amount'=> 2,
                'plan_type'=> 'roi'
            ],
            [
                'level_name' => '4th Level',
                'level_number'=>4,
                'commission_amount'=> 1,
                'plan_type'=> 'roi'
            ]
        ]);
    }
}
