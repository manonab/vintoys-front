import SVG from "@common/svg";
import React from "react";

interface CategoryProps {
  label: string;
  href: string;
  image: string;
  flexDirection: string;
  fontColor: string;
  backgroundColor: string;
  boxShadow: string;
  imgStyle: string;
  isDouble: boolean;
  titleStyle: string;
}

const CategoryCard: React.FC<CategoryProps> = ({
  label,
  href,
  image,
  flexDirection,
  fontColor,
  backgroundColor,
  boxShadow,
  imgStyle,
  isDouble,
  titleStyle,
}) => {
  return (
    <div
      style={{ background: backgroundColor, boxShadow: boxShadow }}
      className={`overflow-hidden w-[373px] h-[208px] mx-5  rounded rounded-[10px] flex ${flexDirection} items-center justify-end md:my-0 my-10`}
    >
      {!isDouble && <img src={image} className={` object-cover relative ${imgStyle}`} />}
      {isDouble && (
        <div className="flex flex-col">
          <img src={image} className={` object-cover relative ${imgStyle}`} />
          <img src={image} className={` object-cover relative ${imgStyle}`} />
        </div>
      )}
      <a
        href={href}
        className={`text-white font-Capuch font-black text-XL ${fontColor} ${titleStyle}`}
      >
        {label}
      </a>
    </div>
  );
};

export default CategoryCard;
