import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import AdminLayout from "./components/AdminLayout.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import AdminDashboard from "./pages/AdminDashboard.jsx";
import AddSweet from "./pages/AddSweet.jsx";
import EditSweet from "./pages/EditSweet.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      {/* Main App Layout with Navbar */}
      <Route path="/" element={<App />}>

        {/* PUBLIC ROUTES */}
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* ADMIN ROUTES */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add" element={<AddSweet />} />
          <Route path="edit/:id" element={<EditSweet />} />
        </Route>

      </Route>

    </Routes>
  </BrowserRouter>
);
