import{j as e,a as s}from"./app-cb470577.js";import{N as r,F as a}from"./Navbar-9599275e.js";import{C as c}from"./CardProduct-73cb1952.js";const i=({product:t,products:n})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full text-black bg-white h-min-scren mt-[60px] grid md:grid-cols-2 gap-3 py-6 grid-cols-1",children:[e.jsx("div",{className:"container flex items-center justify-center p-5",children:e.jsx("img",{src:`/storage/${t.image}`,alt:"",width:"350px"})}),e.jsxs("div",{className:"container py-5 px-6",children:[e.jsx("h1",{className:"font-bold text-[40px]",children:t.title}),e.jsx("p",{className:"text-xl text-slate-500",children:t.category.name.slice(0,1).toUpperCase()+t.category.name.slice(1)}),e.jsx("p",{className:"text-xl",children:t.description}),e.jsxs("p",{className:"text-xl my-4",children:["Rp"," ",t.price.toLocaleString("id","ID",{style:"currency",currency:"IDR"})]}),e.jsxs("a",{href:`https://wa.me/+6285790481552?text=Halo%20admin%2C%20saya%20tertarik%20dengan%20produk%20anda%20${t.title}`,target:"_blank",rel:"noopener noreferrer",className:"w-full bg-slate-300 p-3 hover:bg-red-500",children:["Beli Sekarang"," "]})]})]})}),l=i;function m(t){return console.log(t),e.jsxs("main",{className:"bg-white",children:[e.jsxs(s,{children:[e.jsx("title",{children:t.product.title}),e.jsx("meta",{name:"description",content:t.product.description})]}),e.jsx(r,{}),e.jsx(l,{product:t.product,products:t.products}),e.jsx(c,{products:t.products,category:t.category}),e.jsx(a,{category:t.category})]})}export{m as default};
