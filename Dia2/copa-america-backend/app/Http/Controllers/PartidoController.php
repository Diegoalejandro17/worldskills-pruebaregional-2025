<?php

namespace App\Http\Controllers;

use App\Models\Partido;
use App\Models\Estadistica;
use Illuminate\Http\Request;

class PartidoController extends Controller
{
    public function index(Request $request)
    {
        $query = Partido::query();

        if ($request->has('seleccion_id')) {
            $id = $request->seleccion_id;
            $query->where('equipo1_id', $id)->orWhere('equipo2_id', $id);
        }

        $partidos = $query->orderBy('fecha', 'desc')->orderBy('hora', 'desc')->get();

        return response()->json($partidos, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'fecha' => 'required|date',
            'hora' => 'required',
            'equipo1_id' => 'required|exists:seleccions,id|different:equipo2_id',
            'goles_equipo1' => 'required|integer|min:0',
            'equipo2_id' => 'required|exists:seleccions,id',
            'goles_equipo2' => 'required|integer|min:0',
        ]);

        $partido = Partido::create($request->all());

        $this->actualizarEstadisticas(
            $request->equipo1_id,
            $request->equipo2_id,
            $request->goles_equipo1,
            $request->goles_equipo2
        );

        return response()->json(['message' => 'Partido registrado correctamente'], 201);
    }

    private function actualizarEstadisticas($id1, $id2, $goles1, $goles2)
    {
        $equipo1 = Estadistica::firstOrCreate(['seleccion_id' => $id1]);
        $equipo2 = Estadistica::firstOrCreate(['seleccion_id' => $id2]);

        // Partdis jugados
        $equipo1->pj++;
        $equipo2->pj++;

        // goles
        $equipo1->gf += $goles1;
        $equipo1->gc += $goles2;

        $equipo2->gf += $goles2;
        $equipo2->gc += $goles1;

        // Goles diferncia
        $equipo1->gd = $equipo1->gf - $equipo1->gc;
        $equipo2->gd = $equipo2->gf - $equipo2->gc;

        if ($goles1 > $goles2) {
            $equipo1->pg++;
            $equipo1->puntos += 3;
            $equipo2->pp++;
        } elseif ($goles2 > $goles1) {
            $equipo2->pg++;
            $equipo2->puntos += 3;
            $equipo1->pp++;
        } else {
            $equipo1->pe++;
            $equipo2->pe++;
            $equipo1->puntos += 1;
            $equipo2->puntos += 1;
        }

        $equipo1->save();
        $equipo2->save();
    }
}
