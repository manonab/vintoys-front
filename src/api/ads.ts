import { fetcher } from "@helpers/Ifetcher";
import { FormDataAds } from "@pages/catalog/ads/post-ads";

export const ads = {
  getAllAds: () => `http://localhost:3001/ads`,
  getAllVintage: () => `http://localhost:3001/ads/vintage`,
  getAllAdult: () => `http://localhost:3001/ads/adult`,
  getAllChildren: () => `http://localhost:3001/ads/children`,
  getAdsWithID: (adId: number) => `http://localhost:3001/ads/${adId}`,
  getMyAds: () => `http://localhost:3001/my_ads`,
  postAds: (data: FormDataAds, user_token: string) => fetcher(`http://localhost:3001/ads`, {data, method: "POST"}, user_token)
};