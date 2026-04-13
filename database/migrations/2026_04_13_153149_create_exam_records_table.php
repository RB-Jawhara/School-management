<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Exam;
use App\Models\User;
use App\Models\Classe;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {//hed table li hiya exam_records fiha les notes ta3 les etudiants fi les exams mta3hom
        Schema::create('exam_records', function (Blueprint $table) {
            $table->id();
            $table->SoftDeletes();
            $table->foreignIdFor(Exam::class)->constrained()->onDelete('cascade');
            //hed user fiha foreign key mta3 l'etudiant li howa user w classe fiha foreign key mta3 classe li howa classe li howa classe ta3 l'etudiant
            $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');
             
            $table->unsignedFloat('note');
            $table->text('comment');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exam_records');
    }
};
