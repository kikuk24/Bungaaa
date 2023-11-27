import React from 'react'
import { Link } from "@inertiajs/react";

const BlogSection = () => {
    return (
        <div className="border-b mb-5 flex justify-between text-sm p-7">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                <Link href="/artikel" className="font-semibold inline-block">
                    Bungabunga BLog
                </Link>
            </div>
            <Link href="/artikel">See All</Link>
        </div>
    );
};

export default BlogSection