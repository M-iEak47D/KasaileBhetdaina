<?php

use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Question\QuestionCollection;
use App\Http\Resources\SubjectWithChapters\SubjectCollection;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
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

// Route::group([
//     'namespace' => 'admin',
//     'as' => 'api.'
// ], function() {
//     Route::post('store/question', 'QuestionController@store');
// });


Route::group([
    'namespace' => 'api',
    'as' => 'api.'
], function() {

    Route::get('user', 'UserController@index');
    Route::post('register', 'RegisterController@store');
    Route::post('login', 'RegisterController@login');
    Route::post('validateotp', 'RegisterController@validateOTP');
    Route::post('savepassword', 'RegisterController@savePassword');


//    Note Jsondata

    Route::get('notes', 'NoteController@index');

    Route::get('flashcards', 'FlashCardController@index');

});



Route::get('/navs', function (){
    $categories = Category::where('slug','class')->orWhere('slug','preparation')->get();
    return new CategoryCollection($categories);
});


Route::middleware('cors')->get('/ques', function (){
    $questions = Question::all();
    return new QuestionCollection($questions);
});

Route::middleware('cors')->get('/store/question',function (){
    $questions = Question::all();
    return new QuestionCollection($questions);
});

Route::get('/subjects', function () {
    $type = Category::where('slug', 'subject')->first();
    $subs = Content::where('type', $type->id)->get();
    $subjects = new SubjectCollection($subs);
    return $subjects;
});


Route::group([
    'prefix' => '/admin',
    'as' => 'admin.',
    'namespace'=>'API'
], function () {

    Route::group(['prefix' => '/questions'], function () {
        Route::post('/post_question_add','QuestionController@add_question');
        Route::get('/edit/{id}', 'QuestionController@edit');
        Route::post('/edit/{id}', 'QuestionController@update');
    });


    Route::group(['prefix' => '/quiz'], function () {
        Route::get('/get_subjects/{quiz_id}', 'QuizQuestionController@get_subjects');
        Route::get('/get_questions/{quiz_id}/{chapter_id}','QuizQuestionController@get_questions');
        Route::post('/add_remove_ques/{quiz_id}/{question_id}','QuizQuestionController@attach_detach');
    });

});

//test apis
Route::get('/package/{id}','API\IndexController@get_quiz_of_subject');

Route::post('/trial','API\IndexController@trial');
Route::get('/preview','API\IndexController@preview');
