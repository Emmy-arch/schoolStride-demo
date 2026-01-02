import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import AdminDashboardHome from "./pages/dashboard/admin/AdminDashboardHome";
import MainDashboardLayout from "./layouts/dashboardLayouts/MainDashboardLayout";

const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route index element={<LoginPage />} />

      {/* Dashboard Routes */}
      <Route path="/admin" element={<MainDashboardLayout />}>
        <Route index element={<AdminDashboardHome />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
