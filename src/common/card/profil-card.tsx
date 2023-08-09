import React from "react";
import { Container } from "@common/container";
import { useLogout } from "@hooks/auth/use-logout";
import Button from "@common/button";

interface Props {
  user_name: string | null;
  user_id: number | null;
}

const ProfilCard: React.FC<Props> = ({ user_id, user_name }: Props) => {
  const { handleLogout } = useLogout();

  return (
    <Container className="bg-lavenderDarken w-1/4 rounded rounded-2xl my-10 flex justify-evenly items-center">
      <p className="text-black p-5 font-baumans">Bienvenue {user_name}</p>
      <Button isPost={false} text="Log out" onClick={handleLogout} className="h-1/3 " />
    </Container>
  );
};

export default ProfilCard;
