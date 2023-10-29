import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@context/auth-context";

import AccountCard from "@common/card/account-cards";
import ProfilCard from "@common/card/profil-card";

const UserAccount: React.FC = () => {
  const router = useRouter();
  const { user_id, user_name, user_token, isAuthenticated } = useAuth();
  console.log(user_token, isAuthenticated)
  return (
    <div className="mx-auto">
      <ProfilCard user_name={user_name} />
      <div className="mx-auto flex flex-wrap md:flex-row w-3/4">
        <AccountCard
          title="Adverts"
          description="Manage my ads"
          onClick={() => router.push(`/account/${user_id}/advert`)}
        />
        <AccountCard
          title="Transactions"
          description="track my purchases and sales"
          onClick={() => router.push(`/account/${user_id}/transfers`)}
        />
        <AccountCard
          title="Parameters"
          description="Modify and complete my personnal datas"
          onClick={() => router.push(`/account/${user_id}/setting`)}
        />
        <AccountCard
          title="My favorites"
          description="All my favorite ads saved here"
          onClick={() => router.push(`/account/${user_id}/favorite`)}
        />
      </div>
    </div>
  );
};

export default UserAccount;
