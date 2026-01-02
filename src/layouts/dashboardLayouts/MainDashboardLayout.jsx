import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const MainDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState("super-admin");
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        isOpen={sidebarOpen}
        currentRole={currentRole}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-64">
      <DashboardHeader
        onMenuClick={() => setSidebarOpen(true)}
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
      />

      <main className="p-4 lg:p-6">
      <Outlet />
      </main>

      </div>
    </div>
  );
};

export default MainDashboardLayout;
