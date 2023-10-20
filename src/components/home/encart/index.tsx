import React from "react";
import { useTranslation } from "next-i18next";

const Encart = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-hidden text-white md:h-[460px] md:w-[1224px] w-full h-[200px] relative border border-black rounded rounded-1xl my-10">
        <div className="flex justify-between -mx-2">
          <div className="w-1/4 relative mx-2">
            <div className="bg-pubColor h-full transform -skew-x-12 h-full relative">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                width="270px"
                alt="Image 1"
                className="transform skew-x-12 bottom-5 w-[260px] relative right-8 opacity-90"
              />
            </div>
          </div>
          <div className="w-1/4 relative mx-2">
            <div className="bg-pubColor transform -skew-x-12 p-10 h-full relative">
              <img
                src={
                  "https://gmedia.playstation.com/is/image/SIEPDC/dualshock-controller-product-thumbnail-01-en-14sep21?$facebook$"
                }
                width={"450px"}
                alt="Image 2"
                className="transform -rotate-12 skew-x-12 relative top-20 opacity-60"
              />
            </div>
          </div>
          <div className="w-[calc(33.3333% - 1rem)] relative mx-2">
            <div className="bg-pubColor transform -skew-x-12 p-10 h-[550px] relative">
              <img
                src={"https://intrld.com/wp-content/uploads/2020/10/van.jpg"}
                width="270px"
                alt="Image 3"
                className="transform skew-x-12 relative top-[150px] left-[50px]"
              />
            </div>
          </div>
        </div>
        <p className="text-[40px] text-black font-Capuch text-center relative md:bottom-[380px]">
          {t("Lorem ipsum dolor sit amet consectetur.")}
        </p>
        <button className=" bg-yellowCapiche text-black px-4 py-2 rounded relative md:bottom-[350px] ml-[550px] font-inter hover:cursor-pointer">
          Start to Sell
        </button>
      </div>
    </div>
  );
};

export default Encart;
