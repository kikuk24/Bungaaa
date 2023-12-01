import Footer from "@/Components/Footer";
import CardProduct from "@/Components/Home/CardProduct";
import CardProductsCategory from "@/Components/Home/CardProductsCategory";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";

const PerCategory = (props) => {
    return (
        <main className="bg-page">
            <Head>
                <title>{`Category: ${props.products.name}`}</title>
            </Head>
            <Navbar auth={props.auth} />
            <CardProductsCategory
                products={props.products}
                category={props.category}
            />
            <Footer category={props.category} />
        </main>
    );
};

export default PerCategory;
