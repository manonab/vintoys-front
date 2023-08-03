import { Container } from "@common/container";
import Text, { Align, Size } from "@common/text";
import React from "react";

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}
const AccountCard: React.FC<Props> = ({ title, description, onClick }: Props) => {
  return (
    <Container
      className="shadow-lg md:w-[350px] h-[130px] w-full md:my-10 my-5 rounded-2xl hover:bg-gray-50 hover:cursor-pointer"
      onClick={onClick}
    >
      <Text
        text={`${title}`}
        size={Size.Small}
        className="mt-10 my-5 mx-4"
        textAlign={Align.Left}
      />
      <Text
        text={`${description}`}
        size={Size.XSMall}
        textAlign={Align.Left}
        className="mx-4"
      />
    </Container>
  );
};

export default AccountCard;
