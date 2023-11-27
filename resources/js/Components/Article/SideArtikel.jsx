import React from "react";
import { Link } from "@inertiajs/react";

const SideArtikel = ({ artikel }) => {
    return (
        <div className="text-black">
            {artikel.map((ar, i) => (
                <div
                    className="sm:grid grid-cols-5 bg-white shadow-md p-7 mb-2 lg:max-w-full sm:p-4 rounded-lg lg:col-span-2"
                    key={i}
                >
                    <img
                        src={`/storage/${ar.image}`}
                        alt={ar.title}
                        className="object-cover w-full rounded-lg"
                    />
                    <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
                        <Link
                            href={`/artikel/${ar.slug}`}
                            className="text-gray-800 capitalize text-lg font-bold"
                        >
                            {ar.title}
                        </Link>
                        <p className="line-clamp-2">{ar.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideArtikel;
