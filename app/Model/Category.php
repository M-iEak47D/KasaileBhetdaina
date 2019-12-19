<?php

namespace App\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use sluggable;

    protected $table = "categories";
    protected $fillable=[
      'name','slug',
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function contents(){
        return $this->hasMany(Content::class,'type');
    }
}
