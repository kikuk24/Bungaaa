<?php

namespace App\Http\Controllers;

use App\Models\homepages;
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
        $products = Products::all();
        return Inertia::render("Homepage",[
            'title'=>'Melayani jasa pembuatan mahar nikah',
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(homepages $homepages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(homepages $homepages)
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
