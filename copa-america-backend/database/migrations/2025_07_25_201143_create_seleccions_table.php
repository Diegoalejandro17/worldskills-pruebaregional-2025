<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('seleccions', function (Blueprint $table) {
        $table->id();
        $table->string('nombre');
        $table->string('bandera');
        $table->timestamps();
    });
}

   
    public function down(): void
    {
        Schema::dropIfExists('seleccions');
    }
};
