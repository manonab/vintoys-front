import React from "react";
import { useGetAds } from "@hooks/ads/get/use-get-ads";

import Title from "@common/title";
import AdsCards from "@common/card";

const Ads: React.FC = () => {
  const { isError, isLoading, ads } = useGetAds();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error occurred while fetching ads data</p>;
  }
  if (!ads) {
    return <p>No ads found</p>;
  }

  return (
    <div className="my-10">
      <div className="text-center mt-8">
        <Title
          text="The fresh news"
          className="md:my-10 md:mx-20 my-2 mx-2 text-text text-left font-inter"
          level={4}
        />
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center">
        {ads.map((ad) => (
          <AdsCards
            state={1}
            title={ad?.title}
            brand={ad?.brand}
            description={ad?.description}
            price={ad?.price}
            key={ad.id}
            id={ad.id}
            thumbnail_url={ad.thumbnail_url}
            time_ago={ad.time_ago}
            category={ad.category}
            username={ad.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Ads;
