<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FlashCard extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'chapter_id',
        'status',
    ];

    public function chapter(){
        return $this->belongsTo(Chapter::class, 'chapter_id');

    }
}
