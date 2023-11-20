import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-d81133fd.js";
import { Inertia } from "@inertiajs/inertia";
import "react";
import "./ApplicationLogo-5a041bc9.js";
import "@headlessui/react";
function AdminProducts(props) {
  const handleDelete = async (id) => {
    Inertia.delete(`product/${id}`);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Products" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(Link, { href: "product/create", children: "Tambah" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
            props.flash.message != null && /* @__PURE__ */ jsxs("div", { className: "alert alert-success", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "stroke-current shrink-0 h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { children: props.flash.message })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900 grid grid-cols-4 gap-3 w-full", children: props.products.lenght != 0 && props.products.map((product) => /* @__PURE__ */ jsxs("div", { className: "outline", children: [
              /* @__PURE__ */ jsx("img", { src: product.image, alt: "" }),
              /* @__PURE__ */ jsx("p", { children: product.title }),
              /* @__PURE__ */ jsx(Link, { href: `product/${product.id}/edit`, className: "", children: "Edit" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-danger", onClick: () => handleDelete(product.id), children: "Delete" })
            ] }, product.id)) })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  AdminProducts as default
};
