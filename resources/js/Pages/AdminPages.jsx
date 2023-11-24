import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";

export default function AdminPages(props) {
    console.log(props);
    const handleDelete = async (id) => {
        Inertia.delete(`image/${id}`);
    };
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Landing Page
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl">Meta</h1>
                                <Link
                                    href={`/homepage/${props.meta.id}/edit`}
                                    className="w-[90px] bg-slate-500"
                                >
                                    Edit
                                </Link>
                            </div>
                            <p>Meta title : {props.meta.title}</p>
                            <p>Meta Description : {props.meta.description}</p>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-3 w-full">
                                {props.image.map((img) => (
                                    <div
                                        className="p-7 bg-slate-600"
                                        key={img.id}
                                    >
                                        <img
                                            src={`/storage/${img.image}`}
                                            alt=""
                                            width="240px"
                                        />
                                        <button
                                            onClick={() => handleDelete(img.id)}
                                        >
                                            delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
