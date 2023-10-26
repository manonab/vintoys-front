import React from "react";
import { State } from "public/static/data/state";

interface StepProps {
  setCurrentStep: (step: number) => void;
  setSelectedState: (step: number) => void;
  selectedState: number | undefined;
  methods: any;
}

const Step2: React.FC<StepProps> = ({
  setCurrentStep,
  methods,
  selectedState,
  setSelectedState,
}: StepProps) => {
  return (
    <div>
      <div className="flex flex-col w-full h-full">
        <h3 className="font-Capuch my-2">Price</h3>
        <input
          className="my-3 font-inter p-1 md:w-3/4 w-full"
          {...methods.register("price", {
            required: true,
            valueAsNumber: true,
            min: 0,
            max: 10000,
          })}
          required
          placeholder="Price"
        />
        <h3 className="font-Capuch my-2">Brand</h3>
        <input
          className="my-3 font-inter p-1 md:w-3/4 w-full"
          {...methods.register("brand")}
          placeholder="Brand"
        />
        <h3 className="font-Capuch my-2">Localisation</h3>
        <input
          className="my-3 font-inter p-1 md:w-3/4 w-full"
          {...methods.register("location")}
          placeholder="Localisation"
        />
        <h3 className="font-Capuch my-2">State</h3>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(parseInt(e.target.value))} // Mise à jour de l'état ici
          className="md:w-3/4 p-2 w-full"
          {...methods.register("state", {
            required: true,
            valueAsNumber: true,
          })}
        >
          <option value="">Select State</option>
          {State.map((state) => (
            <option key={state.id} value={state.id}>
              {state.state}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row items-center my-5">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="bg-yellowCapiche  w-1/2 p-2 rounded-lg text-white -ml-12"
        >
          Précédent
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="bg-yellowCapiche w-1/2 p-2 rounded-lg text-white mr-10"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Step2;
