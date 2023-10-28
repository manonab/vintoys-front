import { useGetMyAds } from "@hooks/ads/get/use-get-my-ads";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useRouter } from "next/router";
import { useDeleteAds } from "@hooks/ads/delete/use-delete-ads";

const MyAds: React.FC = () => {
  const { adsData } = useGetMyAds();
  const { deleteAd } = useDeleteAds();
  const router = useRouter()
  return (
    <div className="flex w-full flex-wrap md:flex-row flex-col justify-around md:my-20 my-16 items-center">
      {adsData?.map((ad, index) => (
        <div key={index} className="md:block items-end justify-evenly flex-col w-3/4 bg-yellowCapiche bg-opacity-70 text-white p-4 rounded-sm shadow-2xl my-5">
          <div className="flex justify-between items-center mb-2">
            <span onClick={() => router.push(`/ads/${ad.id}/edit`)} className="hover:cursor-pointer">
              <EditIcon sx={{ color: "#403F38" }} />
            </span>
            <span className="hover:cursor-pointer">
              <RemoveCircleOutlineIcon sx={{ color: "#403F38" }} onClick={() => deleteAd(ad?.id)} />
            </span>
          </div>
          <img src={ad.thumbnail_url} className="rounded rounded-2xl mb-5 w-2/4 mx-auto w-full md:w-auto self-center" />
          <span className="flex items-center justify-between w-full">
            <p className="text-Medium text-left md:pb-2 font-semibold text-white font-Capuch mr-5">{ad.title}</p>
            <p className="font-bold text-white">{ad.price}€</p>
          </span>
          <p className="italic">{ad?.time_ago}</p>
        </div>
      ))}
    </div>
  );
};

export default MyAds;
