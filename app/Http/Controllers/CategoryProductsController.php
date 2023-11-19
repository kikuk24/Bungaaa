<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
class CategoryProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("CreateCategory", [
            'title' => 'Tambah Category',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'   => 'required',
            // 'slug' => 'required',
        ]);
        $slug = Str::slug($request->name,'-');
        category_products::create([
            'name' => $request->name,
            'slug' => $slug

        ]);
        return redirect()->route('product')->with('message', 'category Berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(category_products $category_products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(category_products $category_products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, category_products $category_products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(category_products $category_products)
    {
        //
    }
}
