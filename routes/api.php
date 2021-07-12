<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/',[\App\Http\Controllers\Auth\LoginController::class,'index'])->name('Auth.login');
Route::post('/',[\App\Http\Controllers\Auth\LoginController::class,'store'])->name('login.store');
Route::post('/logout',[\App\Http\Controllers\Auth\LoginController::class,'logOut'])->middleware('auth:api');
Route::resource('register',\App\Http\Controllers\Auth\RegisterController::class);
Route::get('/home',[\App\Http\Controllers\HomeController::class,'index'])->name('home.index')->middleware('auth:api');
Route::group(['prefix'=>'user','middleware'=>'auth:api'],function(){
    Route::post('update/{id}',[\App\Http\Controllers\Auth\ProfileController::class,'update']);
});

Route::get('post/',[\App\Http\Controllers\PostController::class,'index'])->middleware('auth:api');
Route::post('post/add',[\App\Http\Controllers\PostController::class,'store'])->middleware('auth:api');
Route::post('post/delete',[\App\Http\Controllers\PostController::class,'destroy'])->middleware('auth:api');
Route::get('post/all',[\App\Http\Controllers\PostController::class,'selectAll'])->middleware('auth:api');
Route::post('post/update',[\App\Http\Controllers\PostController::class,'update'])->middleware('auth:api');
