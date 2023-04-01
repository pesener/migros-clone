import React from "react";
import SutSlides from "../slides/sutSlides";

const SutKahval = () => {
  return (
    <div className="w-full h-[1500px] z-0 ">
      <div className="h-[700px] mt-5 absolute w-[340px]  border-2 rounded ml-[50px]"></div>
      <div className="ml-[420px] mt-12 absolute z-0">
        {" "}
        <SutSlides />
      </div>
    </div>
  );
};

export default SutKahval;
