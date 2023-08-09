import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  isPost?: boolean;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  text,
  isPost = false,
  onClick,
  disabled = false,
  className = "",
}: Props) => {
  if (isPost) {
    return (
      <div className="flex justify-center items-center my-10 hover:cursor-pointer">
        <div className="bg-illustration-jouets bg-cover bg-center w-[250px] h-[80px] rounded rounded-[10px] shadow-lg flex justify-center items-center shadow-lg">
          <button
            onClick={onClick}
            className={`${className} text-vintoys text-xl font-bold py-4 px-8 rounded-lg text-2xl`}
          >
            {text}
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? "bg-gray-300 cursor-not-allowed" : ""
      } ${className} text-black text-XSmall py-2 px-4 rounded-md font-semibold shadow-md  hover:shadow-lg hover:transform hover:transition`}
    >
      {text}
    </button>
  );
};

export default Button;
