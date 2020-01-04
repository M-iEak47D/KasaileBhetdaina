<?php

namespace App\Http\Controllers\admin;

use App\Model\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizQuestionController extends Controller
{
    public  function assign($id){
        $quiz = Quiz::findOrFail($id);
        return view('admin.quiz.assign_question',compact('quiz'));
    }
}
