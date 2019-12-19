<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserOTP extends Model
{
    protected $fillable = [
        'user_id', 'otp'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
