<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Installment extends Model
{
    protected $guarded = [];

    function Brand(){
       return $this->belongsTo(Brand::class, 'brand_id');
    }
}
