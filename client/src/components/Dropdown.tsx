import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({
  nameOf,
  open,
  setOpen,
  data,
  filter,
  selectedItem,
  selectedModalItem,
  setSelectedModalItem,
  setItemID,
  setSelectedItem,
  openNeighDrop,
  setOpenNeighDrop,
  handleClick,
}: {
  handleClick: any;
  openNeighDrop: boolean;
  setOpenNeighDrop: (active: boolean) => void;
  selectedModalItem: string;
  setSelectedModalItem: (active: string) => void;
  setSelectedItem: (active: string) => void;
  setItemID: (active: string) => void;
  selectedItem: string;
  filter: any;
  nameOf: string;
  open: boolean;
  setOpen: (active: boolean) => void;
  data: any;
}) => {
  return (
    <div className="flex-col flex relative  justify-center  items-center py-3.5 ">
      {" "}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`bg-white  w-[400px]  p-1 rounded  h-[56px]  transition duration-200 ${
          open ? "border-[2.4px] " : " border hover:border-[1.6px] "
        }  border  border-black flex justify-between items-center  font-bold cursor-pointer`}
      >
        {selectedModalItem ? (
          <h1 className="ml-3">{selectedModalItem}</h1>
        ) : (
          <h3 className="text-gray-500 ml-3 text-sm">{nameOf}</h3>
        )}
        <span
          className={`text-sm ml-3 text-black font-bold text-opacity-80 absolute transition duration-200 ${
            open
              ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
              : ""
          } ${
            selectedModalItem
              ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
              : ""
          }`}
        >
          {nameOf}
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
            value={item?.name}
            className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 
         ${item?.name === selectedItem && "text-orange-400"}  `}
            key={item?.name}
            onClick={(e: any) => {
              if (
                item.name?.toLocaleUpperCase("tr-TR") !==
                selectedItem?.toLocaleUpperCase("tr-TR")
              ) {
                setSelectedItem(item.name);
                setSelectedModalItem(item.name);
              }
              setItemID(item.id);
              setOpen(!open);
              if (nameOf === "Mahalle") {
                handleClick();
              }
            }}
          >
            {
              (item.name =
                item.name.charAt(0) +
                item.name.substring(1).toLocaleLowerCase("tr-TR"))
            }
          </option>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
