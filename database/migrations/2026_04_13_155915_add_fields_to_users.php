<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\StudentParent;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
        
      
            $table->enum('blood_type', ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
          
            
            // 1. Foreign Key: Smiya dial l-table khass tkon student_parents (awla guardians)
            // 2. foreignId khassha l-format: student_parent_id
            $table->foreignId('student_parent_id')->constrained('student_parents')->onDelete('cascade');
            
            $table->softDeletes(); // S sghira: softDeletes() machi SoftDeletes()
          
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
          
           $table->dropForeign(['student_parent_id']);
            $table->dropColumn(['blood_type', 'student_parent_id', 'deleted_at']); // S sghira: dropForeignIdFor() machi dropForeign()
            //
        });
    }
};
