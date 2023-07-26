
import { ads } from "@api/ads";
import { fetcher } from "@helpers/fetcher";
import { Ads } from "@models/ad";
import useSWR from "swr";

export const useGetAds = () => {
  const { data, error } = useSWR<Ads[]>(
    ads.getAds(),
    url => fetcher(url),
  );

  // Logging to check API response
  console.log("Data:", data);
  console.log("Error:", error);

  return {
    ads: data,
    isLoading: !error && !data,
    isError: error,
  };
};

