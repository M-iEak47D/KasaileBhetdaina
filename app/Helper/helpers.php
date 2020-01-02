<?php
use App\Model\Category;
use App\Model\Content;


    function getCategoryChild($data){

//           $category = Category::where('id', $data)->first();
//           $contents = Content::where('id', $category->id)->get();
//
////           foreach ($contents as $content){
////
////
////           }
//           return $contents;

    }


     function selectChild( $id ) {
		$categories = Category::where( 'parent_id', $id )->get(); //rooney

		$categories = addRelation( $categories );

		return $categories;

	}

	 function addRelation( $categories ) {

		$categories->map( function ( $item, $key ) {

			$sub = $this->selectChild( $item->id );

			return $item = array_add( $item, 'subCategory', $sub );

		} );

		return $categories;
	}


?>
