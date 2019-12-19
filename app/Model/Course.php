<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable=[
        'name',
    ];

    public function sub_subjects(){
        return $this->hasMany(SubSubject::class);
    }
}
