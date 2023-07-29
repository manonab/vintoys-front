import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(false);

export const useAuth = () => useContext(AuthContext);

// AuthProvider  to wrap your entire application
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Load the authentication state from cookies on component mount
    const userToken = Cookies.get("user_token");
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const updateAuthentication = (authenticated) => {
    if (!authenticated) {
      // Clear the user_token cookie when logging out
      Cookies.remove("user_token");
    } else {
      // Set the user_token cookie when logging in
      Cookies.set("user_token", "YOUR_AUTHENTICATION_TOKEN", { expires: 7 }); // Set the expiration time (in days) as needed
    }
    setIsAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
