<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\category_products;

class Products extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'price', 'slug', 'category_product_id', 'image', 'image_1', 'image_2', 'image_3'];
    // protected $guarded = ['id'];



    public function category()
    {
        return $this->belongsTo(category_products::class, 'category_product_id', 'id');
    }
}
