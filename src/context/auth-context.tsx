import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"; // Import ReactNode type
import Cookies from "js-cookie";

interface AuthContextType {
  isAuthenticated: boolean;
  updateAuthentication: (authenticated: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  updateAuthentication: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const userToken = Cookies.get("user_token");
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const updateAuthentication = (authenticated: boolean) => {
    if (!authenticated) {
      Cookies.remove("user_token");
    } else {
      Cookies.set("user_token", "YOUR_AUTHENTICATION_TOKEN", { expires: 7 });
    }
    setIsAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
