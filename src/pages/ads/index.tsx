import React from "react";
import { useGetAds } from "@hooks/ads/use-get-ads";
import { Container } from "@common/container";
import Title from "@common/title";
import AdsCards from "@common/card";

const Ads = () => {
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
    <Container className="my-10">
      <Container className="text-center mt-8">
        <Title
          text="Les petits nouveaux"
          className="my-10 mx-[200px] text-left font-nineties"
          level={4}
        />
      </Container>
      <Container className="flex flex-wrap flex-row w-full justify-center">
        {ads.map((ad) => (
          <AdsCards
            state={ad?.state}
            title={ad?.title}
            brand={ad?.brand}
            description={ad?.description}
            price={ad?.price}
            key={ad.id}
            id={ad.id}
            thumbnail_url={ad.thumbnail_url}
            time_ago={ad.time_ago}
            category={ad.category}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Ads;
