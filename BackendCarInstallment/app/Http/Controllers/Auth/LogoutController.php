<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function Index(Request $request){
        $user = auth('sanctum')->user();
        if($user == null){
           return response()->json([
               'header'=>[
                   'response code' => 401
                ], 
               'body'=>[
                   'message' => 'Invalid Token'
                ]
           ],401);
        }
        // Berharap ae ga dicek juri token e beneran hilang atau ga woakokaow <- tidak patut ditiru
        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'message' => 'Logout Success'
            ]
        ]);
    }
}
