import React, { FunctionComponent } from "react";

import Chest from "@assets/icons/chest.svg";
import Contact from "@assets/icons/contact.svg";
import MenuHome from "@assets/icons/menu-home.svg";
import SignUp from "@assets/icons/sign-up-peace.svg";

import Cart from "@assets/icons/cart.svg";
import Logo from "@assets/icons/logo.svg";
import Edit from "@assets/icons/edit.svg";
import Delete from "@assets/icons/delete.svg";
import Heart from "@assets/icons/heart.svg";
import HeartFilled from "@assets/icons/heartFilled.svg";
import Home from "@assets/icons/home.svg";
import Alien from "@assets/icons/alien.svg";
import Search from "@assets/icons/search.svg";
import Arrow from "@assets/icons/arrow.svg";
import Teddy from "@assets/icons/ours.svg";
import Card from "@assets/icons/cartes.svg";
import GameBoy from "@assets/icons/gameboyy.svg";
import DuckLogo from "@assets/icons/duck-logo.svg";
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
    case "MenuHome":
      return MenuHome;
    case "SignUp":
      return SignUp;
    case "Cart":
      return Cart;
    case "Logo":
      return Logo;
    case "Delete":
      return Delete;
    case "Edit":
      return Edit;
    case "Heart":
      return Heart;
    case "HeartFilled":
      return HeartFilled;
    case "Home":
      return Home;
    case "Alien":
      return Alien;
    case "Teddy":
      return Teddy;
    case "Card":
      return Card;
    case "GameBoy":
      return GameBoy;
    case "Search":
      return Search;
    case "Arrow":
      return Arrow;
    case "DuckLogo":
      return DuckLogo;
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
  return <Svg />;
};

export default SVG;
