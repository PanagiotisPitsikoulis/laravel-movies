import React from 'react';
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import type {ExtendedReservation} from "@/types/types";
import PageContainer from "@/Components/PageContainer";

function Reservations() {
    const props = usePage<PageProps & { reservations?: ExtendedReservation[] }>().props;
    console.log('props:', props);
    const {auth, reservations} = props;

    return (
        <PageContainer>
            <h1 className="text-2xl font-bold mb-6">My Reservations</h1>
            {reservations && reservations.length > 0 ? (
                <div className="space-y-4">
                    {reservations.map((reservation) => (
                        <div key={reservation.id} className="border p-4 rounded-md shadow">
                            <h2 className="text-lg font-semibold">{reservation.display_time.movie.name}</h2>
                            <p className="text-sm text-gray-600">{reservation.display_time.movie.description}</p>
                            <p className="text-sm">
                                <strong>Showtime:</strong> {reservation.display_time.time_start} - {reservation.display_time.time_end}
                            </p>
                            <p className="text-sm">
                                <strong>Seat:</strong> {reservation.room_order}
                            </p>
                            <p className="text-sm">
                                <strong>Status:</strong> {reservation.status}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500">You have no reservations yet.</p>
            )}
        </PageContainer>
    );
}

export default Reservations;
