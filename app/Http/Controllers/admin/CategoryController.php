<?php

namespace App\Http\Controllers\admin;

use App\Model\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return view('admin.categories.index',compact('categories'));
    }

    public function store(Request $request){
        Category::create([
           'name'=>$request->category_name,
        ]);
        return redirect()->back()->with('success','Category Created');
    }

    public function update(Request $request,$id){
        $category = Category::findOrFail($id);
        $category->update([
            'name' => $request->category_name,
        ]);

        return redirect()->back()->with('success','Category Edited');
    }
}
