import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
export default function EditHomepage(props) {
    const { data, setData, errors, post, progress, processing } = useForm({
        title: "",
        description: "",
        image: null,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("home.store"));

        setData("title", "");
        setData("description", "");
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        post(route("home.upload"));

        setData("image", "");
    };
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Category
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
                                    label="Title"
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
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    label="Description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <span className="text-red-600 my-1">
                                        {errors.title}
                                    </span>
                                )}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </form>
                            <form action="" onSubmit={handleUpload}>
                                <input
                                    type="file"
                                    name="image"
                                    label="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <button type="submit">Upoad Image</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
