import React from "react";
import Text, { Align, Font } from "@common/text";
import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-0 h-[300px] md:h-[430px] w-full md:w-[1224px] flex items-center mx-auto mt-10 justify-center bg-cover bg-center bg-banner opacity-75 rounded rounded-2xl">
      <div className="relative w-full ml-20 h-2/4 flex flex-col items-start">
        <Text
          text="Welcome to Capiche."
          className="font-black relative text-[40px] mt-10 mb-5"
          fontFamily={Font.Capuch}
          color={"text-white"}
          textAlign={Align.Left}
        />
        <div className="bg-black rounded rounded-[6px] py-[14px] px-[24px]">
          <p className="text-white">Start to sell</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
