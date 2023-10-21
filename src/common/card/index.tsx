import React from "react";
import { Ads } from "@models/ad";
import Text, { Align, Font, LineHeight, Weight } from "@common/text";
import { useRouter } from "next/router";
// import FavoriteButton from "@components/favorite";

type Ad = Ads;

const AdsCards: React.FC<Ad> = ({
  title,
  state,
  price,
  id,
  thumbnail_url,
  username,
}: Ad) => {
  const router = useRouter();

  const handleViewDetails = () => {
    if (id !== undefined) {
      router.push(`/catalog/ads/${id}`);
    }
  };

  return (
    <div className="flex flex-wrap flex-col my-2 mx-4 rounded rounded-[2px] w-[240px] h-[343px] bg-yellowCapiche bg-opacity-25">
      <div
        onClick={handleViewDetails}
        className="hover:cursor-pointer flex flex-wrap flex-col my-2 mx-4 rounded rounded-[2px] w-[240px] h-[328px] bg-[#F5F5F5] right-7 bottom-2 relative"
      >
        {/* <div className="flex flex-row justify-end items-center my-4 mx-2">
          <FavoriteButton adId={id} />
        </div> */}

        <img
          src={thumbnail_url}
          alt="Ad Image"
          className="w-[90%] h-32 object-cover m-4 mx-auto"
        />
        <div className="flex flex-col items-start m-3">
          <Text
            text={`${title}`}
            textAlign={Align.Left}
            fontWeight={Weight.Bold}
            fontFamily={Font.Capuch}
            lineHeight={LineHeight.Inter}
            className="text-[15px] capitalize"
          />
          <Text
            text={`@${username}`}
            textAlign={Align.Left}
            fontWeight={Weight.Light}
            lineHeight={LineHeight.Inter}
            className="text-[8px]"
          />
          <Text
            text={`${price}€`}
            textAlign={Align.Left}
            fontWeight={Weight.Light}
            lineHeight={LineHeight.Inter}
            className="text-[18px] mt-5"
          />
          <Text
            text={`${state}`}
            textAlign={Align.Left}
            fontWeight={Weight.Light}
            lineHeight={LineHeight.Inter}
            className="text-[8px] uppercase mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AdsCards;
