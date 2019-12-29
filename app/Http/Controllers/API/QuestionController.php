<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\Question\Question as QuestionResource;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    public function edit($id){
        $question = Question::find($id);
        $type = Category::where('slug', 'subject')->first();
        $subjects = Content::where('type', $type->id)->get();
        foreach ($subjects as $subject) {
            $chaps = $subject->children;
            $subject->chapters = $chaps;
        }
        $question_resource = new QuestionResource($question);
        $subject_id = $question->chapter->parent->id;
        return $data = [
            'questions' => $question_resource,
            'subjects' => $subjects,
            'subject_id' => $subject_id,
        ];

    }
}
