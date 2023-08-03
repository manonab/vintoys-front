import React, { FunctionComponent, useState } from "react";
import { Container } from "@common/container";
import Link from "@common/links";
import { menuLinks } from "./links";
import SVG from "@common/svg";
import Text, { Font, Size } from "@common/text";

interface Props {
  menu: menuLinks[];
}

const MobileMenu: FunctionComponent<Props> = ({ menu }: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-end px-4 py-2">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <SVG name={"MenuHome"} width={24} height={24} />
        </button>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "slide-in" : "hidden"
        } md:hidden fixed inset-y-0 left-0 z-10 w-64 bg-magenta transition transition-transform ease-in-out duration-300 transform`}
      >
        <div className="py-4 px-4">
          {menu.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label ? (
                <Text
                  fontFamily={Font.Baumans}
                  size={Size.XSMall}
                  className="mx-5 text-xl font-baumans leading-4 hover:underline text-white"
                  text={`${link.label}`}
                />
              ) : (
                <div className="mx-2">
                  <SVG name={link.icon} width={30} height={30} />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

const Header: FunctionComponent<Props> = ({ menu }: Props) => {
  return (
    <header className="bg-magenta py-8 w-full md:flex md:justify-end">
      <Container className="flex justify-between items-center">
        <MobileMenu menu={menu} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center justify-end">
          {menu.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label ? (
                <Text
                  fontFamily={Font.Baumans}
                  size={Size.XSMall}
                  className="mx-5 text-xl font-baumans leading-4 hover:underline text-white"
                  text={`${link.label}`}
                />
              ) : (
                <div className="mx-2">
                  <SVG name={link.icon} width={30} height={30} />
                </div>
              )}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
