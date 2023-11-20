import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Navbar-acef34ae.js";
import { C as CardBlog } from "./CardBlog-8325d3c0.js";
import { C as CardProduct } from "./CardProduct-ea63b1b9.js";
import { useState, useEffect } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";
const Carousel = ({
  children: images,
  autoSlide = false,
  autoSlideInterval = 3e3
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr2) => curr2 === 0 ? images.length - 1 : curr2 - 1);
  const next = () => setCurr((curr2) => curr2 === images.length - 1 ? 0 : curr2 + 1);
  useEffect(() => {
    if (!autoSlide)
      return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative mt-[60px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform ease-out duration-500 md:max-h-[540px] max-h-[250px]",
        style: { transform: `translateX(-${curr * 100}%)` },
        children: images
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-between p-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          className: "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
          children: /* @__PURE__ */ jsx(ArrowLeftCircleIcon, { className: "w-9 h-9" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
          children: /* @__PURE__ */ jsx(ArrowRightCircleIcon, { className: "w-9 h-9" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-0 left-0", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: images.map((s, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `transition-all w-full bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`
      },
      i
    )) }) })
  ] });
};
const Carousel$1 = Carousel;
function Homepage(props) {
  return /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: props.title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Your page description" })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Carousel$1, { autoSlide: true, children: [
      ...props.images.map((s) => /* @__PURE__ */ jsx(
        "img",
        {
          src: `storage/${s.image}`,
          className: "w-full h-[50%]"
        }
      ))
      // <video src={vid} autoPlay muted loop />,
    ] }),
    /* @__PURE__ */ jsx(CardProduct, { products: props.products, category: props.category }),
    /* @__PURE__ */ jsx(CardBlog, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Homepage as default
};
