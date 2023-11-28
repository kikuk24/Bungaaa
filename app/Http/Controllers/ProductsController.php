<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::leftJoin('category_products', 'category_products.id', '=', 'category_product_id')
        ->orderBy('id', 'desc')
        ->get(['products.id', 'products.title', 'products.price', 'products.image', 'products.slug',  'category_products.name as category', 'category_products.slug AS category_slug']);
        $category = category_products::all();
        return Inertia::render("Products", [
            'products' => $products,
            'category' => $category
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = category_products::all();
        return Inertia::render("CreateProducts", [
            'title' => 'Tambah Product',
            'category' => $category
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'   => 'required',
            'description' => 'required',
            'category' => 'required',
            'price' => 'required',
            'image'=>'mimes:jpeg,png,jpg|max:2048|image'
        ]);
        $extFile = $request->image->getClientOriginalExtension();
        $fileName = $request->slug . "." . $extFile;
        $slug = Str::slug($request->title, '-');
        Products::create([
            'category_product_id' =>$request->category,
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'slug' => $slug,
            'image' => $request->image->storeAs('images/products', $fileName),

        ]);
        return redirect()->route('product')->with('message','Product Berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $product = Products::where('slug', $slug)->with('category')->first();

        $products = Products::latest();
        $category = category_products::all();
        return Inertia::render("ShowProduct", [
            'product' => $product,
            'products' => $products->get(),
            'category' => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $products = Products::findOrFail($id);
        $category = category_products::all();

        return Inertia::render("EditProduct", [
            'products' => $products,
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $products = Products::findOrFail($id);
        // $request->validate([
        //     'title'   => 'required',
        //     'description' => 'required',
        //     'category' => 'required',
        //     'price' => 'required',
        //     'slug' => 'required',
        //     'image'=>'mimes:jpeg,png,jpg|max:2048|image'
        // ]);
        $extFile = $request->image->getClientOriginalExtension();
        $fileName = $request->slug . "." . $extFile;

        $imgPath = storage_path('app/public/' . $products->image);
        if (File::exists($imgPath)) {
            File::delete($imgPath);
            $products->update(['category_product_id' => $request->category,
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'slug' => $request->slug,
                'image' => $request->image->storeAs('images/products', $fileName),
            ]);
        } else {
            $products->update(
                [
                    'category_product_id' => $request->category,
                'title' => $request->title,
                'description' => $request->description,
                'price' => $request->price,
                'slug' => $request->slug,
                // 'image' => $request->image->storeAs('images/products', $fileName),
            ]);
        }
        return redirect()->route('product')->with('message', 'Product Berhasil diedit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $products = Products::findOrFail($id);
        $imgPath = storage_path('app/public/' . $products->image);
        if(File::exists($imgPath)){
            File::delete($imgPath);
            $products->delete();
        }else{

            $products->delete();
        }
        return redirect()->route('product')->with('message', 'Product Berhasil dihapus');
    }
}
