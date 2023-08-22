import React, { useState, useEffect } from "react";
import { Container } from "@common/container";
import { age as AgeRange, subCategories } from "public/static/data/category";

interface SubCategorySelectorProps {
  selectedCategory: number | undefined;
  selectedSubCategory: number | undefined;
  methods: any;
}

const HandleSubCategory: React.FC<SubCategorySelectorProps> = ({
  selectedCategory,
  selectedSubCategory,
  methods,
}: SubCategorySelectorProps) => {
  const [age, setAge] = useState<number | undefined>();
  const [filteredSubCategories, setFilteredSubCategories] = useState(subCategories);

  useEffect(() => {
    if (selectedCategory !== undefined && age !== undefined) {
      methods.register("category", {
        required: true,
        valueAsNumber: true,
      });
      const filteredCategories = subCategories.filter(
        (subCategory) =>
          subCategory.age === age && subCategory.parentCategory === selectedCategory,
      );
      setFilteredSubCategories(filteredCategories);
    }
  }, [selectedCategory, age]);

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = parseInt(event.target.value);
    setAge(selectedAge);
    methods.register("age_range", {
      required: true,
      valueAsNumber: true,
    });
  };

  return (
    <Container className="flex flex-col w-full h-full">
      {selectedCategory === 1 && (
        <>
          <h3 className="font-Capuch my-3">Age Range</h3>
          <select value={age} onChange={handleAgeChange} className="md:w-3/4 p-2 w-full">
            <option>Select Age Range</option>
            {AgeRange.map((ageItem) => (
              <option key={ageItem.id} value={ageItem.id}>
                {ageItem.age}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedCategory === 1 && filteredSubCategories.length > 0 && (
        <>
          <h3 className="font-Capuch mt-4 mb-3">Sub Category</h3>
          <select
            value={selectedSubCategory}
            className="md:w-3/4 p-2 w-full"
            {...methods.register("sub_category", {
              required: true,
              valueAsNumber: true,
            })}
          >
            <option value="">Select Sub Category</option>
            {filteredSubCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.category}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedCategory !== 1 && (
        <>
          <h3 className="font-Capuch mt-4 mb-3">Sub Category</h3>
          <select
            value={selectedSubCategory}
            className="md:w-3/4 p-2 w-full"
            {...methods.register("sub_category", {
              required: true,
              valueAsNumber: true,
            })}
          >
            <option>Select Sub Category</option>
            {subCategories
              .filter((subCategory) => subCategory.parentCategory === selectedCategory)
              .map((subCategory) => (
                <option key={subCategory.id} value={subCategory.id}>
                  {subCategory.category}
                </option>
              ))}
          </select>
          <input
            value={6}
            className="hidden"
            {...methods.register("age_range", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </>
      )}
    </Container>
  );
};

export default HandleSubCategory;
