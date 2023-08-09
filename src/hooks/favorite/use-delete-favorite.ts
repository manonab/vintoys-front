import { auth } from "@api/user";
import { useAuth } from "@context/auth-context";

export const useDeleteFavorite = () => {
  const { user_token } = useAuth();
  const token = user_token ?? "";

  const deleteFavorite = async (adId: number) => {
    try {
      await auth.deleteFavorite(token, adId);
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  return {
    deleteFavorite,
  };
};
