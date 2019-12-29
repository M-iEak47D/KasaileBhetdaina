<?php

namespace App\Http\Controllers\API;

use App\Model\Answer;
use App\Model\Category;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function courses(){
//        $course = Category::
    }

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

}
