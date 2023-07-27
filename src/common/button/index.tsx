import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  isPost?: boolean;
  onClick: () => void;
}
const Button: FunctionComponent<Props> = ({ text, isPost, onClick }: Props) => {
  if (isPost)
    return (
      <div className="flex justify-center items-center my-10 hover:cursor-pointer">
        <div className="bg-illustration-jouets bg-cover bg-center w-[250px] h-[130px] rounded rounded-1xl shadow-lg flex justify-center items-center shadow-lg">
          <button
            onClick={onClick}
            className="text-vintoys text-xl font-bold py-4 px-8 rounded-lg font-montserratSemiBold text-2xl"
          >
            {text}
          </button>
        </div>
      </div>
    );
  if (!isPost)
    return (
      <button
        onClick={onClick}
        className="bg-lavender text-vintoys text-sm py-2 px-4 rounded-md font-semibold shadow-md font-montserratLight hover:shadow-lg hover:transform hover:transition hover:bg-lavenderDarken"
      >
        View Details
      </button>
    );
  return <div />;
};

export default Button;
