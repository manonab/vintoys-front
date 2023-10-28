import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import React, { useState } from "react";

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
      const response = await fetch(ads.deleteMyAd(adID), {
        method: "DELETE",
        headers: {
          Authorization: `${user_token}`,
        },
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
      } else {
        setSuccess(true);
        console.log("well done, ton ad a été deleted");
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
