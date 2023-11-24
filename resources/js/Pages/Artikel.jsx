import Footer from '@/Components/Footer'
import CardBlog from '@/Components/Home/CardBlog'
import Navbar from "@/Components/Navbar";
import React from "react";
const Artikel = (props) => {
    console.log(props);
    return (
        <>
            <main className="bg-white">
                <Navbar />
                <CardBlog />
            </main>
            <Footer />
        </>
    );
};

export default Artikel