import { Link } from '@inertiajs/react';
import React from 'react'
const isProduct = ({ products, category }) => {
    return (
        <section className="py-4 md:px-[6rem] px-5 mt-[60px]">
            <div className="w-full">
                <h1 className="md:text-2xl text-black font-bold">
                    Rekomendasi Produk Terbaru
                </h1>
                <div className="mt-3 ">
                    <ul className="flex flex-row flex-warp gap-2">
                        {category.map((ca, i) => (
                            <li key={i} className="">
                                <Link
                                    href={ca.slug}
                                    className="border-2 border-[#D988B9] p-2 rounded-full text-[#B0578D]"
                                >
                                    {ca.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-fit grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-7 mt-10 mb-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="md:w-72 w-[10rem]  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <Link href={`/products/${product.slug}`}>
                            <img
                                src={`/storage/${product.image}`}
                                alt={product.title}
                                className="md:h-60 h-32  w-60 md:w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 md:w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">
                                    {product.category}
                                </span>
                                <p className="md:text-lg font-bold text-black block capitalize truncate">
                                    {product.title}
                                </p>
                                <div className="flex items-center">
                                    <p className="md:text-lg font-semibold text-black cursor-auto my-3">
                                        Rp{" "}
                                        {product.price.toLocaleString(
                                            "id",
                                            "ID",
                                            {
                                                style: "currency",
                                                currency: "IDR",
                                            }
                                        )}
                                    </p>
                                    {/* <del>
                                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                                          $199
                                      </p>
                                  </del> */}
                                    <div className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-bag-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <div className="w-full flex justify-center items-center">
              <Link href="product">Lihat Semua Produk</Link>
          </div> */}
        </section>
    );
};
const nonProduct = () => {
    return (
        <div className="w-full h-min-screen flex justify-center items-center text-black">
            Product Tidak ada
        </div>
    );
};
const CardProduct = ({ products, category }) => {
    return products.length === 0 || category.length === 0
        ? nonProduct()
        : isProduct({ products, category });
};
export default CardProduct