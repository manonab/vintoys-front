export interface Ads{
     id: number;
     title: string;
     category?: string | undefined;
     price: number;
     brand: string;
     thumbnail_url: string;
     description: string;
     state: number;
     time_ago: string;
     seller_username: string;
}
export interface AdsPayload {
     data: Ads[];
     headers: Headers;
     status: number;
}

export interface FavPayload {
     data: Ads;
     headers: Headers;
     status: number;
}

export interface Favorite {
     adId: number;
}
