import { Link } from "@inertiajs/react";
const CardP = ({ prod }) => {
    return (
        <section className="py-4 md:px-[6rem] px-5 mt-[60px] w-full">
            {prod.map((ca, i) => (
                <div className="mt-3" key={i}>
                    <h1 className="md:text-2xl text-black font-bold capitalize flex">
                        {ca.name}
                    </h1>
                    <div className="flex overflow-scroll scroll-smooth whitespace-nowrap gap-2 no-scrollbar w-full touch-pan-x">
                        {ca.products != 0 ? (
                            ca.products.map((product, i) => (
                                <div
                                    className="w-max bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl rounded-md mt-3"
                                    key={i}
                                >
                                    <Link href={`/products/${product.slug}`}>
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.title}
                                            className="object-cover md:h-60 h-32  w-60 md:w-72"
                                        />
                                        <p className="p-2">{product.title}</p>
                                        <div className="flex items-center px-4 py-3 md:w-72">
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
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">Belum ada products!</p>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CardP;
