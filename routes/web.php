<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Movie;
use App\Models\DisplayTime;
use App\Models\Reservation;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('movies', function () {
    return Inertia::render('Movies', [
        'movies' => Movie::all(),
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('movie/{id}', function ($id) {
        return Inertia::render('Movie', [
            'movie' => Movie::findOrFail($id),
            'display_times' => DisplayTime::all(),
            'reservations' => Reservation::all(),
        ]);
    });
});


Route::get("/reservations", function () {
    return Inertia::render('Reservations');
});

require __DIR__ . '/auth.php';
