import { jsxs, jsx } from "react/jsx-runtime";
import { B as Blogs } from "./Navbar-acef34ae.js";
import "react";
const BlogSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "border-b mb-5 flex justify-between text-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase", children: /* @__PURE__ */ jsx("a", { href: "#", className: "font-semibold inline-block", children: "Bungabunga BLog" }) }),
    /* @__PURE__ */ jsx("a", { href: "#", children: "See All" })
  ] });
};
const isBlog = ({ artikel }) => {
  return /* @__PURE__ */ jsxs(HeadBlog, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsx("h1", { className: "md:text-2xl text-black font-bold", children: "Jangan Lewatkan Bungabunga Blog" }) }),
    /* @__PURE__ */ jsx(BlogSection, {}),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10", children: Blogs.map((blog) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded overflow-hidden shadow-lg flex flex-col",
        children: [
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full",
                src: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: "Sunset in the mountains"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" }),
            /* @__PURE__ */ jsx("a", { href: "#!", children: /* @__PURE__ */ jsx("div", { className: "text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out", children: "Category" }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 mb-auto", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2",
                children: blog.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm line-clamp-3", children: blog.content })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-3 flex flex-row items-center justify-between bg-gray-100", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                href: "#",
                className: "py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center",
                children: /* @__PURE__ */ jsx("span", { className: "ml-1", children: "6 mins ago" })
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                href: "#",
                className: "py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center",
                children: /* @__PURE__ */ jsx("span", { className: "ml-1", children: "39 Comments" })
              }
            )
          ] })
        ]
      },
      blog.id
    )) })
  ] });
};
const HeadBlog = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx("section", { className: "px-4 md:px-[8rem] py-7", children });
};
const noArtikel = () => {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center font-bold text-black", children: "Tidak Ada data Artikel" });
};
const CardBlog = ({ artikel }) => {
  console.log("artikel:", artikel);
  return !artikel ? noArtikel() : isBlog(artikel);
};
const CardBlog$1 = CardBlog;
export {
  CardBlog$1 as C
};
