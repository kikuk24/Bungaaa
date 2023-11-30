import Footer from '@/Components/Footer'
import CardProduct from '@/Components/Home/CardProduct'
import Navbar from "@/Components/Navbar";
import React from "react";

const Products = (props) => {
    console.log(props);
    return (
        <main className="bg-page">
            <Navbar auth={props.auth} />
            <CardProduct products={props.products} category={props.category} />
            <Footer category={props.category} />
        </main>
    );
};

export default Products