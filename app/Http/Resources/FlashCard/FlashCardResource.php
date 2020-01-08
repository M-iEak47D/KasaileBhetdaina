<?php

namespace App\Http\Resources\FlashCard;

use App\Model\Content;
use Illuminate\Http\Resources\Json\JsonResource;

class FlashCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $chapter = Content::where('id', $this->chapter_id)->first();
        $subject = Content::where('id', $chapter->parent_id)->first();
        $class = Content::where('id', $subject->parent_id)->first();

                return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'chapter_id' => $this->chapter_id,

            'chapter' =>[
                'name' => $chapter->name,
                'slug' => $chapter->slug,
                'code' => $chapter->code,
                'id' => $chapter->id,
            ],
            'subject' =>[
                'name' => $subject->name,
                'slug' => $subject->slug,
                'code' => $subject->code,
                'id' => $subject->id,
            ],
            'class' =>[
                'name' => $class->name,
                'slug' => $class->slug,
                'code' => $class->code,
                'id' => $class->id,
            ],
        ];
    }
}
