import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProductCards = () => {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="h-[400px] w-[210px] border border-gray-400 rounded">
          <div className="w-[40px] h-[40px] bg-primary absolute mt-[330px] ml-[140px] rounded cursor-pointer">
            <AiOutlinePlus className="text-white mt-1 ml-1" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
