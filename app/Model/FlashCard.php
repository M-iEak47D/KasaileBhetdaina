<?php

namespace App\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FlashCard extends Model
{
    use Sluggable;
    use SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'image',
        'chapter_id',
        'status',
        'slug',
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function chapter(){
        return $this->belongsTo(Chapter::class, 'chapter_id');

    }
}
