<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvailableMonth extends Model
{
    protected $guarded = [];

    function Installment(){
       return $this->belongsTo(Installment::class, 'installment_id');
    }
}
