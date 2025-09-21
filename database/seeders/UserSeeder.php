<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Tarique Mosharraf',
                'email' => 'tariq@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98761,
                'referrer'=>0,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Shakil Ahmed',
                'email' => 'shakil@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98762,
                'referrer'=>1,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Parag Kazi',
                'email' => 'parag@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98763,
                'referrer'=>2,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Raju Matin',
                'email' => 'raju@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98764,
                'referrer'=>3,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Imbrahim Taragdar',
                'email' => 'ibu@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98765,
                'referrer'=>4,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Sharif Chaklader',
                'email' => 'sharif@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98766,
                'referrer'=>5,
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Monni Akther',
                'email' => 'monni@gmail.com',
                'phone'=> '01837664478',
                'unique_id'=> 98767,
                'referrer'=>6,
                'password' => Hash::make('123456'),
            ]
        ]);
    }
}
