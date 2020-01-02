<?php

namespace App\Http\Controllers\admin;

use App\Model\Content;
use App\Model\FlashCard;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FlashCardController extends Controller
{
    public function getJson(){
        $flashcards = FlashCard::all();
        $count = 1;
        foreach ($flashcards as $flashcard){
            $flashcard->count = $count;
            $flashcard->date = $flashcard->created_at->format('Y-M-d');
            $count++;
        }
        return datatables($flashcards)->toJson();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contents = Content::where( 'parent_id', 0 )->get();
        return view('admin.flashcard.index', compact('contents'));
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

        $flashcard = new FlashCard();
        $flashcard->title = $request->title;
        $flashcard->status = $request->status;
        $flashcard->description = $request->description;
        $flashcard->chapter_id = $request->chapter_id;

        if ($request->hasFile('image'))
        {

            $img=$request->image;
            $fileName = time().".".$img->getClientOriginalExtension();
            $destinationPath=public_path('flashcard/');
            $img->move($destinationPath, $fileName);
            $flashcard->image='flashcard/'.$fileName;

        }
        $return = $flashcard->save();

        if($return){

            return response([
                'status' => 'success',
                'title' => 'Successfully Added.',
                'text' => 'Flash Card Successfully Added to  Your List!!',
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
        $flashcard = FlashCard::find($id);
        return view('admin.flashcard.edit', compact('flashcard'));
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
        $flashcard = FlashCard::where('id', $request->flashcard_id)->first();
        $flashcard->title = $request->title;
        $flashcard->status = $request->status;
        $flashcard->description = $request->description;
        $flashcard->chapter_id = $request->chapter_id;


        $return = $flashcard->update();

        if($return){

            return response([
                'status' => 'success',
                'title' => 'Successfully Updated.',
                'text' => 'Flash Card Successfully Updated From  Your List!!',
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
        $flashcard = FlashCard::find($id);
        $return = $flashcard->delete();
        if ($return){
            return response([
                'status' => 'Success',
                'title' => 'Deleted',
                'text' => 'User Deleted From Your List!!',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Deleting!!',
            ]);
        }
    }

    public function changeStatus($id){

        $flashcard = FlashCard::find($id);
        if($flashcard->status == 1){
            $flashcard->status = 0;
        }else{
            $flashcard->status = 1;
        }
        $return = $flashcard->update();

        if($return){

            return response([
                'status' => 'success',
            ]);
        }
    }
}
