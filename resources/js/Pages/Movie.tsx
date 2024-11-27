import PageContainer from "@/Components/PageContainer";
import React from "react";

export default function Movie() {
    const [activeShowtime, setActiveShowtime] = React.useState<string>("8");
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
            {/*Select Movie Display Time*/}
            <section className={"space-y-4"}>
                <select className={"bg-gray-100 text-gray-500 border-gray-200"} name="display-time"
                        value={activeShowtime} onChange={(e) => setActiveShowtime(e.target.value)}>
                    <option value="10">10 o'clock</option>
                    <option value="8">8 o'clock</option>
                    <option value="9">9 o'clock</option>
                    <option value="5">5 o'clock</option>
                </select>
                {/*Select seat*/}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/*Seat Grid*/}
                        <section
                            className={"bg-gray-100 border-gray-200 border p-3 text-sm font-medium transition min-h-[400px] justify-between flex flex-row gap-4 flex-wrap"}>
                            {Array.from({length: 100}).map((_, index) => (
                                <div key={index}
                                     className={"bg-gray-200 flex items-center rounded-lg justify-center border-gray-300 size-10 text-gray-500 hover:text-teal-600"}>
                                    {index + 1}
                                </div>
                            ))}
                        </section>
                        {/*Seat Form*/}
                        <section className={"flex items-center justify-center"}>
                            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-lg text-start lg:px-20">
                                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                                    <p className="mt-4 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque
                                        error neque
                                        ipsa culpa autem, at itaque nostrum!
                                    </p>
                                    <button
                                        type="submit"
                                        className="inline-block rounded-lg mt-4 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </PageContainer>
    );
}
