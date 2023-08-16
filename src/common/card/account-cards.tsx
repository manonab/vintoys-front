import React from "react";
import { Container } from "@common/container";
import Text, { Align, Size } from "@common/text";

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}
const AccountCard: React.FC<Props> = ({ title, description, onClick }: Props) => {
  return (
    <Container
      className="font-inter shadow-lg bg-yellowCapiche bg-opacity-75 md:w-[400px] h-[130px] w-full md:my-10 my-5 rounded-2xl hover:bg-yellowCapich hover:cursor-pointer hover:bg-hover-100 text-white"
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
