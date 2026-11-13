<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Society extends Model
{
    use HasApiTokens;
    protected $guarded = [];

    function Regional(){
       return $this->belongsTo(Regional::class, 'regional_id');
    }
}
