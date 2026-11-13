<?php

namespace App\Http\Controllers\Validations;

use App\Http\Controllers\Controller;
use App\Models\Validation;
use Illuminate\Http\Request;

class RequestValidationController extends Controller
{
    function index (Request $request){
        $user = auth('sanctum')->user();
        if($user == null){
           return response()->json([
               'header'=>[
                   'response code' => 401
                ], 
               'body'=>[
                   'message' => 'Unauthorized User'
                ]
           ], 401);
        }

        $validated = $request->validate([
            'job'=>'required|string',
            'job_description'=>'nullable|string',
            'income'=>'integer|required',
            'reason_accepted'=>'string|nullable'
        ]);

        $validated['society_id'] = $user->id;

        Validation::create($validated);

        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'message' => 'Request data validation sent successful'
            ]
        ]);
    }
}
