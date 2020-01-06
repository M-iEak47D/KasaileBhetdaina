<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\Chapter\ChapterCollection;
use App\Http\Resources\Question\QuestionCollection;
use App\Http\Resources\SubjectWithChapters\SubjectCollection;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use App\Model\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizQuestionController extends Controller
{
    public function get_subjects($id){
        $quiz = Quiz::findOrFail($id);
        $count = 0;
        if($quiz->questions) {
            $count = $quiz->questions->count();
        }
//        $count = $quiz->questions->count();
        $type = Category::where('slug', 'subject')->first();
        $subs = Content::where('type', $type->id)->get();
        $subjects = new SubjectCollection($subs);
        return response()->json([
            'subjects' => $subjects,
            'quiz' => $quiz->only(['id', 'total_question']),
            'quiz_question_count' => $count,
        ]);
    }

    public function get_questions($quiz_id,$chapter_id){
        $quiz = Quiz::findOrFail($quiz_id);
        $selected_chapter = Content::findOrFail($chapter_id);
        $questions = $selected_chapter->questions;
        $api_questions = new QuestionCollection($questions);
        $belongsToQuiz = $quiz->questions->pluck('id');
//        dd($api_questions);
        return response()->json([
            'questions' => $api_questions->map->only(['id', 'name', 'marks','image','importance','year']),
            'belongsToQuiz' => $belongsToQuiz,
        ]);
//        return $api_questions->map->only(['id', 'name', 'marks','image','importance','year']);
    }

    public function attach_detach($quiz_id,$question_id){
        $quiz = Quiz::findOrFail($quiz_id);
        $belongsToQuiz = $quiz->questions->pluck('id');
        $quiz_hasQuestion = $quiz->questions()->where('questions.id',$question_id)->exists();
        if($quiz_hasQuestion){
            $quiz->questions()->detach($question_id);
            return response()->json([
                'message' => "Quiz has Question, detach done, qid = ".$question_id,
                'belongsToQuiz' => $belongsToQuiz,
            ]);
//            return "Quiz has Question, detach done, qid = ".$question_id;
        }
        else{
            $quiz->questions()->attach($question_id);
            return response()->json([
                'message' => "Quiz doesnot have Question, attach done, and id is = ".$question_id,
                'belongsToQuiz' => $belongsToQuiz,
            ]);
//            return "Quiz doesnot have Question, attach done, and id is = ".$question_id;
        }
    }
}
