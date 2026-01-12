export const redirectToDashboard = (roles = [], navigate) => {
  if (roles.includes("super_admin")) navigate("/admin");
  else if (roles.includes("principal")) navigate("/principal");
  else if (roles.includes("form_teacher")) navigate("/form-teacher");
  else if (roles.includes("teacher")) navigate("/teacher");
  else if (roles.includes("parent")) navigate("/parent");
  else if (roles.includes("student")) navigate("/student");
  else navigate("/");
};
