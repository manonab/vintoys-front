import SVG from "@common/svg";
import { useGetMyAds } from "@hooks/ads/get/use-get-my-ads";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MyAds: React.FC = () => {
  const { adsData, isLoading, isError } = useGetMyAds();
  const router = useRouter();

  useEffect(() => {}, [adsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching ads.</div>;
  }

  return (
    <div className="flex w-full flex-wrap md:flex-row flex-col justify-around md:my-20 my-16 items-center">
      {adsData?.map((ad) => (
        <div className="md:block items-end  justify-evenly flex w-full bg-yellowCapiche rounded text-white p-4 rounded-2xl shadow-xl my-5">
          <img
            src={ad.thumbnail_url}
            className="rounded rounded-2xl mb-5 w-2/4 md:w-auto"
          />
          <p className="text-Small text-center md:pb-2 font-semibold">{ad.title}</p>
          <p className="font-bold">{ad.price}€</p>
          <div className="flex justify-end items-center pt-5">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAds;
