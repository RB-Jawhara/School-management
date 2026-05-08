<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\User;
use App\Models\Teacher; 

class AuthController extends Controller
{
    // 1. Admin Login
    public function adminLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            $admin = Auth::guard('admin')->user();
            $token = $admin->createToken('admin_token',['admin'])->plainTextToken;

            return response()->json([
                'user' => $admin,
                'token' => $token,
                'role' => 'admin'
            ],200);
        }

        return response()->json(['message' => 'Email aw Password ghalat f table Admin'], 422);
    }

    // 2. Teacher Login (Zidi hadi bach t-khdem lik l-page dial teacher)
    public function teacherLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::guard('teacher')->attempt($credentials)) {
            $teacher = Auth::guard('teacher')->user();
            $token = $teacher->createToken('teacher_token',['teacher'])->plainTextToken;

            return response()->json([
                'user' => $teacher,
                'token' => $token,
                'role' => 'teacher'
            ],200);
          
        }

        return response()->json(['message' => 'Email aw Password ghalat f table Teacher'], 422);
    }

    // 3. User Login
    public function userLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::guard('web')->attempt($credentials)) {
            $user = Auth::guard('web')->user();
            $token = $user->createToken('user_token',['user'])->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
                'role' => 'user'
            ],200);
            
        }

        return response()->json(['message' => 'Credentials ghalat'], 422);
    }

    // 4. Logout (Hadi hiya li ghadi t-7iyed lik 500 Error dial logout)
    public function logout(Request $request)
    {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'Logged out successfully']);
        }
        return response()->json(['message' => 'User not found'], 401);
    }
}