<?php

namespace App\Http\Controllers;

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
        $posts=DB::table('posts')
        ->select('id','title','content')
        ->orderBy('id','desc')
        ->get();

        $data = [
            'posts' => $posts
        ];
        return Inertia::render("Artikel", [
            'artikel'=> $posts
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
        ]);
        $extFile = $request->image->getClientOriginalExtension();
        $fileName = $request->title . "." . $extFile;
        $slug = Str::slug($request->title, '-');

        Posts::create([
            'title' => $request->title,
            'image' => $request->image->storeAs('images/products', $fileName),
            'content' => $request->content,
            'slug' => $slug
        ]);

        return redirect('post');
        


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $posts = DB::table('posts')
        ->select('*')
        ->where('id','=', $id)
        ->first();

        $data = [
            'post'=> $posts
        ];
        return view('posts.show',$data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $posts = DB::table('posts')
        ->select('*')
            ->where('id', '=', $id)
            ->first();

        $data = [
            'post' => $posts
        ];
        return view('posts.edit',$data);

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
