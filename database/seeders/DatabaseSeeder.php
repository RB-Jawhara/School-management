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
    'email' => 'admin@example.com',
    'password' => Hash::make('P@ssw0rd2026!'),
    'student_parent_id' => 1, // Zid had l-line (awla ay ID 3ndek)
    'blood_type' => 'O+',     // Zid had l-line hit 7ta hiya daroriya
]);
    }
}
