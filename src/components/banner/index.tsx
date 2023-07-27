import React from "react";
import Text, { Align, Size } from "@common/text";
import Title from "@common/title";

const Banner = () => {
  return (
    <div className="h-[450px] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div>
        <Title
          level={2}
          text={"Welcome to Vintoys"}
          className="mb-[10px] text-[36px] text-white"
        />
        <Text
          text={"Discover vintage toys and games"}
          className={"text-[18px] text-white"}
          size={Size.XSMall}
          textAlign={Align.Center}
        />
      </div>
    </div>
  );
};

export default Banner;
