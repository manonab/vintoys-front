import React from "react";
import { NextPage } from "next";
import { Container } from "@common/container";
import Button from "@common/button";
import Ads from "./ads";
import Banner from "@common/banner";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <Banner />
      <Button
        isPost={true}
        text="Post your ad"
        onClick={() => router.push("/ads/create")}
      />
      <Ads />
    </Container>
  );
};
export default Home;
