export interface Ads{
     id: number;
     title: string;
     category?: string | undefined;
     price: number;
     brand: string;
     thumbnail_url: string;
     description: string;
     state: number;
     sub_category?: string;
     location?: string;
     time_ago: string;
     username: string;
     status?: string;
};
export interface AdsPayload {
     data: Ads[];
     headers: Headers;
     status: number;
};
export interface FavPayload {
     data: Ads;
     headers: Headers;
     status: number;
};
export interface Favorite {
     adId: number;
};
