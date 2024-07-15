import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Products from "../pages/Products";
import Details from "../pages/Details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<PageNotFound />}>
        <Route index element={<Home />} />
        <Route path="products" >
          <Route index element={<Products />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </>
  )
);
