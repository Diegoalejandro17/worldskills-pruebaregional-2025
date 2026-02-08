<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('partidos', function (Blueprint $table) {
        $table->id();
        $table->date('fecha');
        $table->time('hora');
        $table->foreignId('equipo1_id')->constrained('seleccions');
        $table->integer('goles_equipo1');
        $table->foreignId('equipo2_id')->constrained('seleccions');
        $table->integer('goles_equipo2');
        $table->timestamps();
    });
}


    public function down(): void
    {
        Schema::dropIfExists('partidos');
    }
};
