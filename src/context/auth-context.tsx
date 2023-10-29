import React, { createContext, useContext, useEffect, useState, ReactNode, SetStateAction } from "react";
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
  updateAuthentication: () => { },
  isLoading: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthContextType>({
    isAuthenticated: false,
    user_id: null,
    user_name: null,
    user_token: null,
    updateAuthentication: () => { },
    isLoading: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userToken = Cookies.get("user_token");
      if (userToken) {
        const decodedToken = jwtDecode<{ user_id: number; user_name: string }>(userToken);
        setAuthState(prevState => ({
          ...prevState,
          isAuthenticated: true,
          user_id: decodedToken.user_id,
          user_name: decodedToken.user_name,
          user_token: userToken,
          isLoading: false,
        }));
      } else {
        setAuthState(prevState => ({
          ...prevState,
          isAuthenticated: false,
          user_id: null,
          user_name: null,
          user_token: null,
          isLoading: false,
        }));
      }
    }
    console.log(authState)
  }, []);

  const updateAuthentication = (authenticated: boolean, user_token?: string) => {
    if (!authenticated) {
      Cookies.remove("user_token");
      setAuthState(prevState => ({
        ...prevState,
        isAuthenticated: false,
        user_id: null,
        user_name: null,
        user_token: null,
      }));
    } else if (user_token) {
      Cookies.set("user_token", user_token, { expires: 7 });
      const decodedToken = jwtDecode<{ user_id: number; user_name: string }>(user_token);

      setAuthState(prevState => ({
        ...prevState,
        isAuthenticated: true,
        user_id: decodedToken.user_id,
        user_name: decodedToken.user_name,
        user_token: user_token,
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, updateAuthentication }}
    >
      {children}
    </AuthContext.Provider>
  );
};
