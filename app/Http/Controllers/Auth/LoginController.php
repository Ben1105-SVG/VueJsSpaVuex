<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{

    /**
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(LoginRequest $request)
    {

        if(Auth::attempt($request->all())){
            $token = auth()->user()->createToken('MyApp')->accessToken;

          return  response()->json($token,200);
        }
      return  response()->json(['message'=>['email'=>'User with this credentials is not found']],422);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function logOut(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        DB::table('oauth_access_tokens')->where('user_id');
        return response(['logout' => 'true'], 200);
    }
}
