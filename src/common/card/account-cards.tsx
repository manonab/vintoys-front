import React from "react";
import Text, { Align, Font, Size } from "@common/text";

interface Props {
  title: string;
  description: string;
  onClick: () => void;
}
const AccountCard: React.FC<Props> = ({ title, description, onClick }: Props) => {
  return (
    <div
      className="leading-7 shadow-lg bg-yellowCapiche bg-opacity-75 md:w-[400px] h-[130px] w-full md:my-10 my-5 rounded-md hover:bg-yellowCapich hover:cursor-pointer hover:bg-hover-100"
      onClick={onClick}
    >
      <Text
        text={`${title}`}
        size={Size.Medium}
        fontFamily={Font.Capuch}
        className="mt-6 mx-4 text-black"
        textAlign={Align.Left}
      />
      <Text
        text={`${description}`}
        size={Size.XSMall}
        textAlign={Align.Left}
        className="mx-4 mt-6 text-footerColor"
      />
    </div>
  );
};

export default AccountCard;
