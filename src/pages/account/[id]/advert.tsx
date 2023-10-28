import SVG from "@common/svg";
import { useGetMyAds } from "@hooks/ads/get/use-get-my-ads";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MyAds: React.FC = () => {
  const { adsData, isLoading, isError } = useGetMyAds();

  useEffect(() => {}, [adsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching ads.</div>;
  }

  return (
    <div className="flex w-full flex-wrap md:flex-row flex-col justify-around md:my-20 my-16 items-center">
      {adsData?.map((ad, index) => (
        <div key={index} className="md:block items-end justify-evenly flex-col w-3/4 bg-yellowCapiche text-white p-4 rounded-xl shadow-2xl my-5">
          <img
            src={ad.thumbnail_url}
            className="rounded rounded-2xl mb-5 w-2/4 mx-auto w-full md:w-auto self-center"
          />
          <span className="flex items-center justify-evenly w-full">
            <p className="text-Medium text-left md:pb-2 font-semibold text-white font-Capuch mr-5">{ad.title}</p>
            <p className="font-bold text-white">{ad.price}€</p>
          </span>
          <p className="ml-8 italic">{ad?.time_ago}</p>
          {/* <div className="flex justify-end items-center pt-5">
            <span
              onClick={() => router.push(`/ads/${ad.id}/edit`)}
              className="hover:cursor-pointer"
            >
              <SVG name={"Edit"} width={25} height={23} fill={"#FFF"} />
            </span>
            <span
              onClick={() => router.push(`/ads/${ad.id}/delete`)}
              className="hover:cursor-pointer"
            >
              <SVG name={"Delete"} width={30} height={30} fill={"#FFF"} />
            </span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default MyAds;
