import React from "react";
import { categories } from "public/static/data/category";

interface HandleCategoryProps {
  selectedCategory: number | undefined;
  setSelectedSubCategory: (subCategoryId: number | undefined) => void;
  setSelectedCategory: (categoryId: number | undefined) => void;
}

const HandleCategory: React.FC<HandleCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory,
}: HandleCategoryProps) => {
  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(undefined);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <h3 className="font-Capuch my-3 mt-5">Category</h3>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(Number(e.target.value))}
        className="md:w-3/4 p-2 w-full"
      >
        <option>Select Category</option>
        {categories.map((option: any) => (
          <option key={option.id} value={option.id} className="w-full">
            {option.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HandleCategory;
