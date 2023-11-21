const ShowProd = ({ product, products, category }) => {
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
                    <h1 className="font-bold text-[30px]">{product.title}</h1>
                    <p className="text-xl">
                        {product.description}
                        {` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni doloremque quisquam qui, deserunt iure suscipit ea veniam reprehenderit laudantium!`}
                    </p>
                    <p className="text-xl my-4">
                        Rp {product.price.toLocaleString("id", "ID")}
                    </p>
                    <a
                        href="http://wa.me/"
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
