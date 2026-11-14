<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstallmentApplyStatus extends Model
{
    protected $guarded = [];

    function Society(){
       return $this->belongsTo(Society::class, 'society_id');
    }

    function Installment(){
       return $this->belongsTo(Installment::class, 'installment_id');
    }

    function AvailableMonth(){
       return $this->belongsTo(AvailableMonth::class, 'available_month_id');
    }

    function InstallmentApplySocieties(){
       return $this->belongsTo(InstallmentApplySocieties::class, 'installment_apply_societies_id');
    }
}
