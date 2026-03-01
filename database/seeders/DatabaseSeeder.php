<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 10 users with factory
        User::factory(10)->create();

        // Create specific user
        User::factory()->create([
        'name' => 'Riblaoui',
        'email' => 'admin@example.com', // Beddel l-email hna
        'password' => Hash::make('P@ssw0rd2026!')
        ]);
    }
}
