import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-d81133fd.js";
import { useForm, Head } from "@inertiajs/react";
import "@inertiajs/inertia";
import "react";
import "./ApplicationLogo-5a041bc9.js";
import "@headlessui/react";
function CreateProducts(props) {
  const { data, setData, errors, post, progress } = useForm({
    title: "",
    description: "",
    price: "",
    category: "",
    slug: "",
    image: null
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
  console.log(props);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Tambah Produk" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: props.title }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex flex-col w-full",
            children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "title", children: "Title" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  label: "title",
                  name: "title",
                  value: data.title,
                  onChange: (e) => setData("title", e.target.value)
                }
              ),
              errors.title && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.title }),
              /* @__PURE__ */ jsx("label", { htmlFor: "description", children: "Deskripsi" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: data.description,
                  label: "description",
                  name: "description",
                  onChange: (e) => setData("description", e.target.value)
                }
              ),
              errors.description && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.description }),
              /* @__PURE__ */ jsx("label", { htmlFor: "price", children: "Harga" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  name: "price",
                  label: "price",
                  value: data.price,
                  onChange: (e) => setData("price", e.target.value)
                }
              ),
              errors.price && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.price }),
              /* @__PURE__ */ jsx("label", { htmlFor: "image", children: "Gambar" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  label: "image",
                  name: "image",
                  className: "file-input file-input-ghost w-full",
                  onChange: (e) => setData("image", e.target.files[0])
                }
              ),
              errors.image && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.image }),
              progress && /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full dark:bg-gray-700", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",
                  width: progress.percentage,
                  children: [
                    progress.percentage,
                    "%"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("label", { htmlFor: "category", children: "Kategori" }),
              /* @__PURE__ */ jsxs("select", { name: "category", id: "category", onChange: (e) => setData("category", e.target.value), children: [
                /* @__PURE__ */ jsx("option", { value: "0", children: "--Pilih Kategori--" }),
                props.category.map((categori, index) => /* @__PURE__ */ jsx("option", { value: categori.id, children: categori.name }, index))
              ] }),
              /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", children: "Add" })
            ]
          }
        ) }) }) }) })
      ]
    }
  );
}
export {
  CreateProducts as default
};
