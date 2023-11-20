import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-d81133fd.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-5a041bc9.js";
import "@headlessui/react";
function EditProduct(props) {
  const { data, setData, errors, post, progress, processing } = useForm({
    title: props.products.title,
    description: props.products.description,
    price: props.products.price,
    slug: props.products.slug,
    image: props.products.image
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    post(route("product.update", props.products.id));
    setData("title", props.products.title);
    setData("description", props.products.description);
    setData("price", props.products.price);
    setData("slug", props.products.slug);
    setData("image", props.products.image);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Edit Product" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: props.title }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleUpdate,
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
              /* @__PURE__ */ jsx("label", { htmlFor: "slug", children: "Slug" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "slug",
                  label: "slug",
                  value: data.slug,
                  onChange: (e) => setData("slug", e.target.value)
                }
              ),
              errors.slug && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.slug }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "btn btn-primary",
                  disabled: processing,
                  children: "Add"
                }
              )
            ]
          }
        ) }) }) }) })
      ]
    }
  );
}
export {
  EditProduct as default
};
