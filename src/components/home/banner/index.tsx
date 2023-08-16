import React from "react";
import Text, { Align, Font } from "@common/text";
import { Container } from "@common/container";

const Banner = () => {
  return (
    <Container className="z-0 h-[250px] md:h-[430px] w-full md:w-[1224px] flex items-center mx-auto mt-10 justify-center bg-cover bg-center bg-banner opacity-75 rounded rounded-2xl">
      <Container className="w-full md:ml-20 md:h-2/4 flex flex-col items-start">
        <Text
          text="Welcome to Capiche."
          className="font-black text-[40px] my-3 md:mt-10 md:mb-5 mx-auto w-full"
          fontFamily={Font.Capuch}
          color={"text-white md:text-left text-center"}
        />
        <Container className="md:ml-0 bg-black rounded rounded-[6px] md:py-[14px] md:px-[24px] p-[8px]">
          <p className="text-white">Start to sell</p>
        </Container>
      </Container>
    </Container>
  );
};

export default Banner;
