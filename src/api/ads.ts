import { fetcher } from "@helpers/Ifetcher";
import { FormDataAds } from "@pages/catalog/ads/post-ads";

const API_URL = process.env.API_URL;
console.log(API_URL, "api url");

export const ads = {
  getAllAds: () => `${API_URL}/ads`,
  getAllVintage: () => `${API_URL}/ads/vintage`,
  getAllAdult: () => `${API_URL}/ads/adult`,
  getAllChildren: () => `${API_URL}/ads/children`,
  getAdsWithID: (adId: number) => `${API_URL}/ads/${adId}`,
  getMyAds: () => `${API_URL}/my_ads`,
  postAds: (data: FormDataAds, user_token: string) =>
    fetcher(`${API_URL}/ads`, { data, method: "POST" }, user_token),
};

