import React from "react";
import { NextPage } from "next";

import Bar from "@common/bar";

import Banner from "@components/home/banner";
import SearchBar from "@components/home/search";
import TopAds from "@components/home/ads/top-ads";
import Encart from "@components/home/encart";
import Category from "@components/category";
import Ads from "./catalog/ads";
import { useIsMobile } from "@hooks/utils/use-isMobile";

const Home: NextPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-screen">
      <SearchBar onSearch={() => console.log("coucou")} />
      <Banner />
      <Bar />
      <Category />
      <TopAds />
      {!isMobile && <Encart />}
      <Ads />
    </div>
  );
};
export default Home;
