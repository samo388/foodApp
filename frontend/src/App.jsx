import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Food from "./pages/Food";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food/:id" element={<Food />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
