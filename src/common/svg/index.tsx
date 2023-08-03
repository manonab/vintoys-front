import React, { FunctionComponent } from "react";

import Chest from "@assets/icons/chest.svg";
import Contact from "@assets/icons/contact.svg";
import HandShake from "@assets/icons/hand-shake.svg";
import Info from "@assets/icons/info.svg";
import Location from "@assets/icons/location.svg";
import MenuHome from "@assets/icons/menu-home.svg";
import SignUp from "@assets/icons/sign-up-peace.svg";
import User from "@assets/icons/user.svg";
import Users from "@assets/icons/users.svg";
import Cart from "@assets/icons/cart.svg";

interface Props {
  name: string | undefined;
  width?: number | "auto";
  height?: number | "auto";
  fill?: string;
  className?: string;
  url?: string;
}

const pickIcon = (name: any) => {
  switch (name) {
    case "Chest":
      return Chest;
    case "Contact":
      return Contact;
    case "HandShake":
      return HandShake;
    case "Info":
      return Info;
    case "Location":
      return Location;
    case "MenuHome":
      return MenuHome;
    case "Users":
      return Users;
    case "User":
      return User;
    case "SignUp":
      return SignUp;
    case "Cart":
      return Cart;
    default:
      throw new Error("No Svg found!");
  }
};

const SVG: FunctionComponent<Props> = ({ name, width, height, fill, url }: Props) => {
  const Svg = pickIcon(name);
  if (url) {
    return (
      <svg width={width} height={height} stroke={fill} fill={fill}>
        <image xlinkHref={url} width="100%" height="100%" />
      </svg>
    );
  }
  return <Svg width={width} height={height} fill={fill} />;
};

export default SVG;
