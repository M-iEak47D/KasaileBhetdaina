<?php

namespace App\Http\Controllers\admin;

use App\Model\Category;
use App\Model\Content;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChapterController extends Controller
{
    public function index()
    {
        $sub = Category::where('slug','subject')->first();
        $chapter_type = Category::where('slug','chapter')->first();
        $subjects = $sub->contents;
        return view('admin.chapters.index',compact('subjects','chapter_type'));
    }

    public function store(Request $request){
//        dd($request);
        $parent = Content::findOrFail($request->parent_id);
        $grandparent = $parent->parent;
        Content::create([
            'name' => $request->name,
            'type' => $request->type,
            'parent_id' => $request->parent_id,
            'code' => 'ch-'.substr($grandparent->slug,0,3).'-'.substr($parent->slug,0,3),
        ]);
        return redirect()->back()->with('success','Chapter Created Successfully');
    }

    public function update(Request $request,$id){
        $content = Content::findOrFail($id);
        $content->slug = null;
        $parent = Content::findOrFail($request->parent_id);
        $grandparent = $parent->parent;
        $content->update([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'code' => 'ch-'.substr($grandparent->slug,0,3).'-'.substr($parent->slug,0,3),
        ]);
        return redirect()->back()->with('success','Chapter Edited Successfully');
    }
}
