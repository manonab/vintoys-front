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
      } ${className} text-black p-1 mx-1 w-[180px] md:text-XSmall md:py-2 md:px-4 rounded-lg md:rounded-3xl border border-black shadow-md hover:shadow-lg hover:transform hover:transition`}
    >
      {text}
    </button>
  );
};

export default TopButton;
