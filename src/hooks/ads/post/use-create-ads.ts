import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { AuthPayload } from "@models/auth";
import { FormDataAds } from "@pages/catalog/ads/post-ads";
import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";

export const usePostAds= () => {
  const { user_token } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const token = user_token || "";

  const postAd = async (params: FormDataAds): Promise<AuthPayload | undefined>  => {
    setIsLoading(true);
    try {
      const response = await ads.postAds(params, token);
      if (response?.status === 201) {
        mutate("/ads");
        router.push("/")
      }
      return undefined;
    } catch (error :any) {
      console.error('Error', error);
      setError(error);
      return undefined;
    } finally {
      setIsLoading(false);
      console.log("Finished");
    }
  };
  return {error, isLoading, postAd};
};
