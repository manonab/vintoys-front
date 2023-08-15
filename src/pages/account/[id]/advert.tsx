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
    <div className="flex flex-wrap justify-around w-full my-20 items-center">
      {adsData?.map((ad) => (
        <div className="bg-lavenderDarken w-1/4 rounded text-black p-4 rounded-2xl shadow-xl">
          <img src={ad.thumbnail_url} className="rounded rounded-2xl mb-5" />
          <p className="text-Small text-center pb-2 font-semibold">{ad.title}</p>
          <p>{ad.category}</p>
          <p>{ad.created_at}</p>
          <p className="font-bold">{ad.price}€</p>
          <p>{ad.state}</p>
          <div className="flex justify-end items-center pt-5">
            <span
              onClick={() => router.push(`/ads/${ad.id}/edit`)}
              className="hover:cursor-pointer"
            >
              <SVG name={"Edit"} width={25} height={23} fill={"#000"} />
            </span>
            <span
              onClick={() => router.push(`/ads/${ad.id}/delete`)}
              className="hover:cursor-pointer"
            >
              <SVG name={"Delete"} width={30} height={30} fill={"#000"} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAds;
