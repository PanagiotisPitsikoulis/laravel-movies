import React from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import PageContainer from "@/Components/PageContainer";
import { PageProps } from "@/types";
import type { ExtendedDisplayTime, Movie } from "@/types/types";
import axios from "axios";

export default function Movie() {
    const props = usePage<
        PageProps & { movie: Movie; display_times?: ExtendedDisplayTime[] }
    >().props;
    const { movie, display_times } = props;

    const { data, setData, post, processing, errors } = useForm({
        display_time_id: display_times?.[0]?.id || null,
        room_order: null,
    });

    const handleSeatSelection = (seatNumber: number) => {
        const selected = seatNumber === data.room_order ? null : seatNumber;
        setData("room_order", selected as any);
    };

    const handleSubmit = (e: React.FormEvent) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Check if display time and seat selection are provided
        if (!data.display_time_id || !data.room_order) {
            alert("Please select a showtime and a seat.");
            return;
        }

        // Create the reservation
        try {
            axios.post(`/movie/${movie.id}/reserve`, {
                display_time_id: data.display_time_id,
                room_order: data.room_order,
                movie_id: movie.id,
            });
            alert("Reservation created successfully!");
            router.replace("/reservations?hasNewReservation=true");
            // If error occurs, display an alert and redirect to the reservations page
        } catch (error) {
            console.error("Failed to create reservation:", error);
            alert("Failed to create reservation. Please check your input.");
        }
    };

    return (
        <PageContainer>
            {/* Movie Details Section */}
            <section>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-teal-600 w-full rounded-md p-8 flex items-center justify-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-teal-50">
                                {movie.name}
                            </h2>
                            <p className="text-teal-100 sm:mt-4 block">
                                {movie.description}
                            </p>
                        </div>
                    </div>

                    <img
                        alt={movie.name}
                        src={movie.image_link}
                        className="h-[30rem] w-fit object-cover rounded-md"
                    />
                </div>
            </section>

            {/* Display Time and Seat Selection Section */}
            <section className="space-y-6 mt-10">
                <form onSubmit={handleSubmit}>
                    {/* Seat Selection and Submission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Seat Grid */}
                        <section className="bg-gray-100 border p-3 min-h-[400px] flex flex-wrap gap-2">
                            {Array.from({ length: 100 }).map((_, index) => {
                                const seatNumber = index + 1;
                                const isSelected =
                                    seatNumber === data.room_order;

                                return (
                                    <div
                                        key={seatNumber}
                                        className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border ${
                                            isSelected
                                                ? "bg-teal-500 text-white"
                                                : "bg-gray-200 text-gray-500 hover:text-teal-600"
                                        }`}
                                        onClick={() =>
                                            handleSeatSelection(seatNumber)
                                        }
                                    >
                                        {seatNumber}
                                    </div>
                                );
                            })}
                        </section>

                        {/* Submit Form */}
                        <section className="flex items-center justify-center">
                            <div className="max-w-lg">
                                <h1 className="text-2xl font-bold">
                                    Book Your Seat
                                </h1>

                                {errors.room_order && (
                                    <p className="text-red-600">
                                        {errors.room_order}
                                    </p>
                                )}

                                {/* Showtime Selection */}
                                <div className="space-y-4">
                                    <label
                                        htmlFor="display-time"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Select Showtime:
                                    </label>
                                    <select
                                        id="display-time"
                                        className="bg-gray-100 text-gray-500 border-gray-200 p-2 rounded"
                                        value={data.display_time_id || ""}
                                        onChange={(e) =>
                                            setData(
                                                "display_time_id",
                                                Number(e.target.value)
                                            )
                                        }
                                    >
                                        {display_times?.map((time) => (
                                            <option
                                                key={time.id}
                                                value={time.id}
                                            >
                                                {time.time_start} -{" "}
                                                {time.time_end}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!data.room_order || processing}
                                    className={`mt-4 w-full rounded px-4 py-2 text-white ${
                                        processing
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-teal-600 text-teal-100"
                                    }`}
                                >
                                    {processing
                                        ? "Processing..."
                                        : "Confirm Booking"}
                                </button>
                            </div>
                        </section>
                    </div>
                </form>
            </section>
        </PageContainer>
    );
}
