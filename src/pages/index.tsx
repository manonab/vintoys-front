import React from "react";
import { NextPage } from "next";
import { Container } from "@common/container";
import Ads from "./ads";
import Banner from "@common/banner";
// import { useRouter } from "next/router";
import Category from "@components/category";
import Bar from "@common/bar";
import SearchBar from "@common/search";

const Home: NextPage = () => {
  // const router = useRouter();

  return (
    <Container>
      <SearchBar onSearch={() => console.log("coucou")} />
      <Banner />
      <Bar />
      <Category />
      <Ads />
    </Container>
  );
};
export default Home;
