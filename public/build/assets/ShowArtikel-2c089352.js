import{j as e,d as a,r as i,a as c}from"./app-cb470577.js";import{N as r,F as d}from"./Navbar-9599275e.js";const n=({products:l})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-black mt-4 w-full flex flex-col justify-center gap-7 ",children:l.map((s,t)=>e.jsxs("div",{className:"flex gap-9 shadow-lg p-5",children:[e.jsx("img",{src:`/storage/${s.image}`,alt:s.title,className:"w-[100px]"}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center",children:[e.jsx(a,{href:`/products/${s.slug}`,className:"text-xl font-bold",children:s.title}),e.jsx(a,{href:`/category/${s.category.slug}`,className:"text-slate-500",children:s.category.name}),e.jsxs("p",{children:["Rp ",s.price.toLocaleString("id","ID")]})]})]},t))})}),x=n,m=({artikel:l})=>e.jsx("div",{className:"text-black",children:l.map((s,t)=>e.jsxs("div",{className:"sm:grid grid-cols-5 bg-white shadow-md p-7 mb-2 lg:max-w-full sm:p-4 rounded-lg lg:col-span-2",children:[e.jsx("img",{src:`/storage/${s.image}`,alt:s.title,className:"object-cover w-full rounded-lg"}),e.jsxs("div",{className:"pt-5 self-center sm:pt-0 sm:pl-10 col-span-3",children:[e.jsx(a,{href:`/artikel/${s.slug}`,className:"text-gray-800 capitalize text-lg font-bold",children:s.title}),e.jsx("p",{className:"line-clamp-2",children:s.description})]})]},t))}),o=m;function j(l){console.log(l);const[s,t]=i.useState("");return i.useEffect(()=>{t(l.artikel.content)},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx("title",{children:l.artikel.title}),e.jsx("meta",{name:"description",content:l.artikel.description})]}),e.jsx(r,{}),e.jsxs("main",{className:"md:px-[100px] py-8 md:gap-4 bg-white mt-[60px] grid md:grid-cols-2 grid-cols-1",children:[e.jsxs("article",{className:"px-[20px]",children:[e.jsx("h1",{className:"text-3xl font-extrabold text-black",children:l.artikel.title}),e.jsxs("p",{className:"my-3",children:["Penulis : Bungabunga, Dibuat Pada"," ",l.artikel.created_at]}),e.jsx("figure",{children:e.jsx("img",{src:`/storage/${l.artikel.image}`,className:"w-full h-[50%] rounded-lg mb-4"})}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s}})]}),e.jsxs("aside",{children:[e.jsx("h4",{className:"text-black font-bold text-lg px-5 md:py-1 py-3",children:"Product Terbaru"}),e.jsx(x,{products:l.products}),e.jsx("h4",{className:"text-black font-bold text-lg px-5 md:py-1 py-6 mt-6  ",children:"Artikel Terbaru"}),e.jsx(o,{artikel:l.recommended})]})]}),e.jsx(d,{category:l.category})]})}export{j as default};
