import React from "react";

interface CategoryProps {
  label: string;
  href: string;
  image: string;
  flexDirection: string;
  fontColor: string;
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
  boxShadow,
  imgStyle,
  isDouble,
  titleStyle,
}) => {
  return (
    <div
      style={{ boxShadow: boxShadow }}
      className={`overflow-hidden w-full h-[150px] md:w-[373px] h-[208px] mx-5  rounded rounded-[10px] flex ${flexDirection} items-center justify-end my-2 md:my-10 bg-yellowCapiche`}
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
