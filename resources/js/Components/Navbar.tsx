import {usePage} from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Navbar() {
    const user = usePage().props.auth.user;

    return <>
        <header className="bg-teal-800 text-teal-100 fixed top-0 left-0 right-0 border-b border-teal-50/10">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block" href="/">
                    <span className="sr-only">Home</span>
                    <ApplicationLogo className={"size-6 stroke-2"}/>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className=" transition"
                                   href="/"> Home </a>
                            </li>

                            <li>
                                <a className=" transition"
                                   href="/movies"> Movies </a>
                            </li>

                            <li>
                                <a className=" transition"
                                   href="/reservations"> Reservations </a>
                            </li>

                            <li>
                                <a className=" transition"
                                   href="/profile"> Profile </a>
                            </li>

                            <li>
                                <a className=" transition"
                                   href="/login"> Log In </a>
                            </li>

                            <li>
                                <a className=" transition"
                                   href="/register"> Create Account </a>
                            </li>
                        </ul>
                    </nav>
                    {!user ? (
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                    href="/login"
                                >
                                    Login
                                </a>

                                <a
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                                    href="/register"
                                >
                                    Register
                                </a>
                            </div>

                            <button
                                className="block rounded bg-teal-100 text-teal-800 p-2.5 transition md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    ) : <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                className="inline-flex items-center rounded-md bg-teal-100 text-teal-800 px-4 py-2 text-sm  "
                            >
                                {user.name}
                                <svg
                                    className="ms-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')} className="block px-4 py-2 ">
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="block px-4 py-2 "
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                    }
                </div>
            </div>
        </header>
    </>
}
