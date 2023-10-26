import React from "react";
import { useLogout } from "@hooks/auth/use-logout";
import Button from "@common/button";

interface Props {
  user_name: string | null;
  user_id: number | null;
}

const ProfilCard: React.FC<Props> = ({ user_id, user_name }: Props) => {
  const { handleLogout } = useLogout();

  return (
    <div className="bg-footerColor w-3/4 md:w-1/4 rounded rounded-2xl my-10 flex justify-evenly items-center">
      <p className="text-white font-inter p-5">Bienvenue {user_name}</p>
      <Button text="Log out" onClick={handleLogout} className="h-1/3 bg-white" />
    </div>
  );
};

export default ProfilCard;
