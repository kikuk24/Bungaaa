import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Navlinks } from "@/data";
import { Link } from "@inertiajs/react";
const Navbar = ({ auth }) => {
    const [open, setOpen] = useState(false);
    return (
        <nav
            className={`shadow-md w-full font-poppins text-[#FFE4D6] fixed top-0 left-0 z-10`}
        >
            <div className="md:flex items-center justify-between bg-[#B0578D] py-4 md:px-[8rem] px-7">
                <h1 className="font-bold text-xl cursor-pointer hover:text-custom-red">
                    Bungabunga
                </h1>
                <div
                    className="absolute right-8 top-4 md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 md:ml-0 absolute md:static bg-[#D988B9] md:bg-[#B0578D]  md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 md:pl-0 pl-9 ease-in ${
                        open ? "top-10" : "top-[-490px]"
                    }`}
                >
                    {Navlinks.map((link) => (
                        <li className=" text-lg md:my-0 my-7" key={link.id}>
                            <Link
                                href={link.path}
                                className="hover:text-gary  md:hover:[#D988B9] duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {auth.user !== null && (
                        <li>
                            <Link
                                href="/dashboard"
                                className="hover:text-gary  md:hover:[#D988B9] duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
