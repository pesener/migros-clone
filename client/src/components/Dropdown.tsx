import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({
  name,
  open,
  type,
  setOpen,
  data,
  filter,
  selectedItem,
  itemID,
  setItemID,
  setSelectedItem,
}: {
  setSelectedItem: any;
  itemID: any;
  setItemID: any;
  selectedItem: any;
  filter: any;
  name: string;
  open: boolean;
  type: string;
  setOpen: (active: boolean) => void;
  data: any;
}) => {
  return (
    <div className="flex-col flex relative mt-[100px] justify-center  items-center py-3.5 ">
      {" "}
      <div
        id="dropD1"
        onClick={() => {
          setOpen(!open);
        }}
        className={`bg-white  w-[400px]  p-1 rounded mb-1  h-[56px]  transition duration-200 ${
          open ? "border-[2.4px] " : " border hover:border-[1.6px] "
        }  border  border-black flex justify-between items-center  font-bold cursor-pointer`}
      >
        {selectedItem ? (
          <h1 className="ml-3">{selectedItem}</h1>
        ) : (
          <h3 className="text-gray-500 ml-3 text-sm">{name}</h3>
        )}
        <span
          className={`text-sm ml-3 text-black font-bold text-opacity-80 absolute transition duration-200 ${
            open
              ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
              : ""
          } ${
            selectedItem
              ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
              : ""
          }`}
        >
          {name}
        </span>
        <BiChevronDown size={38} className="text-gray-400 " />
      </div>
      <ul
        className={`bg-white  overflow-y-auto w-[400px]  shadow-gray-400 shadow-md rounded-b-lg ${
          open ? "h-60 border  absolute mt-[310px] z-10 " : "max-h-0"
        }`}
      >
        <div className="flex  justify-center items-center  sticky  h-9 mb-2  bg-white">
          <div className=" border rounded   border-gray-700 p-[2px] mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-400 absolute "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className=" bg-white  rounded pl-6 h-7 w-[365px] outline-offset-2 outline-2 "
              type="text"
              onChange={(e) => filter(e.target.value)}
            />
          </div>
        </div>

        {data?.map((item: any) => (
          <option
            value={item.index}
            className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 
         ${item.city === selectedItem && "text-orange-400"}  `}
            key={item?.id}
            onClick={(e: any) => {
              if (
                item.type?.toLocaleUpperCase("tr-TR") !==
                selectedItem?.toLocaleUpperCase("tr-TR")
              ) {
                setSelectedItem(item.typer);
                setSelectedItem(item.typer);
              }
              setItemID(e.target.value);
              setOpen(!open);
            }}
          >
            {item.type}
          </option>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
