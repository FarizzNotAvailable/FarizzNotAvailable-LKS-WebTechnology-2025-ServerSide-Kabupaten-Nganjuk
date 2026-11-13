<?php

namespace App\Http\Controllers\Validations;

use App\Http\Controllers\Controller;
use App\Models\Validation;
use Illuminate\Http\Request;

class GetValidationController extends Controller
{
    function index(Request $request){
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

        $validation = Validation::where('society_id', $user->id)->first();
        
        return response()->json([
           'header'=>[
               'response code' => '200'
            ], 
           'body'=>[
               'validation' => [
                    'id'=>$validation->id,
                    'status'=>$validation->status,
                    'job'=>$validation->job,
                    'job_description'=>$validation->job_description,
                    'income'=>$validation->income,
                    'reason_accepted'=>$validation->reason_accepted,
                    'validator_notes'=>$validation->validator_notes,
                    'validator'=>$validation->Validator,
               ]
            ]
        ]);
    }
}
