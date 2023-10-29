import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { isTokenExpired } from "@context/expired-token";
import { AuthPayload } from "@models/auth";
import { FormDataAds } from "@pages/catalog/ads/post-ads";
import { useState } from "react";
import { mutate } from "swr";

export const usePostAds = () => {
  const { user_token } = useAuth();
  const token = user_token || "";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postAd = async (params: FormDataAds): Promise<AuthPayload | undefined> => {
    setIsLoading(true);
    try {
      // if(isTokenExpired(`${user_token}`)){
      //   try {
      //     const
      //   }
      // }
      const response = await ads.postAds(params, token);
      if (response?.status === 201 || response?.status === 200) {
        mutate("/ads");
        setIsLoading(false);
        setFinished(true);
      }
      return undefined;
    } catch (error: any) {
      setError(error);
      return undefined;
    } finally {
      console.log("Finished");
    }
  };
  return { error, isLoading, postAd, finished };
};
