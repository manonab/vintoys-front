import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { fetcher } from "@helpers/Ifetcher";
import { AdsPayload } from "@models/ad";
import useSWR from "swr";

export const useGetMyAds = () => {
  const { user_token } = useAuth();
  const token = user_token;

  const { data, error } = useSWR<AdsPayload>(ads.getMyAds, (url) =>
    fetcher(url, {}, token ? token : undefined),
  );
  return {
    adsData: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
