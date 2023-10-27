import React from "react";
import { useLogout } from "@hooks/auth/use-logout";
import Button from "@common/button";
import { useRouter } from "next/router";

interface Props {
  user_name: string | null;
}

const ProfilCard: React.FC<Props> = ({ user_name }: Props) => {
  const { handleLogout } = useLogout();
  const router = useRouter();

  return (
    <div className="mx-auto w-full md:w-1/4 rounded rounded-sm my-10 text-center">
      <p className="text-black font-Capuch text-xl">Bienvenue {user_name}</p>
      <div className="mt-3">
        <button onClick={() => router.push("/catalog/ads/create")} className="mr-5 bg-yellowCapiche text-white px-4 py-2 rounded font-inter hover:cursor-pointer">
          Commence à vendre!
        </button>
        <Button text="Déconnexion" onClick={handleLogout} className="h-1/3 bg-black text-white" />
      </div>
    </div>
  );
};

export default ProfilCard;
