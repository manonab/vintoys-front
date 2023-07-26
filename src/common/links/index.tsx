import React, { FunctionComponent, ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

const Link: FunctionComponent<Props> = ({ children, href, onClick }: Props) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    router.push(href, href);
  };

  return (
    <>
      <a onClick={handleClick} href={href}>
        {children}
      </a>
    </>
  );
};

export default Link;
