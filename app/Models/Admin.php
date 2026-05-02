<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable; 
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Admin extends Authenticatable
{
   use HasApiTokens, HasFactory, Notifiable, SoftDeletes;
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'gender',
        'blood_type',
        'date_of_birth',
        'address',
        'phone_number'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
    // HEDI DYL LE ROLE 
    protected $appends=['role'];
        public function getRoleAttribute($key){
        return 'admin';
    }
}