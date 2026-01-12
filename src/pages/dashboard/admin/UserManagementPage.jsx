import React, { useState } from "react";
import { DataTable } from "../../../components/ui/DataTable";
import { usersData } from "../../../data/mockData";
import { MoreVertical, UserCheck, UserX } from "lucide-react";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../../../components/ui/Dropdown";

const UserManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredUsers);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleViewProfile = (userId) => {
    navigate(`/dashboard/users/${userId}`);
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (user) => <Badge variant="secondary">{user.role}</Badge>,
    },
    {
      key: "status",
      header: "Status",
      render: (user) => (
        <div className="flex items-center gap-2">
          {user.status === "Active" ? (
            <UserCheck className="h-4 w-4 text-success" />
          ) : (
            <UserX className="h-4 w-4 text-muted-foreground" />
          )}
          <span
            className={
              user.status === "Active"
                ? "text-success"
                : "text-muted-foreground"
            }
          >
            {user.status}
          </span>
        </div>
      ),
    },
    { key: "lastActive", header: "Last Active" },
    {
      key: "actions",
      header: "",
      render: (user) => (
        <Dropdown>
          <DropdownTrigger asChild>
            <Button as="div" variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownTrigger>
          <DropdownContent align="end">
            <DropdownItem onClick={() => handleViewProfile(user.id)}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleEditUser(user)}>
              Edit User
            </DropdownItem>
            <DropdownItem className="text-destructive">Deactivate</DropdownItem>
          </DropdownContent>
        </Dropdown>
      ),
      className: "w-12",
    },
  ];

  return (
    <DataTable
      data={filteredUsers}
      columns={columns}
      onRowClick={(row) => console.log(row)}
    />
  );
};

export default UserManagementPage;
