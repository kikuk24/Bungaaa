import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Navbar-acef34ae.js";
import { C as CardBlog } from "./CardBlog-8325d3c0.js";
import { Link } from "@inertiajs/react";
import "react";
import "@heroicons/react/24/solid";
const Topbar = ({ category }) => {
  return /* @__PURE__ */ jsxs("nav", { className: "w-full bg-slate-500 flex md:flex-row flex-wrap flex-col justify-between items-center px-[8rem] py-3", children: [
    /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: category.map((ca, i) => /* @__PURE__ */ jsx(Link, { href: ca.slug, children: ca.name }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("input", { type: "text", className: "rounded-full w-full h-6" }) })
  ] });
};
const Artikel = (props) => {
  console.log(props);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
      /* @__PURE__ */ jsx(Topbar, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(CardBlog, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Artikel as default
};
