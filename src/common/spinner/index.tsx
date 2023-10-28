import React from "react";
import SVG from "@common/svg";

const Spinner = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-gray-300 z-50">
    <div className="animate-spin rounded-full border-t w-auto p-2 border-yellowCapiche border-opacity-50 h-12 w-12">
      <SVG name="DuckLogo" />
    </div>
  </div>
);

export default Spinner;
