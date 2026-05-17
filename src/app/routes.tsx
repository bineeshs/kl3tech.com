import { createBrowserRouter } from "react-router";
import { CustomerLayout } from "./components/layouts/CustomerLayout";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { Home } from "./components/pages/Home";
import { ProductDetail } from "./components/pages/ProductDetail";
import { Cart } from "./components/pages/Cart";
import { Checkout } from "./components/pages/Checkout";
import { Account } from "./components/pages/Account";
import { AdminDashboard } from "./components/pages/admin/Dashboard";
import { AdminProducts } from "./components/pages/admin/Products";
import { AdminOrders } from "./components/pages/admin/Orders";
import { Login } from "./components/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CustomerLayout,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "account", Component: Account },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "products", Component: AdminProducts },
      { path: "orders", Component: AdminOrders },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
