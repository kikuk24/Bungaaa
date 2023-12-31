import Footer from "@/Components/Footer"
import BlogSection from "@/Components/Home/BlogSection";
import CardBlog from "@/Components/Home/CardBlog";
import CardP from "@/Components/Home/CardP";
import CardProduct from "@/Components/Home/CardProduct";
import Carousel from "@/Components/Home/Carousel";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
export default function Homepage(props) {
    console.log(props);
    return (
        <main className="bg-page">
            <Head>
                <title>{!props.meta.title ? "Home" : props.meta.title}</title>
                <meta name="description" content={props.meta.description} />
                <meta property="og:title" content={props.meta.title} />
                <meta
                    property="og:description"
                    content={props.meta.description}
                />
                <meta
                    property="og:image"
                    content={`storage/${props.images[0]}`}
                />
            </Head>
            <Navbar auth={props.auth} />
            <Carousel autoSlide={true}>
                {[
                    ...props.images.map((s) => (
                        <img
                            key={s.id}
                            src={`storage/${s.image}`}
                            alt={s.image}
                            className="min-w-full h-[370px] object-cover rounded-md md:p-9 p-0"
                        />
                    )),
                    // <video src={vid} autoPlay muted loop />,
                ]}
            </Carousel>
            <CardP prod={props.prod} />
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
