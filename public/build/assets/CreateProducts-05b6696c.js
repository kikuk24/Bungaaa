import{W as d,j as e,a as m}from"./app-ba7a6cd1.js";import{A as x}from"./AuthenticatedLayout-8515ecd7.js";import"./index-24164b7d.js";import"./ApplicationLogo-7a1c1486.js";import"./transition-ec17345c.js";function b(i){const{data:r,setData:l,errors:a,post:n,progress:s}=d({title:"",description:"",price:"",category:"",slug:"",image:null});console.log(r);const c=async t=>{t.preventDefault(),n(route("product.store")),l("title",""),l("description",""),l("price",""),l("category",""),l("image",null)};return console.log(i),e.jsxs(x,{user:i.auth.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Tambah Produk"}),children:[e.jsx(m,{title:i.title}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:c,className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",label:"title",name:"title",value:r.title,onChange:t=>l("title",t.target.value)}),a.title&&e.jsx("span",{className:"text-red-600 my-1",children:a.title}),e.jsx("label",{htmlFor:"description",children:"Deskripsi"}),e.jsx("input",{type:"text",value:r.description,label:"description",name:"description",onChange:t=>l("description",t.target.value)}),a.description&&e.jsx("span",{className:"text-red-600 my-1",children:a.description}),e.jsx("label",{htmlFor:"price",children:"Harga"}),e.jsx("input",{type:"number",name:"price",label:"price",value:r.price,onChange:t=>l("price",t.target.value)}),a.price&&e.jsx("span",{className:"text-red-600 my-1",children:a.price}),e.jsx("label",{htmlFor:"image",children:"Gambar"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:t=>l("image",t.target.files[0])}),a.image&&e.jsx("span",{className:"text-red-600 my-1",children:a.image}),s&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700",children:e.jsxs("div",{className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",width:s.percentage,children:[s.percentage,"%"]})}),e.jsx("label",{htmlFor:"category",children:"Kategori"}),e.jsxs("select",{name:"category",id:"category",onChange:t=>l("category",t.target.value),children:[e.jsx("option",{value:"0",children:"--Pilih Kategori--"}),i.category.map((t,o)=>e.jsx("option",{value:t.id,children:t.name},o))]}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})})})})})]})}export{b as default};
