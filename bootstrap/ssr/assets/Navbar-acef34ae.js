import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "footer p-10 bg-neutral text-neutral-content", children: [
    /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx("header", { className: "footer-title", children: "Services" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Branding" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Design" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Marketing" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Advertisement" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx("header", { className: "footer-title", children: "Company" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "About us" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Contact" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Jobs" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Press kit" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx("header", { className: "footer-title", children: "Legal" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Terms of use" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Privacy policy" }),
      /* @__PURE__ */ jsx("a", { className: "link link-hover", children: "Cookie policy" })
    ] })
  ] });
};
const Footer$1 = Footer;
const Blogs = [
  {
    id: 1,
    title: "ini Parahhh!",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolorum quibusdam magni. Vitae aut, sequi perspiciatis fugiat beatae ex architecto."
  },
  {
    id: 2,
    title: "ini Parahhh!",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolorum quibusdam magni. Vitae aut, sequi perspiciatis fugiat beatae ex architecto."
  },
  {
    id: 3,
    title: "ini Parahhh!",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolorum quibusdam magni. Vitae aut, sequi perspiciatis fugiat beatae ex architecto."
  }
];
const Navlinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Produk",
    path: "/products"
  },
  {
    id: 3,
    name: "Artikel",
    path: "/artikel"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  }
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `shadow-md w-full font-poppins text-black fixed top-0 left-0 z-10`,
      children: /* @__PURE__ */ jsxs("div", { className: "md:flex items-center justify-between bg-white py-4 md:px-[8rem] px-7", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl cursor-pointer hover:text-custom-red", children: "Bungabunga" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute right-8 top-4 md:hidden",
            onClick: () => setOpen(!open),
            children: open ? /* @__PURE__ */ jsx(XMarkIcon, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Bars3Icon, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "ul",
          {
            className: `md:flex md:items-center md:pb-0 pb-12 md:ml-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 md:pl-0 pl-9 ease-in ${open ? "top-10" : "top-[-490px]"}`,
            children: Navlinks.map((link) => /* @__PURE__ */ jsx("li", { className: " text-lg md:my-0 my-7", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: link.path,
                className: "hover:text-gary md:hover:text-gray-600 duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2",
                children: link.name
              }
            ) }, link.id))
          }
        )
      ] })
    }
  );
};
const Navbar$1 = Navbar;
export {
  Blogs as B,
  Footer$1 as F,
  Navbar$1 as N
};
