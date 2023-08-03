import React, { FunctionComponent, ReactElement } from "react";

export enum Size {
  ExtraLarge = "text-ExtraLarge",
  Large = "text-Large",
  MediumLarge = "text-MediumLarge",
  Big = "text-Big",
  Medium = "text-Medium",
  Small = "text-Small",
  XSMall = "text-XSMall",
}

export enum Weight {
  Light = "font-light",
  Normal = "font-normal",
  Bold = "font-bold",
  ExtraBold = "font-extrabold",
}

export enum Font {
  MontSerratBold = "font-montserratSemiBold",
  MontSerratRegular = "font-montserratRegular",
  Baumans = "font-baumans",
}

interface Props {
  text: string;
  size: Size;
  italic?: boolean;
  textAlign?: Align;
  color?: string;
  fontWeight?: Weight;
  fontFamily?: Font;
  lineHeight?: LineHeight;
  inline?: boolean;
  className?: string;
  onClick?: () => void;
  children?: ReactElement;
}

export enum Align {
  Left = "text-left",
  Center = "text-center",
  Right = "text-right",
}

export enum LineHeight {
  Normal = "leading-none",
  Inter = "leading-tight",
  Medium = "leading-normal",
}
const Text: FunctionComponent<Props> = ({
  text,
  size,
  italic,
  textAlign = Align.Left,
  color = "text-vinToys",
  fontWeight = Weight.Normal,
  fontFamily = Font.Baumans,
  lineHeight = LineHeight.Normal,
  inline = false,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <p
      className={`${className} relative ${color} ${lineHeight} ${size} ${textAlign} ${
        italic && "italic"
      } ${size === Size.Big && "font-light"} ${fontFamily} ${fontWeight} z-[1] ${
        inline && "inline"
      }`}
      onClick={onClick}
    >
      {text}
      {children}
    </p>
  );
};

export default Text;
