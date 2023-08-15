import { ads } from "@api/ads";
import { fetcher } from "@helpers/fetcher";
import { Ads } from "@models/ad";
import useSWR from "swr";

export const useGetAdsWithId = (adId: number) => {
  const { data, error } = useSWR<Ads>(ads.getAdsWithID(adId), (url) => fetcher(url));

  return {
    ad: data,
    isLoading: !error && !data,
    isError: error,
  };
};
