<?php

namespace App\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Model\MarksWeightage;

class Content extends Model
{
    use sluggable;
    use SoftDeletes;
    protected $table="contents";

    protected $fillable=[
        'name','slug','type','parent_id','code'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function type(){
        return $this->belongsTo(Category::class,'type');
    }

    public function children(){
        return $this->hasMany(Content::class,'parent_id');
    }

    public function parent(){
        return $this->belongsTo(Content::class,'parent_id');
    }

    public function questions(){
        return $this->hasMany(Question::class,'chapter_id');
    }

    public function marks_weightages(){
        return $this->hasMany(MarksWeightage::class,'chapter_id');
    }


}
