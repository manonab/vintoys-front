import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface AuthContextType {
  isAuthenticated: boolean;
  user_id: number | null;
  user_name: string | null;
  user_token: string | null;
  updateAuthentication: (authenticated: boolean, user_token?: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user_name: null,
  user_id: null,
  isAuthenticated: false,
  user_token: null,
  updateAuthentication: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user_id, setUser_id] = useState<number | null>(null);
  const [user_name, setUser_name] = useState<string | null>(null);
  const [user_token, setUser_token] = useState<string | null>(null);

  useEffect(() => {
    const userToken = Cookies.get("user_token");
    if (userToken) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode<{ user_id: number; user_name: string }>(userToken);
      setUser_id(decodedToken.user_id);
      setUser_name(decodedToken.user_name);
      setUser_token(userToken);
    }
  }, []);

  useEffect(() => {
    console.log("User ID and user name changed:", user_id, user_name);
  }, [user_id, user_name]);

  const updateAuthentication = (authenticated: boolean, user_token?: string) => {
    if (!authenticated) {
      Cookies.remove("user_token");
      setUser_id(null);
      setUser_name(null);
      setUser_token(null);
    } else {
      if (user_token) {
        Cookies.set("user_token", user_token, { expires: 7 });
        const decodedToken = jwtDecode<{
          user_id: number;
          user_name: string;
          user_token: string;
        }>(user_token);
        setUser_id(decodedToken.user_id);
        setUser_name(decodedToken.user_name);
        setUser_token(user_token);
      }
    }
    setIsAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, updateAuthentication, user_id, user_name, user_token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
