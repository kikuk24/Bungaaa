import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-d81133fd.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-5a041bc9.js";
import "@headlessui/react";
function EditHomepage(props) {
  const { data, setData, errors, post, progress, processing } = useForm({
    title: "",
    description: "",
    image: null
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
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Tambah Category" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: props.title }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
          /* @__PURE__ */ jsxs(
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
                    label: "Title",
                    name: "title",
                    value: data.title,
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.title }),
                /* @__PURE__ */ jsx("label", { htmlFor: "description", children: "Description" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    label: "Description",
                    name: "description",
                    value: data.description,
                    onChange: (e) => setData("description", e.target.value)
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("span", { className: "text-red-600 my-1", children: errors.title }),
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
          ),
          /* @__PURE__ */ jsxs("form", { action: "", onSubmit: handleUpload, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "file",
                name: "image",
                label: "image",
                onChange: (e) => setData("image", e.target.files[0])
              }
            ),
            /* @__PURE__ */ jsx("button", { type: "submit", children: "Upoad Image" })
          ] })
        ] }) }) }) })
      ]
    }
  );
}
export {
  EditHomepage as default
};
