import React from "react";
import { NextPage } from "next";
import { useGetAds } from "@hooks/use-get-ads";
import AdsCards from "@common/card";
import { Container } from "@common/container";
import Button from "@common/button";
import Title from "@common/title";
import Banner from "@components/banner";

const Home: NextPage = () => {
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
    <Container>
      <Banner />
      <Button isPost={true} text={"Post your ad"} onClick={() => console.log("coucou")} />
      <Container className="text-center mt-8">
        <Title text="Toys of the Moment" className="my-10" level={4} />
      </Container>
      <Container className="flex flex-wrap flex-row">
        {ads.map((ad) => (
          <AdsCards
            title={ad?.title}
            description={ad?.description}
            price={ad?.price}
            key={ad.id}
            id={ad.id}
            thumbnail_url={ad.thumbnail_url}
            time_ago={ad.time_ago}
          />
        ))}
      </Container>
      <Container className="text-center mt-8">
        <Title text="Rarest toys" className="my-10 rounded-lg my-10" level={4} />
        <Container className="flex flex-wrap flex-row my-10">
          {ads.map((ad) => (
            <AdsCards
              key={ad.id}
              title={ad?.title}
              description={ad?.description}
              price={ad?.price}
              id={ad.id}
              thumbnail_url={ad.thumbnail_url}
              time_ago={ad.time_ago}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
export default Home;
