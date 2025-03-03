import React from "react";
import LoginPopups from "./components/LoginPopup/LoginPopup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPopups />} />
          <Route path="/dashboard" element={<Sidebar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
