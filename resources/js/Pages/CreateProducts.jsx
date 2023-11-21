import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
export default function CreateProducts(props) {
    const { data, setData, errors, post, progress } = useForm({
        title: "",
        description: "",
        price: "",
        category: "",
        slug: "",
        image: null,
    });
    console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("product.store"));

        setData("title", "");
        setData("description", "");
        setData("price", "");
        setData("category", "");
        setData("image", null);
    };
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Produk
                </h2>
            }
        >
            <Head title={props.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col w-full"
                            >
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    label="title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <span className="text-red-600 my-1">
                                        {errors.title}
                                    </span>
                                )}
                                <label htmlFor="description">Deskripsi</label>
                                <input
                                    type="text"
                                    value={data.description}
                                    label="description"
                                    name="description"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <span className="text-red-600 my-1">
                                        {errors.description}
                                    </span>
                                )}
                                <label htmlFor="price">Harga</label>
                                <input
                                    type="number"
                                    name="price"
                                    label="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />
                                {errors.price && (
                                    <span className="text-red-600 my-1">
                                        {errors.price}
                                    </span>
                                )}
                                <label htmlFor="image">Gambar</label>
                                <input
                                    type="file"
                                    label="image"
                                    name="image"
                                    className="file-input file-input-ghost w-full"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                {errors.image && (
                                    <span className="text-red-600 my-1">
                                        {errors.image}
                                    </span>
                                )}
                                {progress && (
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            width={progress.percentage}
                                        >
                                            {progress.percentage}%
                                        </div>
                                    </div>
                                )}
                                <label htmlFor="category">Kategori</label>
                                <select
                                    name="category"
                                    id="category"
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                >
                                    <option value="0">
                                        --Pilih Kategori--
                                    </option>
                                    {props.category.map((categori, index) => (
                                        <option key={index} value={categori.id}>
                                            {categori.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
