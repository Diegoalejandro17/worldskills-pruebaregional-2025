<?php

namespace App\Http\Controllers;

use App\Models\Seleccion;
use App\Models\Partido;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SeleccionController extends Controller
{
    public function index()
    {
        return response()->json(Seleccion::all(), 200);
    }

    public function show($id)
    {
        $seleccion = Seleccion::find($id);

        if (!$seleccion) {
            return response()->json(['message' => 'Selección no encontrada'], 404);
        }

        return response()->json($seleccion, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:100',
            'bandera' => 'required|image|mimes:jpg,jpeg,png|max:3072',
        ]);

        list($ancho, $alto) = getimagesize($request->file('bandera'));
        if ($ancho > 500 || $alto > 500) {
            return response()->json([
                'message' => 'La imagen no debe superar los 500x500 píxeles.'
            ], 422);
        }

        $imagen = $request->file('bandera');
        $nombreImagen = Str::uuid() . '.' . $imagen->getClientOriginalExtension();

        $imagen->storeAs('public/banderas', $nombreImagen);

        $rutaAccesible = 'storage/banderas/' . $nombreImagen;

        $seleccion = Seleccion::create([
            'nombre' => $request->nombre,
            'bandera' => $rutaAccesible
        ]);

        return response()->json($seleccion, 201);
    }

    public function estadistica($id)
    {
        $seleccion = Seleccion::findOrFail($id);

        $pj = Partido::where('equipo1_id', $id)
            ->orWhere('equipo2_id', $id)
            ->count();

        $pg = Partido::where(function($q) use ($id) {
            $q->where('equipo1_id', $id)->whereColumn('goles_equipo1', '>', 'goles_equipo2');
        })->orWhere(function($q) use ($id) {
            $q->where('equipo2_id', $id)->whereColumn('goles_equipo2', '>', 'goles_equipo1');
        })->count();

        $pe = Partido::where(function($q) use ($id) {
            $q->where(function ($q2) use ($id) {
                $q2->where('equipo1_id', $id)->orWhere('equipo2_id', $id);
            })->whereColumn('goles_equipo1', '=', 'goles_equipo2');
        })->count();

        $pp = $pj - $pg - $pe;

        $gf = Partido::where('equipo1_id', $id)->sum('goles_equipo1') +
              Partido::where('equipo2_id', $id)->sum('goles_equipo2');

        $gc = Partido::where('equipo1_id', $id)->sum('goles_equipo2') +
              Partido::where('equipo2_id', $id)->sum('goles_equipo1');

        $gd = $gf - $gc;
        $puntos = $pg * 3 + $pe;

        return response()->json([
            'seleccion' => $seleccion->nombre,
            'bandera' => asset($seleccion->bandera), 
            'pj' => $pj,
            'pg' => $pg,
            'pe' => $pe,
            'pp' => $pp,
            'gf' => $gf,
            'gc' => $gc,
            'gd' => $gd,
            'puntos' => $puntos
        ]);
    }
}
