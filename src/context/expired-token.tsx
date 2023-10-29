import jwtDecode from "jwt-decode";

export const isTokenExpired = (user_token: string) => {
  const decodedToken = jwtDecode(user_token) as { user_id: number; user_name: string; exp: number; };
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};