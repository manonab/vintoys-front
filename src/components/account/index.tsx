import Button from "@common/button";
import { Container } from "@common/container";
import AccountCard from "@common/card/account-cards";
import { useRouter } from "next/router";
import React from "react";
import ProfilCard from "@common/card/profil-card";

const UserAccount: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <ProfilCard />
      <Button
        isPost={true}
        text="Post your ad"
        onClick={() => router.push("ads/create")}
      />

      <Container className="flex flex-wrap md:flex-row flex-col">
        <AccountCard
          title="Adverts"
          description="Manage my ads"
          onClick={() => router.push("/account/id/advert")}
        />
        <AccountCard
          title="Transactions"
          description="track my purchases and sales"
          onClick={() => router.push("/account/id/transfers")}
        />
        <AccountCard
          title="Parameters"
          description="Modify and complete my personnal datas"
          onClick={() => router.push("/account/id/setting")}
        />
      </Container>
    </Container>
  );
};

export default UserAccount;
