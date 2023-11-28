import Footer from "@/Components/Footer";
import CardProduct from "@/Components/Home/CardProduct";
import Navbar from "@/Components/Navbar";
import ShowProd from "@/Components/ShowProd";
import { Head } from "@inertiajs/react";

export default function ShowProduct(props) {
    return (
        <main className="bg-white">
            <Head>
                <title>{props.product.title}</title>
                <meta name="description" content={props.product.description} />
            </Head>
            <Navbar auth={props.auth} />
            <ShowProd product={props.product} products={props.products} />
            <CardProduct products={props.products} category={props.category} />
            <Footer category={props.category} />
        </main>
    );
}
