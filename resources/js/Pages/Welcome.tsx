import {PageProps} from '@/types';
import Navbar from "@/Components/Navbar";
import PageContainer from "@/Components/PageContainer";

export default function Welcome({
                                    auth,
                                    laravelVersion,
                                    phpVersion,
                                }: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <PageContainer>
            {/*Hero*/}
            <section className="overflow-hidden sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                            quisque ut interdum tincidunt duis.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>
            {/*Section 1*/}
            <section>
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                        <div className="md:col-span-3">
                            <img
                                src="https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="rounded"
                                alt=""
                            />
                        </div>

                        <div className="md:col-span-1 px-5 lg:px-10">
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                    architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                    sequi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Section 2*/}
            <section>
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                        <div className="md:col-span-1 px-5 lg:px-10">
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                    architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                    sequi.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <img
                                src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*Call to Action*/}
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

                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 lg:grid-cols-2">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/7234272/pexels-photo-7234272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />

                            <img
                                alt=""
                                src="https://images.pexels.com/photos/8263322/pexels-photo-8263322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </PageContainer>
    );
}
