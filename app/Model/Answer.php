<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable= [
        'name', 'correct', 'image',
    ];

    public function question(){
        return $this->belongsTo(Question::class,'question_id');
    }
}
