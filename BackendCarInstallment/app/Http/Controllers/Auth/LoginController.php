<?php

namespace App\Http\Controllers\Auth;

use App\Models\Society;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function Index(Request $request){
        $validated = $request->validate([
            'id_card_number' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = Society::where('id_card_number',$validated['id_card_number'])->first();

        if(!$user || $user->password != $validated['password']){
            return response()->json([
               'header'=>[
                   'response code' => 401
                ], 
               'body'=>[
                   'message' => 'ID Card Number or Password Incorrect'
                ]
            ], 401);
        }

        $token = $user->createToken('auth')->plainTextToken;

        $user->login_tokens = $token;

        $user->save();

        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'name' => $user->name,
               'born_date' => $user->born_date,
               'gender' => $user->gender,
               'address' => $user->address,
               'token' => $user->login_tokens,
               'regional' => [
                'id'=>$user->Regional->id,
                'province'=>$user->Regional->province,
                'district'=>$user->Regional->district,
               ],
            ]
        ]);
    }
}
