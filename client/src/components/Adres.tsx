import React, { useState } from "react";
import AdresModal from "./AdresModal";

const Adres = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<any>();
  // const [selectedCity, setSelectedCity] = useState<{modalCity: string, mainCity: string}>({modalCity: '', mainCity: ''});
  const [selectedDist, setSelectedDist] = useState<any>();
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<any>();

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="bg-white flex overflow-hidden h-36 border-b-2 mt-2  w-full">
      <div
        onClick={handleClick}
        className="w-72 flex ml-32 h-14 border-l-2 border-t-2 border-b-2  mt-4 rounded-l-lg  cursor-pointer"
      >
        <img
          className="w-12 h-6 ml-1 my-3 rounded-lg cursor-pointer"
          src="https://www.migros.com.tr/assets/icons/home-active.svg"
          alt=""
        ></img>

        <div className="text-sm mt-2 font-bold  w-[180px] ">
          {selectedCity ? (
            <h1>
              {selectedCity}, {selectedDist},<br></br>
              {selectedNeighborhood}.
            </h1>
          ) : (
            <h1 className="mt-2">Teslimat adresini seçiniz</h1>
          )}
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4 ml-2 font-bold 
              "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <img
          className="w-2 box-border  mt-0 cursor-pointer"
          src="https://www.migros.com.tr/assets/icons/header-delivery-schedule-separator.svg"
          alt=""
        ></img>
      </div>
      {isActive ? (
        <AdresModal
          selectedNeighborhood={selectedNeighborhood}
          setSelectedNeighborhood={setSelectedNeighborhood}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedDist={selectedDist}
          setSelectedDist={setSelectedDist}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      ) : (
        ""
      )}

      <div className="w-60 flex h-14 mt-4   ml-0 border-t-2 border-r-2 border-b-2  rounded-tr-lg rounded-br-lg  cursor-pointer">
        <div className="text-sm mt-2 ml-1 w-42 font-normal ">
          <div className=" font-normal ">En yakın teslimat</div>
          <div className="text-sm   text-green-500 w-42 font-bold ">
            12:00 - 14:00
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4 ml-20 font-bold 
              "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Adres;
