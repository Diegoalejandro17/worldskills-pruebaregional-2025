<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up()
{
    Schema::create('estadisticas', function (Blueprint $table) {
        $table->id();
        $table->foreignId('seleccion_id')->constrained('seleccions');
        $table->integer('pj')->default(0);
        $table->integer('pg')->default(0);
        $table->integer('pe')->default(0);
        $table->integer('pp')->default(0);
        $table->integer('gf')->default(0);
        $table->integer('gc')->default(0);
        $table->integer('gd')->default(0);
        $table->integer('puntos')->default(0);
        $table->timestamps();
    });
}

    public function down(): void
    {
        Schema::dropIfExists('estadisticas');
    }
};
