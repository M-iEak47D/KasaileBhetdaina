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


    Route::get('/note', 'NoteController@index')->name('note');
    Route::post('/store/note', 'NoteController@store')->name('store.note');
    Route::get('/json/note', 'NoteController@getJson')->name('json.note');
    Route::get('/edit/note/{id}', 'NoteController@edit')->name('edit.note');
    Route::get('/changestatus/note/{id}', 'NoteController@changeStatus')->name('changestatus.note');
    Route::post('/update/note', 'NoteController@update')->name('update.note');
    Route::get('/delete/note/{id}', 'NoteController@destroy')->name('delete.note');


    Route::get('/flashcard', 'FlashCardController@index')->name('flashcard');
    Route::post('/store/flashcard', 'FlashCardController@store')->name('store.flashcard');
    Route::get('/json/flashcard', 'FlashCardController@getJson')->name('json.flashcard');
    Route::get('/edit/flashcard/{id}', 'FlashCardController@edit')->name('edit.flashcard');
    Route::get('/changestatus/flashcard/{id}', 'FlashCardController@changeStatus')->name('changestatus.flashcard');
    Route::post('/update/flashcard', 'FlashCardController@update')->name('update.flashcard');
    Route::get('/delete/flashcard/{id}', 'FlashCardController@destroy')->name('delete.flashcard');




//    select class,chapter,subject, in gobal controller

    Route::get('/change/notecontent/', 'GobalController@changeNoteContent')->name('change.notecontent');
    Route::get('/change/flashcardcontent/', 'GobalController@changeFlashCardContent')->name('change.flashcardcontent');




    Route::get('/dashboard','DashboardController@index')->name('dashboard');

    Route::group(['prefix' => '/categories'], function (){
        Route::get('/','CategoryController@index')->name('categories');
        Route::post('/store','CategoryController@store')->name('store_categories');
        Route::post('/edit/{id}','CategoryController@update')->name('update_categories');
    });

    Route::group(['prefix' => '/courses'], function (){
        Route::get('/','CourseController@index')->name('courses');
        Route::post('/store_class','CourseController@store_class')->name('store_class');
        Route::post('/store_prep','CourseController@store_preparation')->name('store_preparation');
        Route::post('/destroy','CourseController@destroy')->name('destroy_course');
        Route::post('/edit_class/{id}','CourseController@update_class')->name('update_class');
        Route::post('/edit_prep/{id}','CourseController@update_preparation')->name('update_preparation');
    });

    Route::group(['prefix' => '/subjects'], function (){
        Route::get('/','SubjectController@index')->name('subjects');
        Route::post('/store','SubjectController@store')->name('store_subject');
        Route::post('/destroy','SubjectController@destroy')->name('destroy_subject');
        Route::post('/edit/{id}','SubjectController@update')->name('update_subject');
    });

    Route::group(['prefix' => '/chapters'], function (){
        Route::get('/','ChapterController@index')->name('chapters');
        Route::post('/store','ChapterController@store')->name('store_chapter');
        Route::post('/destroy','ChapterController@destroy')->name('destroy_chapters');
        Route::post('/edit/{id}','ChapterController@update')->name('update_chapter');
    });


    Route::group(['prefix' => '/questions'], function () {
        Route::get('/','QuestionController@index')->name('questions');
        Route::get('/add','QuestionController@add')->name('add_question');
        Route::post('/store','QuestionController@store')->name('store_question');
        Route::get('/edit/{id}','QuestionController@edit')->name('edit_question');
    });
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
