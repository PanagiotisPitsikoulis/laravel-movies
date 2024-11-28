import PageContainer from "@/Components/PageContainer";
import React from "react";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import type {Movie} from "@/types/types";

export default function Movie() {
    const {movie, auth} = usePage<PageProps & { movie: Movie }>().props;
    const [activeShowtime, setActiveShowtime] = React.useState<string>("8");
    const [selectedSeat, setSelectedSeat] = React.useState<number | null>(null);

    const handleSeatSelection = (seatNumber: number) => {
        setSelectedSeat(seatNumber === selectedSeat ? null : seatNumber); // Deselect if clicked again
    };

    return (
        <PageContainer>
            {/* Movie Details Section */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className="bg-blue-600 rounded-md p-8 flex items-center justify-center md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">{movie.name}</h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">{movie.description}</p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="/movies"
                                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Go back to the movie list
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid">
                        <img
                            alt={movie.name}
                            src={movie.image_link}
                            className="w-full max-h-[30rem] object-cover md:h-full rounded-md"
                        />
                    </div>
                </div>
            </section>

            {/* Display Time and Seat Selection Section */}
            <section className="space-y-6 mt-10">
                {/* Select Movie Display Time */}
                <div className="space-y-4">
                    <label htmlFor="display-time" className="block text-sm font-medium text-gray-700">
                        Select Showtime:
                    </label>
                    <select
                        id="display-time"
                        className="bg-gray-100 text-gray-500 border-gray-200 p-2 rounded"
                        name="display-time"
                        value={activeShowtime}
                        onChange={(e) => setActiveShowtime(e.target.value)}
                    >
                        <option value="10">10 o'clock</option>
                        <option value="8">8 o'clock</option>
                        <option value="9">9 o'clock</option>
                        <option value="5">5 o'clock</option>
                    </select>
                </div>

                {/* Seat Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Seat Grid */}
                    <section
                        className="bg-gray-100 border-gray-200 border p-3 text-sm font-medium transition min-h-[400px] flex flex-wrap gap-2"
                    >
                        {Array.from({length: 100}).map((_, index) => {
                            const seatNumber = index + 1;
                            const isSelected = seatNumber === selectedSeat;

                            return (
                                <div
                                    key={seatNumber}
                                    className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border ${
                                        isSelected
                                            ? "bg-teal-500 text-white"
                                            : "bg-gray-200 text-gray-500 hover:text-teal-600"
                                    }`}
                                    onClick={() => handleSeatSelection(seatNumber)}
                                >
                                    {seatNumber}
                                </div>
                            );
                        })}
                    </section>

                    {/* Seat Booking Form */}
                    <section className="flex items-center justify-center">
                        <div className="max-w-lg px-4 py-16 sm:px-6 lg:px-8">
                            <div className="text-start">
                                <h1 className="text-2xl font-bold sm:text-3xl">Book Your Seat</h1>

                                <p className="mt-4 text-gray-500">
                                    Select your preferred seat and showtime to reserve your spot for the movie.
                                </p>

                                {selectedSeat ? (
                                    <p className="mt-2 text-teal-600">
                                        Selected Seat: <strong>{selectedSeat}</strong>
                                    </p>
                                ) : (
                                    <p className="mt-2 text-red-600">No seat selected!</p>
                                )}

                                <button
                                    type="submit"
                                    className={`inline-block mt-4 rounded-lg px-5 py-3 text-sm font-medium text-white ${
                                        selectedSeat
                                            ? "bg-blue-500 hover:bg-blue-600"
                                            : "bg-gray-300 cursor-not-allowed"
                                    }`}
                                    disabled={!selectedSeat}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </PageContainer>
    );
}
