const ShowProd = ({ product, products }) => {
    return (
        <>
            <div className="w-full text-black bg-white h-min-scren mt-[60px] grid md:grid-cols-2 gap-3 py-6 grid-cols-1">
                <div className="container flex items-center justify-center p-5">
                    <img
                        src={`/storage/${product.image}`}
                        alt=""
                        width="350px"
                    />
                </div>
                <div className="container py-5 px-6">
                    <h1 className="font-bold text-[40px]">{product.title}</h1>
                    <p className="text-xl text-slate-500">
                        {product.category.name.slice(0, 1).toUpperCase() +
                            product.category.name.slice(1)}
                    </p>
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
