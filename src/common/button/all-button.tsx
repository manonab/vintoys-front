import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const AllButton: FunctionComponent<Props> = ({
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
      } ${className}  bg-yellowCapiche text-black text-XSmall py-2 px-4 rounded-md  shadow-md  hover:shadow-lg hover:transform hover:transition`}
    >
      <p className="mx-auto">{text}</p>
    </button>
  );
};

export default AllButton;
