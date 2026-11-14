<?php

namespace App\Http\Controllers\Installment;

use App\Http\Controllers\Controller;
use App\Models\AvailableMonth;
use App\Models\Installment;
use App\Models\InstallmentApplySocieties;
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

        $installments = $installments->map(function($in) use ($user){

            $months = AvailableMonth::where('installment_id', $in->id)->get();

            $isApply = InstallmentApplySocieties::where('installment_id', $in->id)->first();

            if($isApply){
                if($isApply->Society->id == $user->id){
                    $isApply = 2;    
                }else{
                    $isApply = 1;
                }
            }


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
                'is_apply'=>$isApply
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
                    'description'=>$mon->description,
                    'nominal'=>$mon->nominal
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
