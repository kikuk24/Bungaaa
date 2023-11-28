import Footer from "@/Components/Footer"
import BlogSection from "@/Components/Home/BlogSection";
import CardBlog from "@/Components/Home/CardBlog";
import CardProduct from "@/Components/Home/CardProduct";
import Carousel from "@/Components/Home/Carousel";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
export default function Homepage(props) {
    return (
        <main className="bg-page">
            <Head>
                <title>{!props.meta.title ? "Home" : props.meta.title}</title>
                <meta name="description" content={props.meta.description} />
            </Head>
            <Navbar auth={props.auth} />
            <Carousel autoSlide={true}>
                {[
                    ...props.images.map((s) => (
                        <img
                            key={s.id}
                            src={`storage/${s.image}`}
                            alt={s.image}
                            className="w-full h-[50%]"
                        />
                    )),
                    // <video src={vid} autoPlay muted loop />,
                ]}
            </Carousel>
            <CardProduct products={props.products} category={props.category} />
            {props.artikel.lenght !== 0 && (
                <>
                    <div className="px-7">
                        <h1 className="md:text-2xl text-black font-bold">
                            Jangan Lewatkan Bungabunga Blog
                        </h1>
                    </div>
                    <BlogSection />
                    <CardBlog artikel={props.artikel} />
                </>
            )}
            <Footer category={props.category} />
        </main>
    );
}
