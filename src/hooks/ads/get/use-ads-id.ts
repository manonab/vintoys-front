import { ads } from "@api/ads";
import { fetcher } from "@helpers/fetcher";
import { Ads } from "@models/ad";
import { State } from "public/static/data/state";
import useSWR from "swr";

export const useGetAdsWithId = (adId: number) => {
  const { data, error } = useSWR<Ads>(ads.getAdsWithID(adId), (url) => fetcher(url));

  const adWithReadableState = data
    ? {
        ...data,
        state: State.find((state) => state.id === data.state)?.state || "Unknown",
      }
    : undefined;
  return {
    ad: adWithReadableState,
    isLoading: !error && !data,
    isError: error,
  };
};
