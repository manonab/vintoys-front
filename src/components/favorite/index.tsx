import React, { useEffect, useState } from "react";
import SVG from "@common/svg";
import { useDeleteFavorite } from "@hooks/favorite/use-delete-favorite";
import { useAddFavorite } from "@hooks/favorite/use-set-favorite";
import { useGetMyFav } from "@hooks/favorite/use-get-favorite";

interface Props {
  adId: number;
  initialIsFavorite?: boolean;
}

const FavoriteButton: React.FC<Props> = ({ adId, initialIsFavorite = false }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);
  const { deleteFavorite } = useDeleteFavorite();
  const { addFavorite } = useAddFavorite();
  const { favoriteAdIds, isLoading } = useGetMyFav();

  useEffect(() => {
    setIsFavorite(favoriteAdIds === adId);
  }, [adId, favoriteAdIds]);

  const handleFavorite = async () => {
    if (!isLoading && adId) {
      setIsFavorite((prevFavorite) => !prevFavorite);
      if (isFavorite) {
        await deleteFavorite(adId); // Assuming deleteFavorite is an async function, use await here
      } else {
        // Call the addFavorite hook and update the state with the response data
        const response = await addFavorite(adId);
        if (response) {
          // Assuming response.data is the updated favorite data
          setIsFavorite(true); // Update the state with the new favorite data
        }
      }
    }
  };

  return (
    <div onClick={handleFavorite}>
      {isFavorite ? (
        <SVG width={18} height={18} name="HeartFilled" />
      ) : (
        <SVG width={18} height={18} name="Heart" />
      )}
    </div>
  );
};

export default FavoriteButton;
