import React from "react";

const CategoriesDropdown = () => {
  return (
    <div>
      <div className="ml-[125px] font-bold p-1 w-32 cursor-pointer text-sm mt-3 mb-1 flex">
        <img
          src="https://www.migros.com.tr/assets/icons/categories.svg"
          alt="categories"
          className="mr-4 w-5 h-5"
        />
        <span> KATEGORİLER</span>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
