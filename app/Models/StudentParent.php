<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudentParent extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable =[
        'firstname',
        'lastname',
        'date_of_birth',
        'last_login_date',
        'gender',
        'blood_type',
        'address',
        'phone_number',
        'email'
    ];
    protected $attributes = [
    'last_login_date' => null,
];

}
