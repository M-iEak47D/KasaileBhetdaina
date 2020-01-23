<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\Question\Question as QuestionResource;
use App\Http\Resources\SubjectWithChapters\SubjectCollection;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use App\Model\Answer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    public function add_question(Request $request){

        //        dd($request);
                $question = new Question();
                $question->name = $request->question;
                $question->marks = $request->marks;
                $question->importance = $request->importance;
                $question->chapter_id = $request->chapter_id;
        
                $year = json_decode($request->year);
                $question->year = serialize($year);
        
                //image handling
                $db_filename ="";
                if($request->hasFile('file')) {
                    $image = $request->file('file');
                    $filename = time().'.'.$image->getClientOriginalExtension();
                    $path = '/admin/images/question/';
                    $image->move(public_path().$path,$filename);
                    $db_filename = $path.$filename;
                }
                $question->image =$db_filename;
        
                $question->save();
        
                //setting answers
                $options = [$request->answerA,$request->answerB,$request->answerC,$request->answerD];
                $counter = 1;
                foreach ($options as $option){
                        $answer = new Answer();
                        $answer->name = $option;
                        $answer->question_id = $question->id;
                        if($counter == $request->correct){
                            $answer->correct =1;
                        }
                        else{
                            $answer->correct =0;
                        }
                        $counter++;
                        $answer->save();
                }
                if(Question::find($question->id)) {
                    return response()->json("Question Added Successfully", 200);
                }
                else{
                    return response()->json("Question Not Added", 400);
                }
        
            }

    public function edit($id){
        $question = Question::find($id);
        $type = Category::where('slug', 'subject')->first();
        $subs = Content::where('type', $type->id)->get();
//        foreach ($subjects as $subject) {
//            $chaps = $subject->children;
//            $subject->chapters = $chaps;
//        }
        $subjects = new SubjectCollection($subs);
        $question_resource = new QuestionResource($question);
        $subject_id = $question->chapter->parent->id;
        return $data = [
            'questions' => $question_resource,
            'subjects' => $subjects,
            'subject_id' => $subject_id,
        ];

    }
}
