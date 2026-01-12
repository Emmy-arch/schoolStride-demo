import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import AdminDashboardHome from "./pages/dashboard/admin/AdminDashboardHome";
import MainDashboardLayout from "./layouts/dashboardLayouts/MainDashboardLayout";
import UserManagementPage from "./pages/dashboard/admin/UserManagementPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["super_admin"]}>
            <MainDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardHome />} />
        <Route path="users" element={<UserManagementPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

      {/* Unauthorized */}
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default App;
