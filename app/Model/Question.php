<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;
    protected $fillable=[
        'name', 'year', 'importance', 'image', 'marks',
    ];



    public function answers(){
        return $this->hasMany(Answer::Class);
    }

    public function chapter(){
        return $this->belongsTo(Content::class,'chapter_id');
    }
}
