import React from "react";

const CategoriesDropdown = () => {
  return (
    <div>
      <div className="ml-[125px] peer  w-[140px] mt-4 group group/item font-bold p-1   cursor-pointer text-sm  flex  ">
        <img
          src="https://www.migros.com.tr/assets/icons/categories.svg"
          alt="categories"
          className="mr-4 w-5 h-5 "
        />
        <span className="flex-col"> KATEGORİLER </span>
        <div className="group-hover/item:bg-primary absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        <div className="group-hover:bg-black  group-hover:bg-opacity-20 hidden group-hover:flex inset-x-0   absolute   h-[700px] mt-[32px]  ">
          <div className="group-hover:bg-white group/info z-10 absolute  w-[230px]   h-[600px] ml-32 rounded-bl-lg flex-col">
            <div className="group-hover/info:bg-white  ml-[230px] absolute rounded-br-lg rounded-bl-lg z-0 w-[1080px] h-[600px]"></div>

            <div className="hover:bg-primary z-10 group/edit  hover:bg-opacity-20 h-10 w-[300px] flex  relative ">
              <h1 className="text-green-600  z-10 mt-2 group/fix  ml-6 items-center ">
                Tüm İndirimli Ürünler
              </h1>{" "}
              <div className="w-[28px] z-10 overflow-hidden absolute ml-[300px]">
                <div className=" h-[64px] z-10  group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
              </div>{" "}
            </div>
            <div className="hover:bg-primary  z-10 group/edit hover:bg-opacity-20 h-10 w-[300px] relative flex  ">
              <h1 className="text-primary z-10 mt-2 ml-6">Sadece Migros'ta</h1>
              <div className="w-[28px] z-10  overflow-hidden absolute ml-[300px]">
                <div className=" h-[64px] z-10  group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
