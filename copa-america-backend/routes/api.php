<?php

use App\Http\Controllers\SeleccionController;
use App\Http\Controllers\PartidoController;
use App\Http\Controllers\EstadisticaController;

Route::get('/selecciones', [SeleccionController::class, 'index']);
Route::get('/seleccion/{id}', [SeleccionController::class, 'show']);
Route::post('/selecciones', [SeleccionController::class, 'store']);
Route::get('/seleccion/{id}/estadistica', [SeleccionController::class, 'estadistica']);

Route::get('/resultados', [PartidoController::class, 'index']);
Route::post('/resultados', [PartidoController::class, 'store']);

Route::get('/posiciones', [EstadisticaController::class, 'index']);
