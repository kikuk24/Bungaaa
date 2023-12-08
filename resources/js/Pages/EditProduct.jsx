import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
export default function EditProduct(props) {
    const { data, setData, errors, post, progress, processing } = useForm({
        title: props.products.title,
        description: props.products.description,
        price: props.products.price,
        slug: props.products.slug,
        category: props.category.id,
        image: props.products.image,
        image_1: props.products.image_1,
        image_2: props.products.image_2,
        image_3: props.products.image_3,
    });
    const handleUpdate = async (e) => {
        e.preventDefault();
        post(route("product.update", props.products.id));

        setData("title", props.products.title);
        setData("description", props.products.description);
        setData("price", props.products.price);
        setData("slug", props.products.slug);
        setData("image", props.products.image);
        setData("image_1", props.products.image_1);
        setData("image_2", props.products.image_2);
        setData("image_3", props.products.image_3);
        setData("category", props.category.id);
    };
    const editor = useRef(null);

    console.log(props);
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Product
                </h2>
            }
        >
            <Head title={props.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={handleUpdate}
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
                                <label htmlFor="image">Cover</label>
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
                                <label htmlFor="image">Gambar</label>
                                <input
                                    type="file"
                                    label="image"
                                    name="image"
                                    className="file-input file-input-ghost w-full"
                                    onChange={(e) =>
                                        setData("image_1", e.target.files[0])
                                    }
                                />
                                <label htmlFor="image">Gambar</label>
                                <input
                                    type="file"
                                    label="image"
                                    name="image"
                                    className="file-input file-input-ghost w-full"
                                    onChange={(e) =>
                                        setData("image_2", e.target.files[0])
                                    }
                                />
                                <label htmlFor="image">Gambar</label>
                                <input
                                    type="file"
                                    label="image"
                                    name="image"
                                    className="file-input file-input-ghost w-full"
                                    onChange={(e) =>
                                        setData("image_3", e.target.files[0])
                                    }
                                />
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
                                    {props.category.lenght !== 0 &&
                                        props.category.map(
                                            (categori, index) => (
                                                <option
                                                    key={index}
                                                    value={categori.id}
                                                >
                                                    {categori.name}
                                                </option>
                                            )
                                        )}
                                </select>
                                <label htmlFor="description">Deskripsi</label>
                                <JoditEditor
                                    className="w-full h-96"
                                    ref={editor}
                                    name="content"
                                    tabIndex={1}
                                    value={data.description}
                                    onChange={(newContent) => {
                                        setData("description", newContent);
                                    }}
                                />
                                {errors.description && (
                                    <span className="text-red-600 my-1">
                                        {errors.description}
                                    </span>
                                )}
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    Simpan Perubahan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
