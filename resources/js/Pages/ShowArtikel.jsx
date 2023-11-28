import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SideProducts from "@/Components/Article/SideProducts";
import SideArtikel from "@/Components/Article/SideArtikel";

export default function ShowArtikel(props) {
    console.log(props);
    const [html, setHtml] = useState("");
    useEffect(() => {
        setHtml(props.artikel.content);
    }, [html]);
    return (
        <>
            <Head>
                <title>{props.artikel.title}</title>
                <meta name="description" content={props.artikel.description} />
            </Head>
            <Navbar auth={props.auth} />
            <main className="md:px-[100px] py-8 md:gap-4 bg-white mt-[60px] grid md:grid-cols-2 grid-cols-1">
                <article className="px-[20px]">
                    <h1 className="text-3xl font-extrabold text-black">
                        {props.artikel.title}
                    </h1>
                    <p className="my-3">
                        Penulis : Bungabunga, Dibuat Pada{" "}
                        {props.artikel.created_at}
                    </p>

                    <figure>
                        <img
                            src={`/storage/${props.artikel.image}`}
                            className="w-full h-[50%] rounded-lg mb-4"
                        />
                    </figure>
                    <p dangerouslySetInnerHTML={{ __html: html }}></p>
                </article>
                <aside>
                    <h4 className="text-black font-bold text-lg px-5 md:py-1 py-3">
                        Product Terbaru
                    </h4>
                    <SideProducts products={props.products} />
                    <h4 className="text-black font-bold text-lg px-5 md:py-1 py-6 mt-6  ">
                        Artikel Terbaru
                    </h4>
                    <SideArtikel artikel={props.recommended} />
                </aside>
            </main>
            <Footer category={props.category} />
        </>
    );
}
