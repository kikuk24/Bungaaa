import{j as e,d as r}from"./app-f5cd012c.js";const d=({products:l,category:a})=>e.jsxs("section",{className:"py-4 md:px-[6rem] px-5",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"md:text-2xl text-black font-bold",children:"Rekomendasi Produk Terbaru"}),e.jsx("div",{className:"mt-3 ",children:e.jsx("ul",{className:"flex flex-row flex-warp gap-2",children:a.map((s,t)=>e.jsx("li",{className:"",children:e.jsx(r,{href:s.slug,className:"border-2 p-2 rounded-full",children:s.name})},t))})})]}),e.jsx("div",{className:"w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-5 mt-10 mb-5",children:l.map(s=>e.jsx("div",{className:"md:w-72 w-[10rem]  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl",children:e.jsxs(r,{href:s.slug,children:[e.jsx("img",{src:`storage/${s.image}`,alt:"Product",className:"md:h-60 h-32  w-52 md:w-72 object-cover rounded-t-xl"}),e.jsxs("div",{className:"px-4 py-3 md:w-72",children:[e.jsx("span",{className:"text-gray-400 mr-3 uppercase text-xs",children:s.category}),e.jsx("p",{className:"md:text-lg font-bold text-black truncate block capitalize",children:s.title}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{className:"md:text-lg font-semibold text-black cursor-auto my-3",children:["Rp"," ",s.price.toLocaleString("id","ID")]}),e.jsx("div",{className:"ml-auto",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-bag-plus",viewBox:"0 0 16 16",children:[e.jsx("path",{fillRule:"evenodd",d:"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"}),e.jsx("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})]})})]})]})]})},s.id))})]}),c=()=>e.jsx("div",{className:"w-full h-min-screen flex justify-center items-center text-black",children:"Product Tidak ada"}),i=({products:l,category:a})=>(console.log(l,a),l.length===0&&a.length===0?c():d({products:l,category:a})),m=i;export{m as C};