<?php

namespace App\Http\Resources\Question;

use App\Http\Resources\Answer\Answer;
use App\Http\Resources\Answer\AnswerCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class Question extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'image' => isset($this->image) && $this->image!="" ? '127.0.0.1:8000'.$this->image : "",
            'marks' => $this->marks,
            'chapter_id' => $this->chapter_id,
            'importance' => $this->importance,
            'year' => unserialize($this->year),
            'answers' => Answer::collection($this->answers),
        ];
    }
}
