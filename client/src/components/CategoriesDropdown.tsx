import React from "react";

const CategoriesDropdown = () => {
  return (
    <div>
      <div className="ml-[125px] peer  w-[140px] mt-4 group font-bold p-1   cursor-pointer text-sm  flex  ">
        <img
          src="https://www.migros.com.tr/assets/icons/categories.svg"
          alt="categories"
          className="mr-4 w-5 h-5 "
        />
        <span className="flex-col"> KATEGORİLER </span>
        <div className="group-hover:bg-primary absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        <div className="group-hover:bg-black group-hover:bg-opacity-20 hidden group-hover:flex inset-x-0   absolute   h-[700px] mt-[32px]  ">
          <div className="group-hover:bg-white      absolute  w-[230px]   h-[600px] ml-32 rounded-bl-lg ">
            <div className="hover:bg-primary peer hover:bg-opacity-20 h-10 w-[300px] flex   ">
              <h1 className="text-green-600 mt-2  ml-6 items-center ">
                Tüm İndirimli Ürünler
              </h1>{" "}
              <div className="w-[28px]  overflow-hidden absolute ml-[300px]">
                <div className=" h-[64px]  hover:bg-primary hover:bg-opacity-20 rotate-45 transform origin-top-left"></div>
              </div>{" "}
            </div>
            <div className="hover:bg-primary hover:bg-opacity-20 h-10 w-[300px] flex   ">
              <h1 className="text-primary mt-3 ml-6">Sadece Migros'ta</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
