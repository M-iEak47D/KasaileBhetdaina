<?php

use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Question\QuestionCollection;
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
    Route::post('register', 'RegisterController@store');
    Route::post('login', 'RegisterController@login');
    Route::post('validateotp', 'RegisterController@validateOTP');
    Route::post('savepassword', 'RegisterController@savePassword');


//    Note Jsondata

    Route::get('notes', 'NoteController@index');

    Route::get('flashcards', 'FlashCardController@index');

});



Route::middleware('cors')->get('/navs', function (){
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
    $subjects = Content::where('type', $type->id)->get();
    foreach ($subjects as $subject) {
        $chaps = $subject->children;
        $subject->chapters = $chaps;
    }
    return $subjects;

});

Route::post('/post_question_add','API\IndexController@add_question');

Route::group([
    'prefix' => '/admin',
    'as' => 'admin.',
    'namespace'=>'API'
], function () {

    Route::group(['prefix' => '/questions'], function () {
        Route::get('/edit/{id}', 'QuestionController@edit');
    });
});
