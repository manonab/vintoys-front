import React, { useState } from "react";
import { useRouter } from "next/router";

const CreateNext: React.FC = () => {
  const router = useRouter();
  const { title, images } = router.query;

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const imageList = Array.isArray(images) ? images : [images];
  const baseUrl = `${process.env.API_URL}`

  const categories = ["Vintage", "Toys", "Games"];

  return (
    <div className="p-5">
      <p>Ad Title: {title}</p>
      <p>Images:</p>
      <ul className="flex flex-wrap">
        {imageList.map((imageName, index) => (
          <li key={index} className="m-2">
            <img
              src={baseUrl + imageName}
              alt={`Image ${index}`}
              className="w-24 h-24 object-cover"
            />
          </li>
        ))}
      </ul>

      <p className="mt-4">Select Category:</p>
      <div className="flex flex-wrap mt-2">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`m-2 px-4 py-2 rounded-full border cursor-pointer ${
              selectedCategory === category ? "bg-gray-200" : "bg-transparent"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateNext;
