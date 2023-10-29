import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { fetcher } from "@helpers/Ifetcher";
import { useState } from "react";

export const useDeleteAds = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { user_token } = useAuth();

  const deleteAd = async (adID: number) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      if (user_token !== null) {
        const response = await ads.deleteMyAd(adID, user_token);
        if (!response.ok) {
          const data = await response.json();
          setError(data.message);
        } else {
          setSuccess(true);
          console.log("well done, ton ad a été deleted");
        }
      } else {
        setError("User token is null.");
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de la suppression de l'annonce.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    success,
    deleteAd,
  };
};
