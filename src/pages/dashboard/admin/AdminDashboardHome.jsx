import React from "react";
import { PageHeader } from "../../../components/ui/PageHeader";
import { dashboardStats, roleGreetings, stats, enrollmentData } from "../../../data/mockData";
import { StatCard } from "../../../components/ui/StatCard";
import { BookOpen, GraduationCap, UserCheck, Users } from "lucide-react";
import { EnrollmentChart } from "../../../components/dashboard/EnrollmentChart";

const AdminDashboardHome = () => {
  const stats = dashboardStats.superAdmin;
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <PageHeader
        title={`Welcome back, ${roleGreetings["super-admin"]}!`}
        description="Here's what's happening in your school today"
      ></PageHeader>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={stats.totalStudents.toLocaleString()}
          icon={Users}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Teachers"
          value={stats.totalTeachers}
          icon={GraduationCap}
          variant="accent"
        />
        <StatCard
          title="Total Classes"
          value={stats.totalClasses}
          icon={BookOpen}
          variant="warning"
        />
        <StatCard
          title="Active Parents"
          value={stats.totalParents.toLocaleString()}
          icon={UserCheck}
          variant="info"
        />
      </div>

      {/* Enrollment Performance Chart */}
      <EnrollmentChart enrollmentData={enrollmentData} />
    </div>
  );
};

export default AdminDashboardHome;
