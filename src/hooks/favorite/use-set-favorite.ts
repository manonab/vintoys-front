// useAddFavorite.ts

import { auth } from "@api/user";
import { useAuth } from "@context/auth-context";
import { AuthPayload } from "@models/auth";

export const useAddFavorite = (): {
  addFavorite: (adId: number) => Promise<AuthPayload | undefined>;
} => {
  const { user_token } = useAuth();
  const token = user_token || "";

  const addFavorite = async (adId: number): Promise<AuthPayload | undefined> => {
    console.log(adId, token);
    try {
      const resp = await auth.postFavorite({ adId }, token);
      if (resp?.status === 200) {
        console.log(resp?.data);
        return resp?.data; // Return the response data to update the state
      }
      return undefined;
    } catch (err: any) {
      console.error("Error:", err);
      return undefined;
    } finally {
      console.log("Finished");
    }
  };

  return {
    addFavorite,
  };
};
