<?php

namespace App\Http\Controllers\admin;

use App\Model\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizController extends Controller
{


    public function getJson(){
        $quizs = Quiz::all();

        $count = 1;

        foreach ($quizs as $quiz){
            $quiz->count = $count;
            $count++;
        }
        return datatables($quizs)->toJson();
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quizs = Quiz::all();
        return view('admin.quiz.index', compact('quizs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request);

        $quiz = new Quiz();
        $quiz->title = $request->title;
        $quiz->time = $request->time;
        $quiz->description = $request->description;
        $quiz->total_question = $request->total_question;
        $quiz->status = $request->status;

        $return = $quiz->save();

        if ($return){
            return response([
                'status' => 'success',
                'title' => 'Successfully Added.',
                'text' => 'New Quiz Added to your list',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Adding!!',
            ]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $quiz = Quiz::find($id);
        return view('admin.quiz.edit', compact('quiz'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $quiz_id = $request->quiz_id;
        $quiz = Quiz::where('id', $quiz_id)->first();
        $quiz->title = $request->title;
        $quiz->time = $request->time;
        $quiz->description = $request->description;
        $quiz->total_question = $request->total_question;
        $quiz->status = $request->status;

        $return = $quiz->Update();

        if ($return){
            return response([
                'status' => 'success',
                'title' => 'Successfully Update.',
                'text' => 'Quiz Updated From Your List!!',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Updating!!',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quiz = Quiz::find($id);
        $return = $quiz->delete();
        if ($return){
            return response([
                'status' => 'Success',
                'title' => 'Deleted',
                'text' => 'Quiz Deleted From Your List!!',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Deleting!!',
            ]);
        }
    }
}
