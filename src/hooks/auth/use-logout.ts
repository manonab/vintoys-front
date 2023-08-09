import { AuthContext } from "@context/auth-context";
import Cookies from "js-cookie";
import { useContext } from "react";

export const useLogout = () => {
  const { updateAuthentication } = useContext(AuthContext);

  const handleLogout = () => {
    updateAuthentication(false);
    Cookies.remove("user_token");
  };

  return { handleLogout };
};
