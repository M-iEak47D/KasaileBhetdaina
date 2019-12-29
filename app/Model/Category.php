<?php

namespace App\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use sluggable;
    use SoftDeletes;
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
