import { fetcher } from "@helpers/Ifetcher";
import { Favorite } from "@models/ad";
import { Auth, AuthPayload, SignUpParams } from "@models/auth";

export const auth = {
   signIn: (data: Auth): Promise<AuthPayload | undefined> =>fetcher("http://localhost:3001/signin", {data, method: "POST",}),
   signUp: (data: SignUpParams): Promise<AuthPayload | undefined> => fetcher("http://localhost:3001/sign_up", {data, method: "POST"}),
   getFavorites: () => `http://localhost:3001/favorites`,
   postFavorite: (data: Favorite, user_token: string) => fetcher(`http://localhost:3001/favorites`, {data, method: "POST"}, user_token)
};