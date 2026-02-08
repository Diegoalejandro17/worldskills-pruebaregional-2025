<?php

namespace App\Http\Controllers;

use App\Models\Estadistica;
use App\Models\Seleccion;
use Illuminate\Http\Request;

class EstadisticaController extends Controller
{
    public function index()
    {
        $posiciones = Estadistica::with('seleccion')
            ->orderByDesc('puntos')
            ->orderByDesc('gd')
            ->get();

        $respuesta = $posiciones->map(function ($item) {
            return [
                'seleccion' => $item->seleccion->nombre,
                'bandera' => $item->seleccion->bandera,
                'pj' => $item->pj,
                'pg' => $item->pg,
                'pe' => $item->pe,
                'pp' => $item->pp,
                'gf' => $item->gf,
                'gc' => $item->gc,
                'gd' => $item->gd,
                'puntos' => $item->puntos,
            ];
        });

        return response()->json($respuesta, 200);
    }
}
