<?php

namespace App\Http\Controllers\Installment;

use App\Http\Controllers\Controller;
use App\Models\AvailableMonth;
use App\Models\Installment;
use App\Models\InstallmentApplySocieties;
use App\Models\InstallmentApplyStatus;
use App\Models\Validation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PostInstallmentController extends Controller
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

        $validation = Validation::where('society_id', $user->id)->first();

        if(!isset($validation) || $validation->status != "accepted"){
            return response()->json([
               'header'=>[
                   'response code' => 401
                ], 
               'body'=>[
                   'message' => 'Your data must be accepted by validator before'
                ]
            ], 401);
        }
        
        $validated = $request->validate([
            'installment_id'=>'integer|required',
            'month'=>'integer|required',
            'notes'=>'string|nullable',
            ]);
            
            $installment = InstallmentApplySocieties::where('society_id', $user->id)->first();
            
        if(isset($installment)){
                return response()->json([
                   'header'=>[
                       'response code' => 401
                    ], 
                   'body'=>[
                       'message' => 'Application for a installment can only be once'
                    ]
                ], 401);
            }
            
            $month = AvailableMonth::where('month', $validated['month'])->where('installment_id', $validated['installment_id'])->first();
            unset($validated['month']);
            $validated['society_id'] = $user->id;
            $validated['date'] = now();
            $validated['available_month_id'] = $month->id;
            $instal = InstallmentApplySocieties::create($validated);
            unset($validated['notes']);
            $validated['installment_apply_societies_id'] = $instal->id;
            InstallmentApplyStatus::create($validated);


        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'message' => 'Applying for Installment Successful',
            ]
        ]);


    }

    function Get(){
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

        $cars = Installment::get();
        
        $cars = $cars->map(function($car){
            $installment = InstallmentApplyStatus::where('installment_id', $car->id)->get();
            return[
                'id'=>$car->id,
                'car'=>$car->cars,
                'brand'=>$car->Brand->brand,
                'price'=>$car->price,
                'description'=>$car->description,
                'application'=>$installment->map(function($in){
                    return[
                        'month'=>$in->AvailableMonth->month,
                        'nominal'=>$in->AvailableMonth->nominal,
                        'apply_status'=>$in->status,
                        'notes'=>$in->InstallmentApplySocieties->notes,
                    ];
                }),
            ];
        });
        
        return response()->json([
           'header'=>[
               'response code' => 200
            ], 
           'body'=>[
               'installments' => $cars
            ]
        ]);
    }

    function Show(){
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
        
        $installment = InstallmentApplyStatus::where('society_id', $user->id)->first();

        $installment = [
            'id'=>$installment->id,
            'date'=>$installment->date,
            'car'=>$installment->Installment->cars,
            'price'=>$installment->Installment->price,
            'description'=>$installment->Installment->description,
            'notes'=>$installment->InstallmentApplySocieties->notes,
            'month'=>$installment->AvailableMonth->month,
            'status'=>$installment->status,
        ];

        return response()->json([
           'header'=>[
               'response code' => 401
            ], 
           'body'=>[
               'installment' => $installment
            ]
        ]);

    }

}
