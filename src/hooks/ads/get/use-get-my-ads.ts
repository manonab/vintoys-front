import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { fetcher } from "@helpers/Ifetcher";
import { AdsPayload } from "@models/ad";
import { State } from "public/static/data/state";
import useSWR from "swr";

export const useGetMyAds = () => {
  const { user_token } = useAuth();
  const token = user_token;

  const { data, error } = useSWR<AdsPayload>(ads.getMyAds, (url) =>
    fetcher(url, {}, token ? token : undefined),
  );
  const adsWithReadableStates = data?.data?.map((ad) => {
    const adState = State.find((state) => state.id === ad.state);
    const state = adState ? adState.state : "Unknown";
    return {
      ...ad,
      state
    };
  });

  return {
    adsData: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
