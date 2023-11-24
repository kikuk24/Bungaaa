<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use App\Models\homepages;
use App\Models\images;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Admin extends Controller
{   
    public function index() {
        $products = Products::count();
        return Inertia::render('Dashboard',[
            'title' => 'Bunga-bunga Dashboard',
            'products' => $products
        ]);
        
    }
    public function product(){
        $products = Products::all();

        return Inertia::render('AdminProducts',[
            'products' => $products

        ]);

    }
    public function categories_products(){
        $category = category_products::all();

        return Inertia::render('AdminCategory_products',[
            'category' => $category

        ]);
    }
    public function landingPage()
    {
        $meta = homepages::where('id', '1')->first();
        $image = images::all();
        return Inertia::render('AdminPages', [
            'meta' => $meta,
            'image' => $image

        ]);
    }
    
}
