import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from "react-router-dom";
import AllProductMenu from "../pages/AllProductMenu";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="/allproduct" element={<Outlet/>} >
        <Route index element={<AllProductMenu />} />
        <Route path="/allproduct/detail" element={<ProductDetails/>} />
        </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
