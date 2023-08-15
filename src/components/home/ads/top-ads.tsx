import React from "react";
import { Container } from "@common/container";
import TopButton from "@common/button/top-button";
import Title from "@common/title";
import AllButton from "@common/button/all-button";

const TopAds = () => {
  return (
    <Container className="mx-auto w-full">
      <Title
        text="Les plus recherchés"
        className="my-10 mx-20 text-left font-inter text-text"
        level={4}
      />
      <Container className="flex flex-row wrap md:w-3/4 w-full  md:mx-auto justify-evenly">
        <TopButton onClick={() => console.log("coucou")} text="Nintendo" />
        <TopButton onClick={() => console.log("coucou")} text="Nintendo" />
        <TopButton onClick={() => console.log("coucou")} text="Nintendo" />
        <TopButton onClick={() => console.log("coucou")} text="Nintendo" />
        <TopButton onClick={() => console.log("coucou")} text="Nintendo" />
      </Container>
      <AllButton
        className="my-10 w-[200px] flex mx-auto text-text"
        onClick={() => console.log("coucou from all")}
        text="See all the products"
      />
    </Container>
  );
};

export default TopAds;
