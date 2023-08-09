import CategoryCard from "@common/card/category-card";
import { Container } from "@common/container";
import Title from "@common/title";
import React from "react";

const categories = [
  {
    href: "/children",
    label: "Children",
    image: "./static/assets/ours.png",
    flexDirection: "md:flex-row",
    fontColor: "text-white",
    backgroundColor:
      "linear-gradient(203deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #DF61FF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "w-full max-h-screen md:top-6 md:right-8",
    isDouble: false,
    titleStyle: "w-full relative right-10 top-5 text-[38px]",
  },
  {
    href: "/adult",
    label: "Adult",
    image: "./static/assets/cartes.png",
    flexDirection: "md:flex-row-reverse",
    fontColor: "text-white",
    backgroundColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #00C9B0;",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "w-full max-h-screen top-[65px]",
    isDouble: false,
    titleStyle: "w-full relative left-6 top-5",
  },
  {
    href: "/vintage",
    label: "Vintage",
    image: "./static/assets/gameboy.png",
    flexDirection: "flex-row",
    fontColor: "text-vintageText",
    backgroundColor:
      "linear-gradient(180deg, rgba(42, 46, 24, 0.20) 0%, rgba(133, 133, 133, 0.00) 100%), #EAF683      ",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "w-full max-h-screen right-5 my-3 top-5",
    isDouble: true,
    titleStyle: "relative right-10 top-5",
  },
];

const Categories: React.FC = () => {
  return (
    <Container>
      <Title
        text="Recherche par categorie"
        className="my-10 mx-[200px] text-left font-nineties"
        level={4}
      />
      <div className="hover:cursor-pointer hover:transform flex md:flex-row flex-col justify-center mx-auto items-center w-auto">
        {categories.map((category) => (
          <CategoryCard
            isDouble={category.isDouble}
            imgStyle={category.imgStyle}
            flexDirection={category.flexDirection}
            key={category.href}
            label={category.label}
            href={category.href}
            image={category.image}
            fontColor={category.fontColor}
            backgroundColor={category.backgroundColor}
            boxShadow={category.boxShadow}
            titleStyle={category.titleStyle}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
