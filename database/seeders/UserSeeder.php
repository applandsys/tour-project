<?php

namespace Database\Seeders;

use App\Models\User;
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
        $users = [
            [
                'name'     => 'Tarique Mosharraf',
                'email'    => 'tariq@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 0,
                'password' => Hash::make('Prince@1234'),
            ],
            [
                'name'     => 'Shakil Ahmed',
                'email'    => 'shakil@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 1,
                'password' => Hash::make('123456'),
            ],
            [
                'name'     => 'Parag Kazi',
                'email'    => 'parag@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 2,
                'password' => Hash::make('123456'),
            ],
            [
                'name'     => 'Raju Matin',
                'email'    => 'raju@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 3,
                'password' => Hash::make('123456'),
                'unique_id'=> 98764, // you can still force a specific value if needed
            ],
            [
                'name'     => 'Imbrahim Taragdar',
                'email'    => 'ibu@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 4,
                'password' => Hash::make('123456'),
            ],
            [
                'name'     => 'Sharif Chaklader',
                'email'    => 'sharif@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 5,
                'password' => Hash::make('123456'),
            ],
            [
                'name'     => 'Monni Akther',
                'email'    => 'monni@gmail.com',
                'phone'    => '01837664478',
                'referrer' => 6,
                'password' => Hash::make('123456'),
            ],
        ];

        foreach ($users as $data) {
            User::create($data);
        }
    }
}
