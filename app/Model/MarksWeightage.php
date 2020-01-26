<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Content;

class MarksWeightage extends Model
{
    protected $table = "marks_weightages";
    protected $fillable = [
        'marks', 'chapter_id', 'quantity', 'name',
    ];

    public function chapter(){
        return $this->belongsTo(Content::class, 'chapter_id');
    }
}
