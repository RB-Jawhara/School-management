<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Course;
use App\Models\ClassType;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    //table coure fiha pluseieur  et table de type de classe fiha pluseieur 3la 3la9a binathom khrjan hed table li hiya class_type_courses
    {
        Schema::create('class_type_courses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Course::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(ClassType::class)->constrained()->onDelete
            ('cascade');
            $table->unsignedTinyInteger('coef');
            $table->SoftDeletes();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_type_courses');
    }
};
