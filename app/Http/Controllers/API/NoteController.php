<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Note\NoteCollection;
use App\Http\Resources\Note\NoteResource;
use App\Model\Note;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $abc = "{
data: [
{
id: 1,
title: \"Amet pariatur Iste\",
slug: \"amet-pariatur-iste\",
description: null,
chapter_id: 6,
chapter: {
name: \"Anatomy\",
slug: \"anatomy\",
code: \"ch-iom-bio\",
id: 6
},
subject: {
name: \"Biology\",
slug: \"biology\",
code: \"su-io-bio\",
id: 4
},
class: {
name: \"IOM\",
slug: \"iom\",
code: \"pr-iom\",
id: 2
}
},
{
id: 2,
title: \"Molestias provident\",
slug: \"molestias-provident\",
description: null,
chapter_id: 5,
chapter: {
name: \"Algebra\",
slug: \"algebra\",
code: \"ch-see-mat\",
id: 5
},
subject: {
name: \"Math\",
slug: \"math\",
code: \"su-se-mat\",
id: 3
},
class: {
name: \"SEE\",
slug: \"see\",
code: \"cl-see\",
id: 1
}
}
]
}";

//        $Notes = Note::where('status', 1)->get();
//        return NoteResource::collection($Notes);


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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


    }
}
