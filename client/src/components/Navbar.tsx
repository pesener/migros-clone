import React, { useState } from "react";
import Adress from "./Adress";
import CategoriesDropdown from "./CategoriesDropdown";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(false);
  };

  const handleClick2 = () => {
    setIsActive(true);
  };

  return (
    <div className="border-b-2 h-[190px] ">
      {!isActive ? (
        <div className="flex justify-items-start relative  ">
          <div className="bg-primary overflow-hidden h-[67px]  w-full">
            <button
              onClick={handleClick}
              className="cursor-pointer w-[185px] ml-32 h-[56px] mt-3  rounded-tl-lg rounded-tr-lg  bg-white "
            >
              <img
                className="w-[150px]  h-10 mb-2 my-2 ml-4   cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/sanalmarket/sanalmarket-logo.svg"
                alt=""
              ></img>
            </button>
            <button
              onClick={handleClick2}
              className="bg-white w-[123px]  h-[48px] absolute mt-3  ml-2  rounded-lg   cursor-pointer"
            >
              <section className=" flex justify-center items-center    cursor-pointer">
                {" "}
                <img
                  className="mx-auto h-[52px] w-[90px]"
                  src="https://www.migros.com.tr/assets/logos/hemen/hemen-logo.svg"
                  alt=""
                ></img>
              </section>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-start relative ">
          <div className="bg-hemen overflow-hidden h-[67px]  w-full">
            <button
              onClick={handleClick}
              className="cursor-pointer w-[185px] ml-32 h-12 mt-3 rounded-lg bg-white"
            >
              <img
                className="w-[150px]  h-10 my-2 mb-2 ml-4   cursor-pointer"
                src="https://www.migros.com.tr/assets/logos/sanalmarket/sanalmarket-logo.svg"
                alt=""
              ></img>
            </button>

            <button
              onClick={handleClick2}
              className="bg-white w-[123px] h-[60px]   ml-2 absolute mt-3 rounded-tl-lg rounded-tr-lg cursor-pointer"
            >
              <section className=" flex justify-center items-center    cursor-pointer">
                {" "}
                <img
                  className=" h-[48px] mb-2 w-[90px]"
                  src="https://www.migros.com.tr/assets/logos/hemen/hemen-logo.svg"
                  alt=""
                ></img>
              </section>
            </button>
          </div>
        </div>
      )}

      <Adress />
      <CategoriesDropdown />
    </div>
  );
};

export default Navbar;
