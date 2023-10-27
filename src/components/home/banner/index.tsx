import React from "react";
import Text, { Font } from "@common/text";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="h-[250px] md:h-[430px] w-auto md:w-[1224px] flex items-center mx-auto mt-10 justify-center bg-cover bg-center bg-banner opacity-75 rounded rounded-2xl">
      <div className="w-full md:ml-20 md:h-2/4 flex flex-col items-start">
        <Text
          text="Bienvenue à Capiche."
          className="font-black text-[40px] my-3 md:mt-10 md:mb-5 mx-auto w-full"
          fontFamily={Font.Capuch}
          color={"text-white md:text-left text-center"}
        />
        <div className="cursor-pointer md:ml-0 bg-black rounded rounded-[6px] md:py-[14px] md:px-[24px] p-[8px]">
          <p className="text-white" onClick={() => router.push("/catalog/ads/create")}>
            Commence à vendre
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
