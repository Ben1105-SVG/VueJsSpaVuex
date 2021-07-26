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

//Route::get('/{token?}',[\App\Http\Controllers\Auth\LoginController::class,'index'])->name('Auth.login');
Route::post('/',[\App\Http\Controllers\Auth\LoginController::class,'store'])->name('login.store');
Route::resource('register',\App\Http\Controllers\Auth\RegisterController::class);
Route::get('verify_account/{id}',[\App\Http\Controllers\Auth\RegisterController::class,'verify_email']);
Route::get('checkVerifiedEmail/{id}',[\App\Http\Controllers\UserController::class,'checkIfVerifiedEmail']);
Route::group(['middleware'=>'auth:api'],function (){

    Route::get('/home',[\App\Http\Controllers\HomeController::class,'index'])->name('home.index');

    //    Routes for User
    Route::group(['prefix'=>'user'],function(){
        Route::get('/', function (Request $request) { return $request->user(); });
        Route::post('update/{id}',[\App\Http\Controllers\Auth\ProfileController::class,'update']);
    });


    // Routes for Post
    Route::group(['prefix'=>'post'],function(){
        Route::get('/',[\App\Http\Controllers\PostController::class,'index']);
        Route::post('/add',[\App\Http\Controllers\PostController::class,'store']);
        Route::post('/delete',[\App\Http\Controllers\PostController::class,'destroy']);
        Route::get('/all',[\App\Http\Controllers\PostController::class,'selectAll']);
        Route::post('/update',[\App\Http\Controllers\PostController::class,'update']);
        Route::get('/show/{id}',[\App\Http\Controllers\PostController::class,'show']);
    });
    Route::post('/logout',[\App\Http\Controllers\Auth\LoginController::class,'logOut']);

});

