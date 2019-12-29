<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Model\Category;
use App\Model\Content;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $class = Category::where('slug','class')->first();
        $preparation = Category::where('slug','preparation')->first();
        return view('admin.courses.index',compact('class','preparation'));
    }

    public function create()
    {
        //
    }

    public function store_class(Request $request)
    {
        Content::create([
            'name' => $request->name,
            'type' => $request->type,
            'parent_id' => 0,
            'code' => 'cl-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','New Class Added');
    }

    public function store_preparation(Request $request){
        Content::create([
            'name' => $request->name,
            'type' => $request->type,
            'parent_id' => 0,
            'code' => 'pr-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','New Preparation Course Added');
    }

    public function update_class(Request $request, $id)
    {
        $course = Content::findOrFail($id);
        $course->slug = null;
        $course->update([
            'name' => $request->name,
            'code' => 'cl-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','Class Updated Successfully');
    }
    public function update_preparation(Request $request, $id)
    {
        $course = Content::findOrFail($id);
        $course->slug = null;
        $course->update([
            'name' => $request->name,
            'code' => 'pr-'.substr(strtolower($request->name),0,3),
        ]);
        return redirect()->back()->with('success','Preparation Course Updated Successfully');
    }

    public function destroy($id)
    {
        //
    }
}
