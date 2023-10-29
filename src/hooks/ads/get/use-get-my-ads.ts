import { ads } from "@api/ads";
import { useAuth } from "@context/auth-context";
import { isTokenExpired } from "@context/expired-token";
import { useRefreshToken } from "@hooks/auth/use-refresh";
import { AdsPayload } from "@models/ad";
import { State } from "public/static/data/state";
import useSWR from "swr";

export const useGetMyAds = () => {
  const { user_token, user_id } = useAuth();
  const { refresh } = useRefreshToken();

  if (user_token) {
    if (isTokenExpired(`${user_token}`)) {
      if (user_id) {
        refresh(user_id);
      }
    }
  }
  const { data, error } = useSWR<AdsPayload>(ads.getMyAds(`${user_token}`));
  const adsWithReadableStates = data?.data?.map((ad) => {
    const adState = State.find((state) => state.id === ad.state);
    const state = adState ? adState.state : "Unknown";
    return {
      ...ad,
      state,
    };
  });

  return {
    adsData: adsWithReadableStates,
    isLoading: !error && !data,
    isError: error,
  };
};
