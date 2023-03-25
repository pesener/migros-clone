import React from "react";

const CategoriesDropdown = () => {
  return (
    <div>
      <div className="ml-[125px] w-[140px] mt-4 group font-bold p-1   cursor-pointer text-sm  flex  ">
        <img
          src="https://www.migros.com.tr/assets/icons/categories.svg"
          alt="categories"
          className="mr-4 w-5 h-5 "
        />
        <span className="flex-col"> KATEGORİLER </span>
        <div className="group-hover:bg-primary absolute mt-6  w-[140px] h-[8px] rounded-tr-lg rounded-tl-lg"></div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
