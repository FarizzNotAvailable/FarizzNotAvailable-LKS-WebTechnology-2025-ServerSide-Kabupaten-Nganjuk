<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Validations\GetValidationController;
use App\Http\Controllers\Validations\RequestValidationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/v1')->group(function(){
    Route::post('/auth/login', [LoginController::class, 'Index']);
    Route::post('/auth/logout', [LogoutController::class, 'Index']);
    
    Route::post('/validation', [RequestValidationController::class, 'Index']);
    Route::get('/validation', [GetValidationController::class, 'Index']);
});