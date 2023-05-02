import React from "react";

const Search = () => {
  return (
    <div className="absolute top-[90px] left-[660px]">
      <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] h-[30px] ml-1 text-gray-400 absolute mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          className="w-[490px] h-[50px] border-t-[1.6px]  border-b-[1.6px]  border-l-[1.6px] pl-[38px]  border-gray-300 rounded-bl-lg rounded-tl-lg outline-none"
          placeholder="Ara"
        />
        <div className="bg-primary text-white flex items-center text-md w-[60px] justify-center rounded-tr-lg rounded-br-lg cursor-pointer font-bold">
          Ara
        </div>
      </div>
    </div>
  );
};

export default Search;
