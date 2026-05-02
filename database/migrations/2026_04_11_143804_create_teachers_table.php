<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('firstname', 55);
            $table->string('lastname', 55);
            $table->dateTime('date_of_birth')->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->string('address', 255)->nullable();
            $table->string('email', 255)->unique();
            $table->string('phone_number', 20)->nullable();
            $table->SoftDeletes ();
             $table->timestamp('email_verified_at')->nullable();
                 $table->enum('blood_type', ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);//email_verified_at khass ykon nullable
              $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
