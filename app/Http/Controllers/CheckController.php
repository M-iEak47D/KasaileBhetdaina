<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckController extends Controller
{
    //
    public function index(Request $request){
        $variable = ' {
            "data": [
            class: {
                name: SEE,
                id: 1,
                slug: see
                subject: {
                    name: Math
                    id: 3,
                    slug: maths
                    chapter: {
                        name: Set
                        id: 3,
                        slug: sets
                    }
                    }
                }
             ]
            }';
            $response = json_decode($variable);
            return $response;
    }
}
