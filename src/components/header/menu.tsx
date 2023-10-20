import React, { useState } from "react";
import SVG from "@common/svg";
import { childrenGames } from "../../../public/static/data/category/children-category";
import { VintageCategory } from "public/static/data/category/vintage-category";
import { AdultCategoy } from "public/static/data/category/adult-category";

interface SidebarMenuProps {
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="z-20 fixed top-0 left-0 min-h-screen w-3/4 md:w-1/4 bg-mainColor shadow-lg">
      <div className="p-4 cursor-pointer w-full">
        <div>
          <span
            className="flex flex-row items-center justify-end"
            onClick={() => toggleCategory("Children")}
          >
            <p className="font-nineties mx-2">Children</p>
            <SVG
              width={20}
              height={20}
              name="Arrow"
              className={`${
                selectedCategory === "Children" && "relative transform rotate-90"
              }`}
            />
          </span>
          {selectedCategory === "Children" && (
            <ul>
              {childrenGames.map((children) => (
                <ul key={children.id}>
                  <li className="text-[12px] text-left my-2 hover:underline">
                    {children.age}
                  </li>
                </ul>
              ))}
            </ul>
          )}
        </div>
        <div>
          <span
            onClick={() => toggleCategory("Adult")}
            className="flex flex-row items-center justify-end mt-10"
          >
            <p className="text-left font-nineties mx-2">Adult</p>
            <SVG
              width={20}
              height={20}
              name="Arrow"
              className={`${
                selectedCategory === "Adult" && "relative transform rotate-90"
              }`}
            />
          </span>
          {selectedCategory === "Adult" && (
            <ul>
              {AdultCategoy.map((category) => (
                <ul key={category.id}>
                  <li className="text-[12px] text-left my-2 hover:underline">
                    {category.category}
                  </li>
                </ul>
              ))}
            </ul>
          )}
        </div>
        <div>
          <span
            onClick={() => toggleCategory("Vintage")}
            className="flex flex-row items-center justify-end mt-10 hover:cursor-pointer"
          >
            <p
              className={`text-right mx-3 font-nineties  ${
                selectedCategory === "Vintage" ? "font-bold" : ""
              }`}
            >
              Vintage
            </p>
            <span
              className={`${selectedCategory === "Vintage" && "transform rotate-180"}`}
            >
              <SVG width={20} height={20} name="Arrow" />
            </span>
          </span>
          {selectedCategory === "Vintage" && (
            <ul>
              {VintageCategory.map((category) => (
                <ul key={category.id}>
                  <li className="text-[12px] text-left my-2 hover:underline hover:cursor-pointer ">
                    {category.category}
                  </li>
                </ul>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
