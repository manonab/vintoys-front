export interface Ads{
     id: number;
     title: string;
     category?: string | undefined;
     price: number;
     brand: string;
     thumbnail_url: string;
     // owner?: string;
     // created_at: string;
     description: string;
     state: string;
     time_ago: string;
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