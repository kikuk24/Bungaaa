import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Navlinks } from "@/data";
import { Link } from "@inertiajs/react";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="shadow-md w-full font-poppins text-black">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-[8rem] px-7">
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
                    className={`md:flex md:items-center md:pb-0 pb-12 md:ml-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto transition-all bg-white duration-500 md:pl-0 pl-9 ease-in ${
                        open ? "top-5" : "top-[-490px]"
                    }`}
                >
                    {Navlinks.map((link) => (
                        <li className=" text-lg md:my-0 my-7"key={link.id}>
                            <Link
                                href={link.path}
                                className="hover:text-custom-red md:hover:text-white duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2"
                            >{link.name }</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
