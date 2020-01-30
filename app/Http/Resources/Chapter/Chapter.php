<?php

namespace App\Http\Resources\Chapter;

use App\Http\Resources\Question\Question;
use Illuminate\Http\Resources\Json\JsonResource;

class Chapter extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $marks = $this->marks_weightages->pluck('marks');
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'code' => $this->code,
            'marks' => $marks,
        ];
    }
}
