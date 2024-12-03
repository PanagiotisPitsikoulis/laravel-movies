import PageContainer from "@/Components/PageContainer";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import type {Movie} from "@/types/types";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Movies() {
    const {movies, auth} = usePage<PageProps & { movies: Movie[] }>().props;

    // Select the first movie as the featured movie
    const featuredMovie = movies[0];

    return (
        <PageContainer>
            {/* Movies List Section */}
            <section className="space-y-6 mt-10">
                {/* Introduction or Section Header */}
                <article className={"mb-10"}>
                    {/*Logo*/}
                    <div className={"flex mb-10 flex-row items-center gap-2 text-5xl font-extrabold"}>
                        <span>Cinema</span>
                        <ApplicationLogo className={"size-11 stroke-2"}/>
                    </div>
                    {/*Text*/}
                    <h3 className="text-6xl font-semibold">Explore Our Collection</h3>
                    <p className="text-2xl">
                        Discover a wide variety of movies to suit all tastes and moods.
                    </p>
                </article>
                {/* Movies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <article key={movie.id} className="border border-teal-50/10 bg-teal-700 rounded-lg overflow-clip shadow-md">
                            <a href={`/movie/${movie.id}`} className="block">
                                <img
                                    alt={movie.name}
                                    src={movie.image_link}
                                    className="w-full object-cover"
                                />
                            </a>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-teal-50">
                                    <a href={`/movie/${movie.id}`} className="hover:underline">
                                        {movie.name}
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm line-clamp-2">
                                    {movie.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xs">{movie.category}</span>
                                    <a
                                        href={`/movie/${movie.id}`}
                                        className="text-sm text-teal-50 hover:underline"
                                    >
                                        View More
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </PageContainer>
    );
}
