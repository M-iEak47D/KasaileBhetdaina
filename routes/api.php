<?php

use Illuminate\Http\Request;

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



Route::group([
    'namespace' => 'admin',
    'as' => 'api.'
], function() {
    Route::post('store/question', 'QuestionController@store');
});


Route::group([
    'namespace' => 'api',
    'as' => 'api.'
], function() {

    Route::get('user', 'UserController@index');
    Route::post('register', 'UserController@store');
    Route::post('login', 'UserController@login');
    Route::post('validateotp', 'UserController@validateOTP');
    Route::post('savepassword', 'UserController@savePassword');



});
