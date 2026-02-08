<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estadistica extends Model
{
    use HasFactory;

    protected $fillable = ['seleccion_id', 'pj', 'pg', 'pe', 'pp', 'gf', 'gc', 'gd', 'puntos'];

    public function seleccion()
{
    return $this->belongsTo(\App\Models\Seleccion::class);
}

}

