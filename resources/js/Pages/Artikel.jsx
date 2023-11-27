import Footer from '@/Components/Footer'
import CardBlog from '@/Components/Home/CardBlog'
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
const Artikel = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="" />
            </Head>
            <main className="bg-white">
                <Navbar auth={props.auth} />
                <CardBlog artikel={props.artikel} />
            </main>
            <Footer category={props.category} />
        </>
    );
};

export default Artikel