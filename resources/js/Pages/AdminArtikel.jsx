import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
export default function AdminArtikel(props) {
    const handleDelete = async (id) => {
        Inertia.delete(`artikels/${id}`);
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
                    <Link href="/artikels/create">Tambah</Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {props.flash.message != null && (
                                <div className="alert alert-success">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            )}
                            {props.artikel.map((ar, i) => (
                                <div
                                    className="outline w-full flex mb-3"
                                    key={i}
                                >
                                    <div className="w-[80%] flex">
                                        <img
                                            src={`/storage/${ar.image}`}
                                            alt={ar.title}
                                            className="w-[200px] h-[200px] object-cover p-7"
                                        />
                                        <div className="p-7">
                                            <h1 className="font-bold">
                                                {ar.title}
                                            </h1>
                                            <p className="text-sm line-clamp-3">
                                                {ar.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[20%] flex gap-5 p-5">
                                        <Link
                                            href={`artikels/${ar.id}/edit`}
                                            as="button"
                                            className="w-full bg-slate-200 h-7"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="w-full bg-slate-200 h-7"
                                            onClick={() => handleDelete(ar.id)}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
