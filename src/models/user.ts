import { Ads } from "./ad";

export interface UserInformations{
     user_id:number,
     username: string;
}

export interface UserFavorite{
     id: number;
     user_id: number;
     ad_id: number;
}
export interface FavoritePayload {
     data: Ads;
     headers: Headers;
     status: number;
}

export interface Favorite {
     adId: number;
}