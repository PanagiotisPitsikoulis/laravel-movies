import PageContainer from "@/Components/PageContainer";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import type { Movie } from "@/types/types";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Movies() {
    const { movies, auth } = usePage<PageProps & { movies: Movie[] }>().props;

    // Select the first movie as the featured movie
    const featuredMovie = movies[1];

    return (
        <PageContainer>
            {/* Movies List Section */}
            <section className="space-y-6 mt-10">
                {/* Introduction or Section Header */}
                {/* Hero */}
                <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                {featuredMovie.name}
                            </h2>
                            <p className="hidden text-gray-500 md:mt-4 md:block">
                                {featuredMovie.description}
                            </p>
                            <div className="mt-4 md:mt-8">
                                <Link
                                    href={`/movie/${featuredMovie.id}`}
                                    className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="A Charlie Brown Christmas"
                        src={featuredMovie.image_link}
                        className="h-full w-full max-h-[20rem] object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                    />
                </section>

                {/* Text */}
                <article className="flex flex-col items-start justify-start text-start">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl pt-20">
                        A Charlie Brown Christmas
                    </h2>
                    <p className="hidden text-gray-500 md:block">
                        1965 Holiday
                    </p>
                </article>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-10">
                    {movies.slice(200, 220).map((movie, index) => (
                        <Link
                            href={`/movie/${movie.id}`}
                            className="group block"
                            key={index}
                        >
                            <img
                                src={movie.image_link}
                                alt={movie.name}
                                className="aspect-square w-full rounded object-cover"
                            />
                            <div className="mt-3">
                                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                    {movie.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                                    {movie.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </PageContainer>
    );
}
