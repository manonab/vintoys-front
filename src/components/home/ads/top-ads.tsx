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
        className="md:my-10 md:mx-20 my-5 text-left font-inter text-text"
        level={4}
      />
      <Container className="flex flex-row md:flex-row md:w-3/4 w-full md:mx-auto md:justify-evenly justify-between">
        <Container className="md:flex md:flex-row md:justify-between w-full">
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="md:w-auto mt-2 md:mx-auto w-full md:w-auto"
          />
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="md:w-auto mt-2 md:mx-auto w-full md:w-auto"
          />
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="md:w-auto mt-2 md:mx-auto w-full md:w-auto"
          />
        </Container>
        <Container className="md:flex  md:flex-row md:justify-between w-full">
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="w-full mt-2 md:w-auto md:mx-auto"
          />
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="md:w-auto mt-2 md:mx-auto w-full md:w-auto"
          />
          <TopButton
            onClick={() => console.log("coucou")}
            text="Nintendo"
            className="md:w-auto mt-2 md:mx-auto w-full md:w-auto"
          />
        </Container>
      </Container>
      <AllButton
        className="md:my-10 my-5 md:w-[200px] flex mx-auto text-text"
        onClick={() => console.log("coucou from all")}
        text="See all the products"
      />
    </Container>
  );
};

export default TopAds;
