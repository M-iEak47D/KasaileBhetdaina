<?php

namespace App\Http\Resources\Category;

use App\Http\Resources\Course\Course;
use App\Http\Resources\Course\CourseCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class Category extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'courses' => Course::collection($this->contents),
        ];
    }
}
