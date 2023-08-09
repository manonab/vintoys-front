import { auth } from "@api/user";
import { useAuth } from "@context/auth-context";
import { fetcher } from "@helpers/Ifetcher";
import { FavPayload } from "@models/ad";
import useSWR from "swr";

export const useGetMyFav = () => {
  const { user_token } = useAuth();
  const token = user_token || "";

  const { data, error } = useSWR<FavPayload>(
    auth.getFavorites,
    (url) => fetcher(url, {}, token),
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  const favoriteAdIds = data?.data?.id || null;
  return {
    favoriteAdIds: favoriteAdIds,
    favData: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
