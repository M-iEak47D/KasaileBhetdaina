<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function (){
    return view('admin.index');
});

Route::group([
    'prefix' => '/admin',
    'as' => 'admin.',
    'namespace'=>'admin'
], function (){


    Route::get('/quiz','QuizController@index')->name('quiz');
    Route::post('/store/quiz', 'QuizController@store')->name('store.quiz');
    Route::get('/json/quiz', 'QuizController@getJson')->name('json.quiz');
    Route::get('/edit/quiz/{id}', 'QuizController@edit')->name('edit.quiz');
    Route::post('/update/quiz', 'QuizController@update')->name('update.quiz');
    Route::get('/delete/quiz/{id}', 'QuizController@destroy')->name('delete.quiz');
    Route::get('/changestatus/quiz/{id}', 'QuizController@changeStatus')->name('changestatus.quiz');

    Route::get('/user', 'UserController@index')->name('user');
    Route::post('/store/user', 'UserController@store')->name('store.user');
    Route::get('/json/user', 'UserController@getJson')->name('json.user');
    Route::get('/edit/user/{id}', 'UserController@edit')->name('edit.user');
    Route::get('/changestatus/user/{id}', 'UserController@changeStatus')->name('changestatus.user');
    Route::get('/add/userinfo/{id}', 'UserController@addUserInfo')->name('add.userinfo');
    Route::post('/store/userinfo', 'UserController@storeUserInfo')->name('store.userinfo');
    Route::post('/update/user', 'UserController@update')->name('update.user');
    Route::get('/delete/user/{id}', 'UserController@destroy')->name('delete.user');








    Route::get('/dashboard','DashboardController@index')->name('dashboard');

    Route::group(['prefix' => '/categories'], function (){
        Route::get('/','CategoryController@index')->name('categories');
        Route::post('/store','CategoryController@store')->name('store_categories');
        Route::post('/destroy','CategoryController@destroy')->name('destroy_categories');
        Route::get('/edit','CategoryController@edit')->name('edit_categories');
        Route::post('/edit/{id}','CategoryController@update')->name('post_edit_categories');
    });

    Route::group(['prefix' => '/courses'], function (){
       Route::get('/','CourseController@index')->name('courses');
       Route::post('/store','CourseController@store')->name('store_course');
       Route::post('/destroy','CourseController@destroy')->name('destroy_course');
       Route::get('/edit','CourseController@edit')->name('edit_course');
       Route::post('/edit/{id}','CourseController@update')->name('post_edit_course');
    });

    Route::group(['prefix' => '/subjects'], function (){
        Route::get('/','CourseController@index')->name('subjects');
        Route::post('/store','CourseController@store')->name('store_subject');
        Route::post('/destroy','CourseController@destroy')->name('destroy_subject');
        Route::get('/edit','CourseController@edit')->name('edit_subject');
        Route::post('/edit/{id}','CourseController@update')->name('post_edit_subject');
    });


    Route::group(['prefix' => '/chapters'], function (){
        Route::get('/','CourseController@index')->name('chapters');
        Route::post('/store','CourseController@store')->name('store_chapters');
        Route::post('/destroy','CourseController@destroy')->name('destroy_chapters');
        Route::get('/edit','CourseController@edit')->name('edit_chapters');
        Route::post('/edit/{id}','CourseController@update')->name('post_edit_chapters');
    });
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
