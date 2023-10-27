import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@context/auth-context";

import AccountCard from "@common/card/account-cards";
import ProfilCard from "@common/card/profil-card";

const UserAccount: React.FC = () => {
  const router = useRouter();
  const { user_id, user_name } = useAuth();

  return (
    <div className="mx-auto">
      <ProfilCard user_name={user_name} />
      <div className="mx-auto flex flex-wrap md:flex-row w-3/4">
        <AccountCard
          title="Annonces"
          description="Gérer mes annonces"
          onClick={() => router.push(`/account/${user_id}/advert`)}
        />
        <AccountCard
          title="Transactions"
          description="Suivre mes ventes et mes achats"
          onClick={() => router.push(`/account/${user_id}/transfers`)}
        />
        <AccountCard
          title="Paramètres"
          description="Modifier ou compléter mes données personnelles"
          onClick={() => router.push(`/account/${user_id}/setting`)}
        />
        <AccountCard
          title="Mes favorites"
          description="Toutes mes annonces favorites enregistrées ici"
          onClick={() => router.push(`/account/${user_id}/favorite`)}
        />
      </div>
    </div>
  );
};

export default UserAccount;
