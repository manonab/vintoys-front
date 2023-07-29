import React, { FunctionComponent } from "react";
import { Container } from "@common/container";
import Link from "@common/links";
import { menuLinks } from "./links";

interface Props {
  menu: menuLinks[];
}
const Header: FunctionComponent<Props> = ({ menu }: Props) => {
  return (
    <Container className="bg-lavender flex justify-end py-8 w-full">
      {menu.map((link) => (
        <Link key={link.href} href={link.href}>
          <p className="mx-5 capitalize text-xl font-montserratLight leading-4 hover:underline">
            {link.label}
          </p>
        </Link>
      ))}
    </Container>
  );
};

export default Header;
