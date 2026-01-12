import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  // Implement logout logic here
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return () => {
    logout();
    navigate("/login", { replace: true });
  };
};

export default useLogout;
