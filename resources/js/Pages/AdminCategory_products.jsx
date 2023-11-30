import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
export default function AdminCategory_products(props) {
    console.log(props);
    // for (let i = 0; i< props )
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category Products
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href="category_products/create">Tambah</Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Job</th>
                                            <th>Favorite Color</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.category.map((category, i) => (
                                            <tr>
                                                <th key={i}>#</th>
                                                <td>{category.name}</td>
                                                <td>{category.slug}</td>
                                                <td>edit, delete</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
