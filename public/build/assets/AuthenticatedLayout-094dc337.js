import{r as i,j as e,d as c}from"./app-929eef79.js";import{A as p}from"./ApplicationLogo-e44229d3.js";import{t as f}from"./transition-d3d3d61f.js";const g=i.createContext(),u=({children:r})=>{const[t,s]=i.useState(!1),n=()=>{s(a=>!a)};return e.jsx(g.Provider,{value:{open:t,setOpen:s,toggleOpen:n},children:e.jsx("div",{className:"relative",children:r})})},j=({children:r})=>{const{open:t,setOpen:s,toggleOpen:n}=i.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:n,children:r}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},v=({align:r="right",width:t="48",contentClasses:s="py-1 bg-white",children:n})=>{const{open:a,setOpen:x}=i.useContext(g);let h="origin-top";r==="left"?h="origin-top-left left-0":r==="right"&&(h="origin-top-right right-0");let m="";return t==="48"&&(m="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{as:i.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${h} ${m}`,onClick:()=>x(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:n})})})})},b=({className:r="",children:t,...s})=>e.jsx(c,{...s,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+r,children:t});u.Trigger=j;u.Content=v;u.Link=b;const d=u;function l({active:r=!1,className:t="",children:s,...n}){return e.jsx(c,{...n,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:s})}function o({active:r=!1,className:t="",children:s,...n}){return e.jsx(c,{...n,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${r?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:s})}function k({user:r,header:t,children:s}){const[n,a]=i.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(c,{href:"/",children:e.jsx(p,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e.jsx(l,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(l,{href:route("product"),active:route().current("product"),children:"Product"}),e.jsx(l,{href:route("category_products"),active:route().current("category_products"),children:"Category Products"}),e.jsx(l,{href:route("landing.page"),active:route().current("landing.page"),children:"Page"})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e.jsx("div",{className:"ml-3 relative",children:e.jsxs(d,{children:[e.jsx(d.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[r.name,e.jsx("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(d.Content,{children:[e.jsx(d.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(d.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>a(x=>!x),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(n?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[e.jsx(o,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(o,{href:route("product"),active:route().current("product"),children:"Products"}),e.jsx(o,{href:route("category_products"),active:route().current("category_products"),children:"Category Product"}),e.jsx(o,{href:route("dashboard"),active:route().current("dashboard"),children:"Artikel"}),e.jsx(o,{href:route("landing.page"),active:route().current("landing.page"),children:"Page"})]}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:r.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(o,{href:route("profile.edit"),children:"Profile"}),e.jsx(o,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:s})]})}export{k as A};
