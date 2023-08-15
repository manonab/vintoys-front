import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  text,
  onClick,
  disabled = false,
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? "bg-categoryCard cursor-not-allowed" : ""
      } ${className} text-black text-XSmall py-2 px-4 rounded-md font-semibold shadow-md  hover:shadow-lg hover:transform hover:transition`}
    >
      {text}
    </button>
  );
};

export default Button;
