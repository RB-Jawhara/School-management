<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
{
    // 1. Authenticate l-user (b l-email w password li shhna f LoginRequest)
    $request->authenticate();

    // 2. Generate l-Token l-had l-user
    $user = $request->user();
    // createToken('main') kat-generi token jdid
    $token = $user->createToken('main')->plainTextToken;

    // 3. Rejje3 l-JSON fih l-user w l-token
    return response()->json([
        'user' => $user,
        'token' => $token,
        'message' => 'Login Success'
    ]);
}

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
