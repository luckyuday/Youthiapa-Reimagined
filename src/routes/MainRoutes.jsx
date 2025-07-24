import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import PagenotFound from "../pages/PagenotFound";
import Signup from "../pages/Signup";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};

export default MainRoutes;
