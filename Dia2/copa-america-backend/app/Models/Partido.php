<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $fillable = [
        'fecha', 'hora', 'equipo1_id', 'equipo2_id', 'goles_equipo1', 'goles_equipo2'
    ];
}
