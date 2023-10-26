import { ads } from "@api/ads";
import { fetcher } from "@helpers/fetcher";
import { Ads } from "@models/ad";
import { State } from "public/static/data/state";
import useSWR from "swr";

export const useGetAds = () => {
  const { data, error } = useSWR<Ads[]>(ads.getAllAds(), (url) => fetcher(url));

  const adsWithReadableStates = data?.map((ad) => {
    const adState = State.find((state) => state.id === ad.state);
    const state = adState ? adState.state : "Unknown";
    return {
      ...ad,
      state,
    };
  });
  return {
    ads: adsWithReadableStates,
    isLoading: !error && !data,
    isError: error,
  };
};
