import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import "react";
const isProduct = ({ products, category }) => {
  return /* @__PURE__ */ jsxs("section", { className: "py-4 md:px-[6rem] px-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsx("h1", { className: "md:text-2xl text-black font-bold", children: "Rekomendasi Produk Terbaru" }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 ", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-row flex-warp gap-2", children: category.map((ca, i) => /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: ca.slug,
          className: "border-2 p-2 rounded-full",
          children: ca.name
        }
      ) }, i)) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-5 mt-10 mb-5", children: products.map((product) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "md:w-72 w-[10rem]  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl",
        children: /* @__PURE__ */ jsxs(Link, { href: product.slug, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `storage/${product.image}`,
              alt: "Product",
              className: "md:h-60 h-32  w-52 md:w-72 object-cover rounded-t-xl"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 md:w-72", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400 mr-3 uppercase text-xs", children: product.category }),
            /* @__PURE__ */ jsx("p", { className: "md:text-lg font-bold text-black truncate block capitalize", children: product.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxs("p", { className: "md:text-lg font-semibold text-black cursor-auto my-3", children: [
                "Rp",
                " ",
                product.price.toLocaleString(
                  "id",
                  "ID"
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  fill: "currentColor",
                  className: "bi bi-bag-plus",
                  viewBox: "0 0 16 16",
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      }
                    ),
                    /* @__PURE__ */ jsx("path", { d: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" })
                  ]
                }
              ) })
            ] })
          ] })
        ] })
      },
      product.id
    )) })
  ] });
};
const nonProduct = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-min-screen flex justify-center items-center text-black", children: "Product Tidak ada" });
};
const CardProduct = ({ products, category }) => {
  console.log(products, category);
  return products.length === 0 && category.length === 0 ? nonProduct() : isProduct({ products, category });
};
const CardProduct$1 = CardProduct;
export {
  CardProduct$1 as C
};
