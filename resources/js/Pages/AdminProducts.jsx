import { Head, Link } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from '@inertiajs/inertia'


export default function AdminProducts(props) {
    const handleDelete = async(id) => {
        Inertia.delete(`product/${id}`)
  }
  return (
      <AuthenticatedLayout
          user={props.auth.user}
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Products
              </h2>
          }
      >
          <Head title="Dashboard" />

          <div className="py-12">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <Link href="product/create">Tambah</Link>
                  <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
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
                      <div className="p-6 text-gray-900 grid grid-cols-4 gap-3 w-full">
                          {props.products.lenght != 0 &&
                              props.products.map((product) => (
                                  <div className="outline" key={product.id}>
                                      <img
                                          src={`storage/${product.image}`}
                                          alt=""
                                      />
                                      <p>{product.title}</p>
                                      <Link
                                          href={`product/${product.id}/edit`}
                                          className=""
                                      >
                                          Edit
                                      </Link>
                                      <button
                                          className="btn btn-danger"
                                          onClick={() =>
                                              handleDelete(product.id)
                                          }
                                      >
                                          Delete
                                      </button>
                                  </div>
                              ))}
                      </div>
                  </div>
              </div>
          </div>
      </AuthenticatedLayout>
  );
}