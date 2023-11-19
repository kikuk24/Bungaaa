<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category_posts extends Model
{
    use HasFactory;
    public function products()
    {
        return $this->hasMany(Products::class);
    }
    public function w(){
        return $this->hasMany(Products::class,"id","name");
    }
}
