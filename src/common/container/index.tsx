import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  debug?: boolean;
}

export const Container: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} min-[575px]:max-w-tablet min-[767px]:max-w-largeTablet min-[1200px]:max-w-desktop mx-auto my-0 relative box-border`}
    >
      {children}
    </div>
  );
};
