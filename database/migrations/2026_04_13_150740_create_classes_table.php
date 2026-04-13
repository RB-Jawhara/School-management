<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ClassType;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //science mathematique
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('code', 100)->unique();
            $table->SoftDeletes();
            //hedi jadida fiha foreign key
           $table->foreignIdFor(App\Models\ClassType::class)->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
