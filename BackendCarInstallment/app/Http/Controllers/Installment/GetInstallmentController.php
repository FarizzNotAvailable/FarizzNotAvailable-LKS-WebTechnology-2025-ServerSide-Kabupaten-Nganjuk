<?php

namespace App\Http\Controllers\Installment;

use App\Http\Controllers\Controller;
use App\Models\AvailableMonth;
use App\Models\Installment;
use Illuminate\Http\Request;

class GetInstallmentController extends Controller
{
    function Index(Request $request){
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
        
        $installments = Installment::get();

        $installments = $installments->map(function($in){

            $months = AvailableMonth::where('installment_id', $in->id)->get();

            return[
                'id'=>$in->id,
                'car'=>$in->cars,
                'brand'=>$in->Brand->brand,
                'price'=>$in->price,
                'description'=>$in->descriptions,
                'available_month'=>$months->map(function($mon){
                    return [
                        'month'=>$mon->month,
                        'description'=>$mon->description
                    ];
                }),
            ];
        });

        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'cars' => $installments
            ]
        ]);
    }


    function Show(Request $request, String $id){
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
        $installment = Installment::where('id', $id)->first();
        $months = AvailableMonth::where('installment_id', $installment->id)->get();

        $installment = [
            'id'=>$installment->id,
            'car'=>$installment->cars,
            'brand'=>$installment->Brand->brand,
            'price'=>$installment->price,
            'description'=>$installment->descriptions,
            'available_month'=>$months->map(function($mon){
                return [
                    'month'=>$mon->month,
                    'description'=>$mon->description
                ];
            }),
        ];
        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'installment' => $installment
            ]
        ]);

    }

}
