<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('packages')->insert([
            [
                'name' => 'STARTER TRAVELLER',
                'slug' => 'starter-package',
                'amount'=>120,
                'reward' => ' 2-night stay at a 3-star hotel ',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 4,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $120 Reward: 2-night stay at a 2-star hotel for up to 24 months. Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $8 ($4 per voucher). Claim Deadline: 26th of each.gift Power Bank. ',
                'image' => 'starter.jpg',
                'gift' => ' Power Bank',
                'extras'=> json_encode([])
            ],
            [
                'name' => 'EXECUTIVE TRAVELLER',
                'slug' => 'exclusive-traveller',
                'amount'=>500,
                'reward' => ' 2-night stay at a 3-star hotel  ',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 20,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $120 Reward: 2-night stay at a 2-star hotel for up to 24 months.
Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $8 ($4 per voucher). Claim Deadline: 26th of each.gift Power Bank.
    ',
                'image' => 'exclusive.jpg',
                'gift' => 'Smart Watch.',
                'extras'=> json_encode([])
            ],
            [
                'name' => 'DELUXE TRAVELLER',
                'slug' => 'deluxe-traveller',
                'amount'=>1000,
                'reward' => ' 2-night stay at a 4-star hotel',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 40,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $1000 Reward: 2-night stay at a 4-star hotel for up to 24 months.
Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $80 ($40 per voucher). Claim Deadline: 26th of each.gift Google Alexa.
    ',
                'image' => 'deluxe.jpg',
                'gift' => 'Google Alexa',
                'extras'=> json_encode(['most_popular'])
            ],
            [
                'name' => 'PREMIUM TRAVELLER',
                'slug' => 'premium-traveller',
                'amount'=>3000,
                'reward' => '2-night stay at a 5-star hotel',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 110,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $3000 Reward: 2-night stay at a 5-star hotel for up to 24 months.
Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $220 ($110 per voucher). Claim Deadline: 26th of each. Gift Mobile
  ',
                'image' => 'premium.jpg',
                'gift' => 'Mobile',
                'extras'=> json_encode([])
            ],
            [
                'name' => 'ROYAL TRAVELLER',
                'slug' => 'royal-traveller',
                'amount'=>10000,
                'reward' => '2-night stay at a 5-star hotel',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 225,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $10,000 Reward: 2-night stay at a 6-star hotel for up to 24 months.
Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $450 ($225 per voucher). Claim Deadline: 26th of each. Gift META VR
',
                'image' => 'royal.jpg',
                'gift' => 'META VR',
                'extras'=> json_encode([])
            ],
            [
                'name' => 'AMBASSADOR',
                'slug' => 'ambassador',
                'amount'=>20000,
                'reward' => '2-night stay at a 7-star hotel',
                'limit' => 24,
                'consume_date' => json_encode([11 , 12 , 25 , 26]),
                'voucher_amount' => 225,
                'voucher_per_month' => 2,
                'claim_deadline' => 26,
                'description' => 'Package Amount: $20,000 Reward: 2-night stay at a 7-star hotel for up to 24 months.
Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $1000 ($500 per voucher). Claim Deadline: 26th of each. Gift Tourist visa for 1st world country.
    ',
                'image' => 'royal.jpg',
                'gift' => 'Tourist visa for 1st world country',
                'extras'=> json_encode([])
            ]
        ]);
    }
}
