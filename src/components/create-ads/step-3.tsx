import React from "react";
import HandleImages from "@components/create-ads/handle-images";

interface StepProps {
  setCurrentStep: (step: number) => void;
  methods: any;
  previewImages: string[];
  setPreviewImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const Step3: React.FC<StepProps> = ({
  setCurrentStep,
  methods,
  setPreviewImages,
  previewImages,
}: StepProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full">
        <HandleImages
          methods={methods}
          setPreviewImages={setPreviewImages}
          previewImages={previewImages}
        />
        <input
          value={1}
          className="hidden"
          {...methods.register("status", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <div className="flex flex-row  justify-evenly w-auto">
          {previewImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Preview ${index}`}
              className="my-2 mx-2 max-h-32"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="bg-yellowCapiche mx-16 my-10 w-1/2 mx-auto p-2 rounded-lg text-white"
        >
          Précédent
        </button>
        <button
          type="submit"
          className="bg-yellowCapiche my-10 w-1/2 mx-auto p-2 rounded-lg text-white"
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Step3;
