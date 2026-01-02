import {
  LayoutDashboard,
  Users,
  UserPlus,
  School,
  BookOpen,
  Calendar,
  ClipboardList,
  Image,
  Mail,
  Settings,
  Shield,
  UserCheck,
  BarChart3,
  Bell,
  FileText,
  Heart,
  Download,
  Award,
} from "lucide-react";

/**
 * Dashboard sidebar menu configuration
 * -----------------------------------
 * Key = user role
 * Value = array of menu items for that role
 */
export const dashboardMenu = {
  "super-admin": [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "User Management", icon: Users, href: "/dashboard/users" },
    { label: "Enrollment", icon: UserPlus, href: "/dashboard/enrollment" },
    { label: "Class Management", icon: School, href: "/dashboard/classes" },
    { label: "Subject Management", icon: BookOpen, href: "/dashboard/subjects" },
    { label: "Session & Term", icon: Calendar, href: "/dashboard/sessions" },
    { label: "Exam Settings", icon: ClipboardList, href: "/dashboard/exams" },
    { label: "Blog & Gallery", icon: Image, href: "/dashboard/content" },
    { label: "Communications", icon: Mail, href: "/dashboard/communications" },
    { label: "System Settings", icon: Settings, href: "/dashboard/settings" },
    { label: "Audit Logs", icon: Shield, href: "/dashboard/audit" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],

  principal: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Performance", icon: BarChart3, href: "/dashboard/performance" },
    { label: "Students", icon: Users, href: "/dashboard/students" },
    { label: "Staff", icon: UserCheck, href: "/dashboard/staff" },
    { label: "Notifications", icon: Bell, href: "/dashboard/notifications" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],

  "form-teacher": [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "My Class", icon: School, href: "/dashboard/my-class" },
    { label: "Student Movement", icon: Users, href: "/dashboard/movement" },
    { label: "Manage Results", icon: FileText, href: "/dashboard/results" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],

  teacher: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Record Scores", icon: ClipboardList, href: "/dashboard/scores" },
    { label: "My Classes", icon: School, href: "/dashboard/my-classes" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],

  parent: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "My Wards", icon: Heart, href: "/dashboard/wards" },
    { label: "Performance", icon: BarChart3, href: "/dashboard/performance" },
    { label: "Download Results", icon: Download, href: "/dashboard/results" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],

  student: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "My Results", icon: Award, href: "/dashboard/results" },
    { label: "Download Result", icon: Download, href: "/dashboard/download" },
    { label: "Profile", icon: UserCheck, href: "/dashboard/profile" },
  ],
};
