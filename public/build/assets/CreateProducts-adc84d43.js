import{W as o,j as e,a as m}from"./app-cb470577.js";import{A as p}from"./AuthenticatedLayout-7617036b.js";import"./ApplicationLogo-3f0ca64f.js";import"./transition-1e3a82e6.js";function j(i){const{data:r,setData:a,errors:l,post:n,progress:s}=o({title:"",description:"",price:"",category:"",slug:"",image:null}),c=async t=>{t.preventDefault(),n(route("product.store")),a("title",""),a("description",""),a("price",""),a("category",""),a("image",null)};return e.jsxs(p,{user:i.auth.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Tambah Produk"}),children:[e.jsx(m,{title:i.title}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:c,className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",label:"title",name:"title",value:r.title,onChange:t=>a("title",t.target.value)}),l.title&&e.jsx("span",{className:"text-red-600 my-1",children:l.title}),e.jsx("label",{htmlFor:"description",children:"Deskripsi"}),e.jsx("input",{type:"text",value:r.description,label:"description",name:"description",onChange:t=>a("description",t.target.value)}),l.description&&e.jsx("span",{className:"text-red-600 my-1",children:l.description}),e.jsx("label",{htmlFor:"price",children:"Harga"}),e.jsx("input",{type:"number",name:"price",label:"price",value:r.price,onChange:t=>a("price",t.target.value)}),l.price&&e.jsx("span",{className:"text-red-600 my-1",children:l.price}),e.jsx("label",{htmlFor:"image",children:"Gambar"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:t=>a("image",t.target.files[0])}),l.image&&e.jsx("span",{className:"text-red-600 my-1",children:l.image}),s&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700",children:e.jsxs("div",{className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",width:s.percentage,children:[s.percentage,"%"]})}),e.jsx("label",{htmlFor:"category",children:"Kategori"}),e.jsxs("select",{name:"category",id:"category",onChange:t=>a("category",t.target.value),children:[e.jsx("option",{value:"0",children:"--Pilih Kategori--"}),i.category.map((t,d)=>e.jsx("option",{value:t.id,children:t.name},d))]}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})})})})})]})}export{j as default};