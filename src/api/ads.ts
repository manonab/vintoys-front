export const ads = {
  getAds: () => `http://localhost:3001/ads`,
  postAds: () => `http://localhost:3001/ads`,
  getAdsWithID: (adId: number) => `http://localhost:3001/ads/${adId}`,
  getMyAds: () => `http://localhost:3001/my_ads`
};