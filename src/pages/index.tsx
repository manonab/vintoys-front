import React from "react";
import { NextPage } from "next";
import { Container } from "@common/container";
// import { useRouter } from "next/router";
import Category from "@components/category";
import Bar from "@common/bar";
import Ads from "./catalog/ads";
import Banner from "@components/home/banner";
import SearchBar from "@components/home/search";
import TopAds from "@components/home/ads/top-ads";
import Encart from "@components/home/encart";

const Home: NextPage = () => {
  return (
    <Container>
      <SearchBar onSearch={() => console.log("coucou")} />
      <Banner />
      <Bar />
      <Category />
      <TopAds />
      <Encart />
      <Ads />
    </Container>
  );
};
export default Home;
