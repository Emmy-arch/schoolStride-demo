import React from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Menu, Search, ChevronDown, Bell } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
} from "../../components/ui/Dropdown";
import { Badge } from "../../components/ui/Badge";
import roleLabels from "../../constants/roleLabels";
import { userRoles } from "../../data/mockData";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/Avatar";

const DashboardHeader = ({ onMenuClick, currentRole, onRoleChange }) => {
  const roleLabel = roleLabels[currentRole] || []; // Example role
  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-64 pl-9 bg-muted/50 border-0"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Role Switcher (Demo) */}

          <Dropdown>
            <DropdownTrigger className="cursor-pointer">
              <Button as="div" variant="outline" size="sm" className="gap-2">
                <Badge variant="secondary" className="font-normal">
                  {roleLabel}
                </Badge>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownTrigger>

            <DropdownContent className="w-48 bg-white">
              <DropdownLabel>Switch Role (Demo)</DropdownLabel>
              <DropdownSeparator />
              {userRoles.map((role) => (
                <DropdownItem
                  key={role.id}
                  onClick={() => onRoleChange(role.id)}
                  className={`cursor-pointer ${
                    currentRole === role.id ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {role.name}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Profile */}
          <Dropdown>
            <DropdownTrigger className="cursor-pointer">
              <Button as="div" variant="ghost" className="gap-2 pl-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">
                  {roleLabel}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownTrigger>

            <DropdownContent className="w-56 bg-white">
              <DropdownLabel>My Account</DropdownLabel>
              <DropdownSeparator />
              <DropdownItem>Profile Settings</DropdownItem>
              <DropdownItem>Preferences</DropdownItem>
              <DropdownSeparator />

              <DropdownItem className="text-destructive">Sign Out</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
