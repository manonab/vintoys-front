import CategoryCard from "@common/card/category-card";
import { Container } from "@common/container";
import Title from "@common/title";
import React from "react";

const categories = [
  {
    href: "/catalog/kids",
    label: "Children",
    image: "./static/assets/ours.png",
    flexDirection: "flex-row",
    fontColor: "text-white",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "md:w-full md:max-h-screen top-6 right-8",
    isDouble: false,
    titleStyle: "w-full relative right-10 md:top-5 md:text-[38px]",
  },
  {
    href: "/catalog/adult",
    label: "Adult",
    image: "./static/assets/cartes.png",
    flexDirection: "flex-row-reverse",
    fontColor: "text-white",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "md:w-full md:max-h-screen top-[65px]",
    isDouble: false,
    titleStyle: "w-full relative md:left-6 md:top-5 left-10",
  },
  {
    href: "/catalog/vintage",
    label: "Vintage",
    image: "./static/assets/gameboy.png",
    flexDirection: "flex-row",
    fontColor: "text-vintageText",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    imgStyle: "w-full md:max-h-screen right-5 my-3 top-5",
    isDouble: true,
    titleStyle: "relative right-10 md:top-5",
  },
];

const Categories: React.FC = () => {
  return (
    <Container>
      <Title
        text="Recherche par categorie"
        className="md:my-10 my-5 mx-20 text-left font-inter text-text"
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
            boxShadow={category.boxShadow}
            titleStyle={category.titleStyle}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
