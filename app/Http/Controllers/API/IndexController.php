<?php

namespace App\Http\Controllers\API;

use App\Model\Answer;
use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Question\QuestionCollection;

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

    public function get_quiz_of_subject($subject_id){
        //
        $subject = Content::findOrFail($subject_id);
        // dd($subject);
        $chapters = $subject->children;
        $questions_for_quiz = new Collection();
        foreach($chapters as $chapter){
            //find question_id of this chapter's question attempted by user
                $filter_layer_1 = $chapter->questions;
                $chapterwise_question = new Collection();
                foreach($chapter->marks_weightages as $mw){
                    $filter_layer_2 = $filter_layer_1->where('marks', $mw->marks);
                    // return $filter_layer_2;
                    $chapter_attempted_question_id = [16,37,44];
                    $iteration_attempt = 0;
                    $reps = 0;
                    while(1){
                        $questions = $filter_layer_2->random($mw->quantity); // The amount of items you wish to receive
                        // $ques = get_question($mw, $mw->chapter);
                        //check repetition % with user Log!
                        $generated_ids = $questions->pluck('id')->toArray();
                        // return $generated_ids;
                        $generated_ids_count = $questions->count();
                        $repitions = count(array_intersect($generated_ids,$chapter_attempted_question_id));
                        // return $repitions;
                        try{
                            if($generated_ids_count == 0){
                                throw new \Exception("Divisible by zero");
                            }
                            $reps = ($repitions/$generated_ids_count)*100;
                             
                        }catch(\Exception $e){
                            $reps = 0;
                        };
                        // dd($reps);
                        $iteration_attempt++;
                        // dd($iteration_attempt);
                        if($reps<30 || $iteration_attempt >=3){
                            break;
                        }
                    }
                    $chapterwise_question = $chapterwise_question->merge($questions);
                }
                // dd($chapterwise_question);                
            $questions_for_quiz = $questions_for_quiz->merge($chapterwise_question);
        }
        $final_questions =  new QuestionCollection($questions_for_quiz);
        dd($final_questions);
    }

    
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
