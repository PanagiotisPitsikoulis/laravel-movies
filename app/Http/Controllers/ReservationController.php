<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index()
    {
        $userId = Auth::id();

        // Fetch reservations for the current user
        $reservations = Reservation::with(['displayTime.movie'])
            ->where('user_id', $userId)
            ->get();

        return Inertia::render('Reservations', [
            'reservations' => $reservations,
        ]);
    }

     public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'display_time_id' => 'required|exists:display_times,id',
            'movie_id' => 'required|exists:movies,id',
            'room_order' => 'required|integer',
        ]);

        try {
            Reservation::create([
                'display_time_id' => $validated['display_time_id'],
                'user_id' => Auth::id(),
                'status' => 'pending',
                'room_order' => $validated['room_order'],
                'movie_id' => $validated['movie_id'],
            ]);

            // Redirect with success message
            return redirect()->route('reservations.index')->with('success', 'Reservation created successfully.');
        } catch (Exception $e) {
            Log::error('Error creating reservation: ' . $e->getMessage());
            return back()->with('error', 'Failed to create reservation. Please try again.');
        }
    }


     public function destroy(int $id): RedirectResponse
    {
        try {
            $reservation = $this->findReservation($id);
            $reservation->delete();

            return redirect()->route('reservations.index')->with('success', 'Reservation deleted successfully.');
        } catch (Exception $e) {
            Log::error('Error deleting reservation: ' . $e->getMessage());
            return back()->with('error', 'Failed to delete reservation. Please try again.');
        }
    }

    private function findReservation(int $id)
    {
        return Reservation::with(['displayTime.movie'])
            ->where('id', $id)
            ->where('user_id', Auth::id())
            ->firstOrFail();
    }
}
