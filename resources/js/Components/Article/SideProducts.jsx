import React from "react";
import { Link } from "@inertiajs/react";

const SideProducts = ({ products }) => {
    return (
        <>
            <div className="text-black mt-4 w-full flex flex-col justify-center gap-7 ">
                {products.map((product, i) => (
                    <div className="flex gap-9 shadow-lg p-5" key={i}>
                        <img
                            src={`/storage/${product.image}`}
                            alt={product.title}
                            className="w-[100px]"
                        />
                        <div className="flex flex-col gap-2 justify-center">
                            <Link
                                href={`/products/${product.slug}`}
                                className="text-xl font-bold"
                            >
                                {product.title}
                            </Link>
                            <Link
                                href={`/category/${product.category.slug}`}
                                className="text-slate-500"
                            >
                                {product.category.name}
                            </Link>
                            <p>Rp {product.price.toLocaleString("id", "ID")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideProducts;
