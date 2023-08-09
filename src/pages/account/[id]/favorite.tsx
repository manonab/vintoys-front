import React, { useEffect } from "react";
import { useGetMyFav } from "@hooks/favorite/use-get-favorite";
import SVG from "@common/svg";
import { useAuth } from "@context/auth-context";

const MyFavorite: React.FC = () => {
  const { favData, isLoading, isError } = useGetMyFav();
  const { user_token } = useAuth();
  useEffect(() => {
    console.log(user_token);
  }, [favData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching ads.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-XLarge my-10 font-Capuch">My Favorites</h2>
      <div className="flex flex-wrap flex-row justify-around w-full mb-20 items-center">
        <div className="bg-lavenderDarken w-1/4 rounded text-black p-4 rounded-2xl shadow-xl">
          <img src={favData?.thumbnail_url} className="rounded rounded-2xl mb-5" />
          <p className="text-Small text-center pb-2 font-semibold">{favData?.title}</p>
          <p>{favData?.category}</p>
          <p className="font-bold">{favData?.price}€</p>
          <p>{favData?.state}</p>
          <div className="flex justify-end items-center pt-5">
            <SVG width={25} height={25} name="HeartFilled" fill="#FF3366" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
