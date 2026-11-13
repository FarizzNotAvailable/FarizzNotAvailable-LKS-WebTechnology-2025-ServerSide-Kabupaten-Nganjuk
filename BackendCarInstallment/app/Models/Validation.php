<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Validation extends Model
{
    protected $guarded = [];

    function Validator(){
       return $this->belongsTo(Validator::class, 'validator_id');
    }

    function Society(){
       return $this->belongsTo(Society::class, 'society_id');
    }
}
