import React from "react";
import { NextPage } from "next";
import { useGetAds } from "@hooks/use-get-ads";

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
    <div>
      {ads.map((ad) => (
        <p>{ad.price}</p>
      ))}
      <p></p>
    </div>
  );
};
export default Home;
