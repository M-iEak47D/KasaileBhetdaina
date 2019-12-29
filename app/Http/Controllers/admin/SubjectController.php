<?php

namespace App\Http\Controllers\admin;

use App\Model\Category;
use App\Model\Content;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubjectController extends Controller
{
    public function index()
    {
        $subject_type = Category::where('slug','subject')->first();
        $courses = Content::where('parent_id',0)->get();
        return view('admin.subjects.index',compact('subject_type','courses'));
    }

    public function store(Request $request){
        $type = Category::find($request->type);
        $parent = Content::find($request->parent_id);
        Content::create([
           'name' => $request->name,
           'type' => $request->type,
           'parent_id' => $request->parent_id,
            'code' => substr($type->slug,0,2).'-'.substr($parent->slug,0,2).'-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','Subject Added Successfully');
    }
    public function update(Request $request,$id){
        $subject=Content::findOrFail($id);
        $type = Category::find($request->type);
        $parent = Content::find($request->parent_id);
        $subject->slug = null;
        $subject->update([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'code' => substr($type->slug,0,3).'-'.substr($parent->slug,0,3).'-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','Subject Edited Successfully');
    }
}
