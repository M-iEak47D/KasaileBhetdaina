<?php

namespace App\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quiz extends Model
{
    use Sluggable;
    use SoftDeletes;

    protected $fillable =[
      'title',
      'time',
      'description',
        'status',
        'total_question',
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

    public function questions(){
        return $this->belongsToMany(Question::class,'question_quiz');
    }
}

