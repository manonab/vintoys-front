import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const TopButton: FunctionComponent<Props> = ({
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
      } ${className} text-black text-XSmall py-2 px-4 rounded-3xl border border-black shadow-md  hover:shadow-lg hover:transform hover:transition`}
    >
      {text}
    </button>
  );
};

export default TopButton;
