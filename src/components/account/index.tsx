import React from "react";
import Button from "@common/button";
import { Container } from "@common/container";
import AccountCard from "@common/card/account-cards";
import { useRouter } from "next/router";
import ProfilCard from "@common/card/profil-card";
import { useAuth } from "@context/auth-context";

const UserAccount: React.FC = () => {
  const router = useRouter();
  const { user_id, user_name } = useAuth();

  return (
    <Container>
      <ProfilCard user_id={user_id} user_name={user_name} />
      <Button
        isPost={true}
        text="Post your ad"
        onClick={() => router.push("ads/create")}
      />
      <Container className="flex flex-wrap md:flex-row w-3/4">
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
          title="My favorite"
          description="All my favorite ads saved here"
          onClick={() => router.push(`/account/${user_id}/favorite`)}
        />
      </Container>
    </Container>
  );
};

export default UserAccount;
