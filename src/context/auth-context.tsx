import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface AuthContextType {
  isAuthenticated: boolean;
  user_id: number | null;
  user_name: string | null;
  user_token: string | null;
  updateAuthentication: (authenticated: boolean, user_token?: string) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user_name: null,
  user_id: null,
  isAuthenticated: false,
  user_token: null,
  updateAuthentication: () => {},
  isLoading: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user_id, setUser_id] = useState<number | null>(null);
  const [user_name, setUser_name] = useState<string | null>(null);
  const [user_token, setUser_token] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const userToken = Cookies.get("user_token");
    if (userToken) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode<{ user_id: number; user_name: string }>(userToken);
      setUser_id(decodedToken.user_id);
      setUser_name(decodedToken.user_name);
      setUser_token(userToken);
    }
    setIsLoading(false); 
    console.log(userToken)
  }, []);


  const updateAuthentication = (authenticated: boolean, user_token?: string) => {
    if (!authenticated) {
      Cookies.remove("user_token");
      setUser_id(null);
      setUser_name(null);
      setUser_token(null);
      setIsAuthenticated(false);
    } else if (user_token) {
      Cookies.set("user_token", user_token, { expires: 7 });
      const decodedToken = jwtDecode<{ user_id: number; user_name: string }>(user_token);
      setUser_id(decodedToken.user_id);
      setUser_name(decodedToken.user_name);
      setUser_token(user_token);
      setIsAuthenticated(true); 
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, isAuthenticated, updateAuthentication, user_id, user_name, user_token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
