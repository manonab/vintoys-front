import { auth } from "@api/user";
import { useAuth } from "@context/auth-context";
import { useState } from "react";

export const useRefreshToken = () => {
  const { updateAuthentication } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const refresh = async (user_id: number) => {
    console.log(user_id);
    if (user_id) {
      try {
        const response = await auth.refreshToken(user_id);
        if (response?.status === 201 || response?.status === 200) {
          updateAuthentication(true, response?.data.user_token);
        }
        return undefined;
      } catch (error: any) {
        setError(error);
        return undefined;
      } finally {
        console.log("Updated token");
      }
    }
  };
  return { error, refresh };
};
