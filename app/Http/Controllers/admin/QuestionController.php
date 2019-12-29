<?php

namespace App\Http\Controllers\admin;

use App\Model\Category;
use App\Model\Content;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    public function index()
    {
        $chap = Category::where('slug','chapter')->first();
        $chapters = $chap->contents;
//        dd($chapters);
        $questions = Question::all();
        return view('admin.questions.index',compact('questions','chapters'));
    }

    public function add(){
        $chap = Category::where('slug','chapter')->first();
        $chapters = $chap->contents;
        return view('admin.questions.question_add',compact('chapters'));
    }

    public function store(Request $request){
        $db_filename = "";
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = time().'-question'.$image->getClientOriginalExtension();
            $image->move(public_path().'/admin/images/questions/',$filename);
            $db_filename = '/admin/images/questions/'.$filename;
        }
        $question = Question::create([
            'name' => $request->name,
            'chapter_id' => $request->chapter,
            'marks' => $request->marks,
            'year' => serialize($request->year),
            'importance' => $request->importance,
            'image' => $db_filename,
        ]);
        $answers = $request->option;
        $counter = 1;
        foreach ($answers as $answer){
            if($request->option_boolean == $counter){
                $correct = 1;
            }
            else{
                $correct = 0;
            }
            $question->answers()->create([
                'name' => $answer['answer'],
                'correct' => $correct,
            ]);
            $counter ++;
        }
        return redirect()->back()->with('success','Question Created Successfully');
    }
    public function edit($id){
        return view('admin.questions.question_edit');
    }
}
