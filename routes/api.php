<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Api\AuthController;
use App\Models\Admin;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\StudentParentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/admin', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/teacher', function (Request $request) {
    return $request->user();
});



 Route::apiResource('parents', StudentParentController::class);




Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

//e::post('/login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']);
Route::post('/user/login', [AuthController::class, 'userLogin']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/teacher/login', [AuthController::class, 'teacherLogin']);
