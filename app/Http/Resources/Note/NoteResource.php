<?php

namespace App\Http\Resources\Note;

use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        return  getCategoryChild(1);
//        return [
//            'id' => $this->id,
//            'title' => $this->title,
//            'file' => asset($this->file),
//            'chapter_id' => $this->chapter_id,
//            'chapter_name' =>
//        ];
    }
}
