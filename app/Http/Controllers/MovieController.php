<?php


namespace App\Http\Controllers;

use App\Models\DisplayTime;
use App\Models\Movie;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all();
        return Inertia::render('Movies', [
            'movies' => $movies,
        ]);
    }

    public function show($id)
    {
        $movie = Movie::findOrFail($id);
        $displayTimes = DisplayTime::where('movie_id', $id)->get();

        $displayTimesWithReservations = $displayTimes->map(function ($displayTime) {
            $displayTime->reservations = $displayTime->reservations;
            return $displayTime;
        });

        return Inertia::render('Movie', [
            'movie' => $movie,
            'display_times' => $displayTimesWithReservations,
        ]);
    }
}
