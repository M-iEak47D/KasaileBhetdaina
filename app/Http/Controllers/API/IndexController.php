<?php

namespace App\Http\Controllers\API;

use App\Model\Answer;
use App\Model\Category;
use App\Model\Content;
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

    public function get_quiz_of_subject($id){
        $subject = Content::findOrFail($id);
        dd($subject);
        $chapters = $subject->children;
        // $questions = [];
        foreach($chapters as $chapter){
            foreach($chapter->marks_weightages as $mw){
                $questions = Question::where('chapter_id',$chapter->id)->where('marks',$mw)->inRandomOrder()->limit(1)->get();
                // $ques = get_question($mw, $mw->chapter);
                dd($questions);
                //check repetition % with user Log!
            }
        }
    }

    // public function get_question($mw, $chapter){
    //     $questions = Question::where('chapter_id',$chapter->id)->where('marks',$mw)->inRandomOrder()->limit(1)->get();
    //     //check repetition

    // }
    
    public function trial(Request $request){
        if($request->hasFile('profile_image')){
            $image = $request->file('profile_image');
            $filename = time().'.'.$image->getClientOriginalExtension();
            $path = 'test/';
            if($image->move(public_path().'/'.$path,$filename)){
                return response()->json('File found and saved',200);  
            }
            else{
                return response()->json('File found and but not saved',200);
            }
        }
        else{
            return response()->json('File Not found',200);
        }
    }
    
    public function preview(){
        $data = [
            'name'=>"Check",
            'profile_image'=>'http://192.168.1.67/test/blue_dress.jpg'
        ];
        return $data;
    }
}
