<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\Chapter\ChapterCollection;
use App\Http\Resources\Question\QuestionCollection;
use App\Http\Resources\SubjectWithChapters\SubjectCollection;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizQuestionController extends Controller
{
    public function get_subjects(){
        $type = Category::where('slug', 'subject')->first();
        $subs = Content::where('type', $type->id)->get();
        $subjects = new SubjectCollection($subs);
        return $subjects;
    }

    public function get_questions($id){
        $selected_chapter = Content::findOrFail($id);
        $questions = $selected_chapter->questions;
        $api_questions = new QuestionCollection($questions);
//        dd($api_questions);
        return $api_questions->map->only(['id', 'name', 'marks','image','importance','year']);
    }
}
