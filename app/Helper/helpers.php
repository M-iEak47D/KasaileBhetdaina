<?php
use App\Model\Category;
use App\Model\Content;


    function getCategoryChild($data){

           $category = Category::where('id', $data)->first();
           $contents = Content::where('id', $category->id)->get();

           foreach ($contents as $content){


           }
           return $contents;

    }


?>
