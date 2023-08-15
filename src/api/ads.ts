export const ads = {
  getAllAds: () => `http://localhost:3001/ads`,
  getAllVintage: () => `http://localhost:3001/ads/vintage`,
  getAllAdult: () => `http://localhost:3001/ads/adult`,
  getAllChildren: () => `http://localhost:3001/ads/children`,
  postAds: () => `http://localhost:3001/ads`,
  getAdsWithID: (adId: number) => `http://localhost:3001/ads/${adId}`,
  getMyAds: () => `http://localhost:3001/my_ads`
};