<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
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


}
