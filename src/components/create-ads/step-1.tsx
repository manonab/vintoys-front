import React from "react";
import SubCategorySelector from "@components/create-ads/handle-subCategory";
import CategorySelector from "@components/create-ads/handle-category";

interface StepProps {
  selectedCategory: number | undefined;
  selectedSubCategory: number | undefined;
  setSelectedCategory: (categoryId: number | undefined) => void;
  setSelectedSubCategory: (subCategoryId: number | undefined) => void;
  setCurrentStep: (step: number) => void;
  methods: any;
}

const Step1: React.FC<StepProps> = ({
  selectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  setSelectedCategory,
  setCurrentStep,
  methods,
}: StepProps) => {
  const handleCategoryChange = (categoryId: number | undefined) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(undefined);
    methods.setValue("category", categoryId);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <h3 className="font-Capuch mt-3">Titre</h3>
      <input
        {...methods.register("title")}
        className="my-3 font-inter p-1 md:w-3/4 w-full"
        placeholder="Titre"
        required
      />
      <h3 className="font-Capuch mt-3 mb-1">Description</h3>
      <input
        {...methods.register("description")}
        className="mt-3 font-inter p-1 md:w-3/4 w-full"
        placeholder="Description"
        required
      />
      <CategorySelector
        setSelectedCategory={handleCategoryChange}
        setSelectedSubCategory={setSelectedSubCategory}
        selectedCategory={selectedCategory}
      />

      <SubCategorySelector
        methods={methods}
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
      />
      <button
        type="button"
        className="mx-auto bg-yellowCapiche my-10 w-1/2 md:mx-[55px] p-2 rounded-lg text-white"
        onClick={() => setCurrentStep(2)}
      >
        Suivant
      </button>
    </div>
  );
};

export default Step1;
