<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $fillable = [
        'user_id',
        'profile_image',
        'user_ip',
        'gender',
        'DOB',
        'last_online',
        'is_online',
    ];

    public function User(){
        return $this->belongsTo(User::class,'user_id');
    }
}
