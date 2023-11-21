import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Bungabuga";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/AdminCategory_products.jsx": () => import("./assets/AdminCategory_products-a19504a3.js"), "./Pages/AdminPages.jsx": () => import("./assets/AdminPages-959997c3.js"), "./Pages/AdminProducts.jsx": () => import("./assets/AdminProducts-f95701b4.js"), "./Pages/Artikel.jsx": () => import("./assets/Artikel-59aca869.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-34aea311.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-7e42d50b.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-814a727c.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-5746b758.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-9bb21656.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-6a305aeb.js"), "./Pages/CreateCategory.jsx": () => import("./assets/CreateCategory-c852b1b9.js"), "./Pages/CreateProducts.jsx": () => import("./assets/CreateProducts-5060c271.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-0f3167d5.js"), "./Pages/EditHomepage.jsx": () => import("./assets/EditHomepage-b97ea96e.js"), "./Pages/EditProduct.jsx": () => import("./assets/EditProduct-a5de306a.js"), "./Pages/Homepage.jsx": () => import("./assets/Homepage-aac7ce57.js"), "./Pages/Products.jsx": () => import("./assets/Products-f2569570.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-33290aff.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-265736f0.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-f8211e2a.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-37e27950.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-00f4109e.js") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
