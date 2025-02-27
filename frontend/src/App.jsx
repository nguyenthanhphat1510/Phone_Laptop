import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu.jsx";
import LoginPopups from "./components/LoginPopup/LoginPopup.jsx";
import ProductDetaiil from "./pages/ProductDetail/ProductDetaiil.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Header/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Add your routes here */}
          <Route path="/product" element={<ProductDetaiil/>} />
          <Route path="/cart" element={<Cart/>} />  
        </Routes>
        </BrowserRouter>
        <LoginPopups/>
        <Footer />
        <ToastContainer />
    </div>
  );
};

export default App;
