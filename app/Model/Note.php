<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'file',
        'chapter_id',
        'status',
    ];

    public function chapter(){
        return $this->belongsTo(Chapter::class, 'chapter_id');

    }
}
