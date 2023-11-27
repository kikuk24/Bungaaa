<?php

namespace App\Http\Controllers;

use App\Models\category_products;
use App\Models\Products;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Posts::latest();
        $category = category_products::all();
        return Inertia::render("Artikel", [
            'title' => 'Bungabunga Artikel',
            'artikel' => $posts->get(),
            'category' => $category
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("CreateArtikel");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'mimes:png,jpg',
            'content' => 'required',
            'description' => 'required'
        ]);
        $extFile = $request->image->getClientOriginalExtension();
        $fileName = $request->title . "." . $extFile;
        $slug = Str::slug($request->title, '-');

        Posts::create([
            'category_post_id' => 1,
            'title' => $request->title,
            'image' => $request->image->storeAs('images/posts', $fileName),
            'description' => $request->description,
            'content' => $request->content,
            'slug' => $slug
        ]);

        return redirect()->route('product')->with('message', 'Artikel Berhasil ditambahkan');


    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $posts = Posts::where('slug', $slug)->first();
        $products = Products::latest()->limit('4')->with('category')->get();
        $category = category_products::all();
        $artikel = Posts::latest()->limit('3')->get();
        return Inertia::render("ShowArtikel", [
            'artikel' => $posts,
            'products' => $products,
            'category' => $category,
            'recommended' => $artikel,
            'created_at' => date('Y-m-d')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $post = Posts::findOrFail($id);
        return Inertia::render("EditArtikel", [
            'artikel' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $title = $request->input('title');
        $content = $request->input('content');
        DB::table('posts')->where('id',$id)
        ->update([
            'title' => $title,
            'content' => $content,
            'updated_at' => date('Y-m-d H:i:s')
        ]);
        return redirect('post');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('posts')
        ->where('id', $id)
        ->delete();
        return redirect('post');

    }
}
