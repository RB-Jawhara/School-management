<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Teacher extends Authenticatable
{
    use HasFactory,SoftDeletes, Notifiable, HasApiTokens;
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'gender',
        'date_of_birth',
        'address',
        'phone_number',
        'blood_type',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
      protected $appends=['role'];
    public function getRoleAttribute($key){
        return 'teacher';
    }
}
