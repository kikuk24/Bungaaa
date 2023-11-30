import{W as o,j as e,a as g}from"./app-38833546.js";import{A as d}from"./AuthenticatedLayout-f1f988a1.js";import"./ApplicationLogo-464cb3ed.js";import"./transition-79cbeff4.js";function f(i){const{data:s,setData:a,errors:t,post:r,progress:n}=o({title:"",description:"",price:"",category:"",slug:"",image:null,image_1:null,image_2:null,image_3:null}),m=async l=>{l.preventDefault(),r(route("product.store")),a("title",""),a("description",""),a("price",""),a("category",""),a("image",null),a("image_1",null),a("image_2",null),a("image_3",null)};return e.jsxs(d,{user:i.auth.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Tambah Produk"}),children:[e.jsx(g,{title:i.title}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:m,className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{type:"text",label:"title",name:"title",value:s.title,onChange:l=>a("title",l.target.value)}),t.title&&e.jsx("span",{className:"text-red-600 my-1",children:t.title}),e.jsx("label",{htmlFor:"description",children:"Deskripsi"}),e.jsx("input",{type:"text",value:s.description,label:"description",name:"description",onChange:l=>a("description",l.target.value)}),t.description&&e.jsx("span",{className:"text-red-600 my-1",children:t.description}),e.jsx("label",{htmlFor:"price",children:"Harga"}),e.jsx("input",{type:"number",name:"price",label:"price",value:s.price,onChange:l=>a("price",l.target.value)}),t.price&&e.jsx("span",{className:"text-red-600 my-1",children:t.price}),e.jsx("label",{htmlFor:"image",children:"Cover"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:l=>a("image",l.target.files[0])}),t.image&&e.jsx("span",{className:"text-red-600 my-1",children:t.image}),n&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700",children:e.jsxs("div",{className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",width:n.percentage,children:[n.percentage,"%"]})}),e.jsx("label",{htmlFor:"image",children:"Gambar"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:l=>a("image_1",l.target.files[0])}),e.jsx("label",{htmlFor:"image",children:"Gambar"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:l=>a("image_2",l.target.files[0])}),e.jsx("label",{htmlFor:"image",children:"Gambar"}),e.jsx("input",{type:"file",label:"image",name:"image",className:"file-input file-input-ghost w-full",onChange:l=>a("image_3",l.target.files[0])}),e.jsx("label",{htmlFor:"category",children:"Kategori"}),e.jsxs("select",{name:"category",id:"category",onChange:l=>a("category",l.target.value),children:[e.jsx("option",{value:"0",children:"--Pilih Kategori--"}),i.category.map((l,c)=>e.jsx("option",{value:l.id,children:l.name},c))]}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})})})})})]})}export{f as default};