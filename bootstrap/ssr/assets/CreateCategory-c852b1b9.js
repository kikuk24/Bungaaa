import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-d81133fd.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-5a041bc9.js";
import "@headlessui/react";
function CreateCategory(props) {
  const { data, setData, errors, post, progress, processing } = useForm({
    name: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    post(route("category_product.store"));
    setData("name", "");
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Tambah Category" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: props.title }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex flex-col w-full",
            children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Name" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  label: "Name",
                  name: "name",
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              errors.name && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.name }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: processing,
                  className: "btn btn-primary",
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
  CreateCategory as default
};
