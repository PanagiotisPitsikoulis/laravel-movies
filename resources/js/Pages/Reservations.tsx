import React from "react";
import { router, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import type { ExtendedReservation } from "@/types/types";
import PageContainer from "@/Components/PageContainer";
import axios from "axios";

function Reservations() {
    const props = usePage<
        PageProps & { reservations?: ExtendedReservation[] }
    >().props;
    console.log("props:", props);
    const { auth, reservations } = props;

    async function deleteReservation(id: number) {
        try {
            await axios.delete(`/reservations/${id}`);
        } catch (error) {
            console.error("Failed to delete reservation:", error);
        } finally {
            router.replace("/reservations");
        }
    }

    return (
        <PageContainer>
            <h1 className="text-2xl font-bold mb-6">My Reservations</h1>
            {reservations && reservations.length > 0 ? (
                <div className="space-y-4">
                    {reservations.map((reservation) => (
                        <div
                            key={reservation.id}
                            className="border p-4 rounded-md shadow"
                        >
                            <h2 className="text-lg font-semibold">
                                {reservation.display_time.movie.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {reservation.display_time.movie.description}
                            </p>
                            <p className="text-sm">
                                <strong>Showtime:</strong>{" "}
                                {reservation.display_time.time_start} -{" "}
                                {reservation.display_time.time_end}
                            </p>
                            <p className="text-sm">
                                <strong>Seat:</strong> {reservation.room_order}
                            </p>
                            <p className="text-sm">
                                <strong>Status:</strong> {reservation.status}
                            </p>
                            <button
                                className="text-red-500"
                                onClick={() =>
                                    deleteReservation(reservation.id)
                                }
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500">
                    You have no reservations yet.
                </p>
            )}
        </PageContainer>
    );
}

export default Reservations;
