import { Route, Routes } from "react-router-dom";
import { CartItem, ProductList } from "../pages";
import { NavBar } from "../components";

export const PlantRoutes = () => {
  return (
    <div className="product-list-container">
      <NavBar />
      <Routes>
        <Route path="list" element={<ProductList />} />
        <Route path="cart" element={<CartItem />} />
      </Routes>
    </div>
  );
};
