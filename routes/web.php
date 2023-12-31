<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\CategoryProductsController;
use App\Http\Controllers\HomepagesController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Models\Posts;
use App\Models\Products;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', [HomepagesController::class, 'index']);
Route::get('/products', [ProductsController::class, 'index']);
Route::get('/products/{slug}', [ProductsController::class, 'show']);
Route::get('/artikel', [PostController::class, 'index']);
Route::get('/artikel/{slug}', [PostController::class, 'show']);
Route::get('/category/{slug}', [CategoryProductsController::class, 'show']);
Route::post('/product', [ProductsController::class, 'store'])->name('product.store');
Route::get('/sitemap', function () {
    $sitemap = Sitemap::create()
        ->add(Url::create('/products'))
        ->add(Url::create('/artikel'));

    $post = Posts::all();
    foreach ($post as $post) {
        $sitemap->add(Url::create("/artikel/{$post->slug}"));
    }
    $products = Products::all();
    foreach ($products as $post) {
        $sitemap->add(Url::create("/products/{$post->slug}"));
    }
    $sitemap->writeToFile(public_path('sitemap.xml'));
}); 
Route::middleware(['auth','verified'])->group(function(){
    Route::get('/dashboard',[Admin::class,'index'])->name('dashboard');
    Route::get('/landing', [Admin::class, 'landingPage'])->name('landing.page');
    Route::get('/homepage', [HomepagesController::class, 'create'])->name('homepage');
    Route::post('/homepag', [HomepagesController::class, 'store'])->name('home.store');
    Route::post('/homepage', [HomepagesController::class, 'upload'])->name('home.upload');
    Route::post('/image/{id}/edit', [HomepagesController::class, 'upload'])->name('image.edit');
    Route::delete('/image/{id}', [HomepagesController::class, 'delete'])->name('image.edit');
    Route::get('/homepage/{id}/edit', [HomepagesController::class, 'edit'])->name('home.edit');
    Route::post('/homepage/{id}/update', [HomepagesController::class, 'update'])->name('home.update');
    Route::get('/category_products',[Admin::class, 'categories_products'])->name('category_products');
    Route::get('/product',[Admin::class,'product'])->name('product');
    Route::get('/product/create',[ProductsController::class,'create'])->name('product.create');
    Route::get('/category_products/create',[CategoryProductsController::class,'create'])->name('category_product.create');
    Route::post('/category_products/create',[CategoryProductsController::class,'store'])->name('category_product.store');
    Route::get('/product/{id}/edit',[ProductsController::class,'edit'])->name('product.edit');
    Route::post('/product/{id}/update',[ProductsController::class,'update'])->name('product.update');
    Route::delete('/product/{id}',[ProductsController::class,'destroy'])->name('product.delete');
    Route::get('/artikels/create', [PostController::class, 'create'])->name('artikel.create');
    Route::get('/artikels/{id}/edit', [PostController::class, 'edit'])->name('artikel.edit');
    Route::get('/artikels', [Admin::class, 'artikel'])->name('artikel.admin');
    Route::post('/artikel', [PostController::class, 'store'])->name('artikel.store');
    Route::post('/artikels/{id}/update', [PostController::class, 'update'])->name('artikel.update');
    Route::delete('/artikels/{id}', [PostController::class, 'destroy'])->name('artikel.delete');
    
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
