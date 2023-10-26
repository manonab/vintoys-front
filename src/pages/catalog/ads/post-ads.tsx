import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { usePostAds } from "@hooks/ads/post/use-create-ads";

import Step1 from "@components/create-ads/step-1";
import Step2 from "@components/create-ads/step-2";
import Step3 from "@components/create-ads/step-3";
export interface FormDataAds {
  title: string;
  category: number;
  description: string;
  location: string;
  price: number;
  sub_category: number;
  brand: string;
  state: number;
  images: File[];
  status: number;
  age_range: number;
}

const CreateAdForm: React.FC = () => {
  const methods = useForm<FormDataAds>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const { postAd } = usePostAds();
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [selectedState, setSelectedState] = useState<number>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<number>();

  const onSubmit: SubmitHandler<FormDataAds> = async (data) => {
    if (currentStep === 3) {
      try {
        await postAd(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedCategory={setSelectedCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            setCurrentStep={setCurrentStep}
            methods={methods}
          />
        );
      case 2:
        return (
          <Step2
            methods={methods}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <Step3
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
            setCurrentStep={setCurrentStep}
            methods={methods}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
        {renderStep()}
      </form>
    </FormProvider>
  );
};

export default CreateAdForm;
