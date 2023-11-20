import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Navbar-acef34ae.js";
import { C as CardProduct } from "./CardProduct-ea63b1b9.js";
import "@inertiajs/react";
import "react";
import "@heroicons/react/24/solid";
const Products = (props) => {
  console.log(props);
  return /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(CardProduct, { products: props.products, category: props.category }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Products as default
};
