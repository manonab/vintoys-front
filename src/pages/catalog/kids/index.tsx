import React from "react";

import Title from "@common/title";
import AdsCards from "@common/card";
import { useGetAdsChildren } from "@hooks/ads/get/use-get-children";

const ChildrenAds: React.FC = () => {
  const { isError, isLoading, ads } = useGetAdsChildren();

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
          text="CHILDREN"
          className="my-10 mx-20 text-text text-left font-inter"
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

export default ChildrenAds;
