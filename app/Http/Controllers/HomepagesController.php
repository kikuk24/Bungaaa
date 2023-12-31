<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use Illuminate\Support\Facades\File;
use App\Models\homepages;
use App\Models\images;
use App\Models\Posts;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoryProducts = category_products::with('products')->get();
        $products = Products::with('category')->get();
        $category = category_products::all();
        $artikel = Posts::latest()->limit('3')->get();
        $meta = homepages::where('id', 1)->first();
        $images = images::all();
        return Inertia::render("Homepage",[
            'meta' => $meta,
            'products' => $products,
            'artikel' => $artikel,
            'category' => $category,
            'images' => $images,
            'prod' => $categoryProducts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("EditHomepage");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        homepages::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('landing.page')->with('message', 'Berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function upload(Request $request)
    {
        $extFile = $request->file('image')->extension();
        $name = time() . "." . $extFile;
        images::create([
            'image' => $request->image->storeAs('images/home', $name),
        ]);
        return redirect()->route('homepage')->with('message', 'Berhasil ditambahkan');
    }
    public function show(homepages $homepages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $meta = homepages::findOrFail($id);
        return Inertia::render("UpdateMeta", [
            'meta' => $meta
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $homepages = homepages::findOrFail($id);
        $homepages->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('landing.page')->with('message', 'Product Berhasil diedit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(homepages $homepages)
    {
        //
    }
    public function delete($id)
    {
        $images = images::findOrFail($id);
        $imgPath = storage_path($images->image);
        if (File::exists($imgPath)) {
            File::delete($imgPath);
            $images->delete();
        } else {

            $images->delete();
        }
    }
}
