<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstallmentApplySocieties extends Model
{
    protected $guarded = [];

    function AvailableMonth(){
       return $this->belongsTo(AvailableMonth::class, 'available_month_id');
    }
    function Society(){
       return $this->belongsTo(Society::class, 'society_id');
    }

    function Installment(){
       return $this->belongsTo(Installment::class, 'installment_id');
    }
}

