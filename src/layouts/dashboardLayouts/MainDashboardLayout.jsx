import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import useLogout from "../../hooks/useLogOut";

const MainDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState("super-admin");

  // Logout handler from hook
  const handleLogout = useLogout()
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        isOpen={sidebarOpen}
        currentRole={currentRole}
        onClose={() => setSidebarOpen(false)}
        handleLogout={handleLogout}
      />

      <div className="lg:pl-64">
      <DashboardHeader
        onMenuClick={() => setSidebarOpen(true)}
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
        handleLogout={handleLogout}
      />

      <main className="p-4 lg:p-6">
      <Outlet />
      </main>

      </div>
    </div>
  );
};

export default MainDashboardLayout;
