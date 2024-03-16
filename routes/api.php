<?php
use App\Http\Controllers\FileConversionController;
use Illuminate\Support\Facades\Route;
Route::post('/convert-to-pdf', [FileConversionController::class, 'convertToPDF']);

Route::get('/', function () {
    return view('welcome');
});