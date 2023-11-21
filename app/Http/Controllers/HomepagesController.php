<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use App\Models\homepages;
use App\Models\images;
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

        $products = Products::latest();
        $category = category_products::all();
        $homepage = homepages::all();
        $images = images::all();
        return Inertia::render("Homepage",[
            'title'=>'Melayani jasa pembuatan mahar nikah',
            'products' => $products->get(),
            'category' => $category,
            'homepage' => $homepage,
            'images' => $images
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
        return redirect()->route('product')->with('message', 'Berhasil ditambahkan');
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
    public function edit(homepages $homepages, images $images)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, homepages $homepages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(homepages $homepages)
    {
        //
    }
}
