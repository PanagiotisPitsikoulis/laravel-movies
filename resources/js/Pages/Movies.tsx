import PageContainer from "@/Components/PageContainer";

export default function Movies() {
    return (
        <PageContainer>
            {/*Featured Movie*/}
            <section>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-600 p-8 flex items-center justify-center md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                </h2>

                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
                                    etiam
                                    sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                                    volutpat quisque ut interdum tincidunt duis.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/8263322/pexels-photo-8263322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*Movies Container*/}
            <section className={"space-y-6"}>
            {/*Text Box*/}
                <article className={"max-w-2xl"}>
                    <h3 className="font-medium sm:text-lg">
                        <a href="#" className="hover:underline"> Question about Livewire Rendering and
                            Alpine
                            JS </a>
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium
                        temporibus
                        iure delectus ut totam natus nesciunt ex? Ducimus, enim.
                    </p>
                </article>
                {/*Movies*/}
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    {Array.from({length: 30}).map((_, i) => (
                        <article key={i} className="border-2 border-gray-100 bg-white">
                            <div className="flex items-start gap-4 p-4">
                                <a href="/movie" className="block shrink-0">
                                    <img
                                        alt=""
                                        src="https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/738x416.webp"
                                        className="h-full w-96 rounded-sm object-cover"
                                    />
                                </a>

                                <div>
                                    <h3 className="font-medium sm:text-lg">
                                        <a href="#" className="hover:underline"> Question about Livewire Rendering and
                                            Alpine
                                            JS </a>
                                    </h3>

                                    <p className="line-clamp-2 text-sm text-gray-700">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium
                                        temporibus
                                        iure delectus ut totam natus nesciunt ex? Ducimus, enim.
                                    </p>

                                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                />
                                            </svg>

                                            <p className="text-xs">14 comments</p>
                                        </div>

                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                            Posted by
                                            <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <strong
                                    className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 bg-green-600 px-3 py-1.5 text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        />
                                    </svg>

                                    <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                                </strong>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </PageContainer>
    );
}
