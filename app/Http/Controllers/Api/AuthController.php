<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1. Validation ديال البيانات (Lowercase)
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. التيست ديال Auth
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'The provided credentials do not match our records.'
            ], 422);
        }

        // 3. صنع ال=ـ Token (لمشكل)
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        
        return response()->json([
            'user' => $user,
            'token' => $token, 
            'message' => 'Login Success'
        ]);
    }
}