<?php

namespace App\Http\Controllers;

use App\Model\SubSubject;
use Illuminate\Http\Request;

class SubSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subSubjects = SubSubject::all();
        return view('admin.subSubjects.index',compact('subSubjects'));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SubSubject  $subSubject
     * @return \Illuminate\Http\Response
     */
    public function show(SubSubject $subSubject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SubSubject  $subSubject
     * @return \Illuminate\Http\Response
     */
    public function edit(SubSubject $subSubject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubSubject  $subSubject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubSubject $subSubject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubSubject  $subSubject
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubSubject $subSubject)
    {
        //
    }
}
