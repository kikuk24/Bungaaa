import { useState } from "react";

const ShowProd = ({ product, products }) => {
    const [images, setImages] = useState({
        img1: product.image,
        img2: product.image_1,
        img3: product.image_2,
        img4: product.image_3,
    });
    const [actImg, setActImg] = useState(images.img1);
    console.log(product);
    return (
        <>
            <div className="w-full text-black bg-white h-min-scren mt-[60px] grid md:grid-cols-2 gap-3 py-6 grid-cols-1">
                <div className="container flex flex-col gap-6 items-center justify-center p-5">
                    <img
                        src={`/storage/${actImg}`}
                        alt=""
                        className="w-[350px] h-full aspect-square object-cover"
                    />
                    <div className="flex flex-row justify-between h-24 gap-2">
                        <img
                            src={`/storage/${images.img1}`}
                            alt={product.title}
                            className="w-24 h-24 rounded-md cursor-pointer"
                            onClick={() => setActImg(images.img1)}
                        />
                        <img
                            src={`/storage/${images.img2}`}
                            alt={product.title}
                            className="w-24 h-24 rounded-md cursor-pointer"
                            onClick={() => setActImg(images.img2)}
                        />
                        <img
                            src={`/storage/${images.img3}`}
                            alt={product.title}
                            className="w-24 h-24 rounded-md cursor-pointer"
                            onClick={() => setActImg(images.img3)}
                        />
                        <img
                            src={`/storage/${images.img4}`}
                            alt={product.title}
                            className="w-24 h-24 rounded-md cursor-pointer"
                            onClick={() => setActImg(images.img4)}
                        />
                    </div>
                </div>
                <div className="container py-5 px-6">
                    <p className="text-xl text-slate-500 capitalize">
                        {product.category.name}
                    </p>
                    <h1 className="font-bold text-[40px]">{product.title}</h1>
                    <p className="text-xl">{product.description}</p>
                    <p className="text-xl my-4">
                        Rp{" "}
                        {product.price.toLocaleString("id", "ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </p>
                    <a
                        href={`https://wa.me/+6285790481552?text=Halo%20admin%2C%20saya%20tertarik%20dengan%20produk%20anda%20${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-300 p-3 hover:bg-red-500"
                    >
                        Beli Sekarang{" "}
                    </a>
                </div>
            </div>
        </>
    );
};

export default ShowProd;
