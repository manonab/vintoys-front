import { fetcher } from "@helpers/Ifetcher";
import { Favorite } from "@models/ad";
import { Auth, AuthPayload, SignUpParams } from "@models/auth";

const API_URL = process.env.API_URL;

export const auth = {
  signIn: (data: Auth): Promise<AuthPayload | undefined> =>
    fetcher(`${API_URL}/signin`, { data, method: "POST" }),
  signUp: (data: SignUpParams): Promise<AuthPayload | undefined> =>
    fetcher(`${API_URL}/sign_up`, { data, method: "POST" }),
  getFavorites: () => `${API_URL}/favorites`,
  postFavorite: (data: Favorite, user_token: string) =>
    fetcher(`${API_URL}/favorites`, { data, method: "POST" }, user_token),
  refreshToken: (user_id: number) =>
    fetcher(`${API_URL}/refresh`, { method: "POST", data: user_id }),
};
