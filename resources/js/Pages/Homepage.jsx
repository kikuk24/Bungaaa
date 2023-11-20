import Footer from "@/Components/Footer"
import CardBlog from "@/Components/Home/CardBlog"
import CardProduct from "@/Components/Home/CardProduct"
import Carousel from "@/Components/Home/Carousel"
import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react";
export default function Homepage(props) {
    return (
        <main className="bg-white">
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Your page description" />
            </Head>
            <Navbar />
            <Carousel autoSlide={true}>
                {[
                    ...props.images.map((s) => (
                        <img
                            src={`storage/${s.image}`}
                            className="w-full h-[50%]"
                        />
                    )),
                    // <video src={vid} autoPlay muted loop />,
                ]}
            </Carousel>
            <CardProduct products={props.products} category={props.category} />
            <CardBlog />
            <Footer />
        </main>
    );
}
