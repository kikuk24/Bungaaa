import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
// import { Inertia } from '@inertiajs/inertia'
export default function CreateCategory(props) {
    const { data, setData, errors, post, progress, processing } = useForm({
        name: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("category_product.store"));

        setData("name", "");
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
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    label="Name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <span className="text-red-600 my-1">
                                        {errors.name}
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
