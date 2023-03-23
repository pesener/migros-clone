import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import {
  getDataCity,
  getDataDistrict,
  getDataNeighborhood,
} from "../axios/indexAxios";

type Props = {
  isOn: boolean;
  setIsOn: (active: boolean) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  selectedDist: string;
  setSelectedDist: (active: string) => void;
  selectedCity: string;
  setSelectedCity: (active: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (active: string) => void;
};

const Deneme2 = ({
  isOn,
  setIsOn,
  setIsActive,
  isActive,
  selectedCity,
  setSelectedCity,
  selectedDist,
  setSelectedDist,
  selectedNeighborhood,
  setSelectedNeighborhood,
}: Props) => {
  const handleClick = () => {
    setIsActive(false);
    console.log(isActive);
  };

  ///city///

  const [filteredCities, setFilteredCities] = useState<any>();

  const [cities, setCities] = useState<any>();

  const [open, setOpen] = useState<boolean>(false);

  const [selectedCityModal, setSelectedCityModal] = useState<any>();

  const filterCities = (inputCity: any) => {
    const inputter = cities.filter((item: any) =>
      item.name
        .toLocaleUpperCase("tr-TR")
        .startsWith(inputCity.toLocaleUpperCase("tr-TR"))
    );
    setFilteredCities(inputter);

    console.log("inputValue", inputCity);
  };

  useEffect(() => {
    getDataCity()
      .then((res) => {
        setFilteredCities(res.data);
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ///dist///
  const [filteredDistricts, setFilteredDistricts] = useState<any>();

  const [districts, setDistricts] = useState<any>();

  const [districtID, setDistrictID] = useState<any>();

  const [openDistDrop, setOpenDistDrop] = useState<boolean>(false);

  const [selectedDistrictModal, setSelectedDistrictModal] = useState<any>();

  useEffect(() => {
    getDataDistrict({ city_id: districtID })
      .then((res) => {
        setDistricts(res.data);
        setFilteredDistricts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCity]);
  const filterDistricts = (inputDistrict: any) => {
    const inputterDis = districts.filter((item: any) =>
      item.name
        .toLocaleUpperCase("tr-TR")
        .startsWith(inputDistrict.toLocaleUpperCase("tr-TR"))
    );
    setFilteredDistricts(inputterDis);

    console.log("inputValueDis", inputDistrict);
  };

  ///Mahalle///

  const [neighborhoods, setNeighborhoods] = useState<any>();

  const [filteredNeighbor, setFilteredNeighbor] = useState<any>();

  const [neighborID, setNeighborID] = useState<any>();

  const [openNeighDrop, setOpenNeighDrop] = useState<boolean>(false);

  const [selectedNeighModal, setSelectedNeighModal] = useState<any>();

  const filterNeighbor = (inputNeighbor: any) => {
    const inputterNeigh = neighborhoods.filter((item: any) =>
      item.name
        .toLocaleUpperCase("tr-TR")
        .startsWith(inputNeighbor.toLocaleUpperCase("tr-TR"))
    );
    setFilteredNeighbor(inputterNeigh);

    console.log("inputValueNeigh", inputNeighbor);
  };

  useEffect(() => {
    getDataNeighborhood({ district_id: neighborID })
      .then((res) => {
        setFilteredNeighbor(res.data);
        setNeighborhoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDist]);

  return (
    <div>
      <div className="fixed  z-0 inset-0  flex justify-center items-center ">
        <div className="w-[590px] h-[500px] relative  bg-white rounded  flex flex-col justify-center items-center">
          <div className="bg-white top-0 ml-2 absolute font-bold justify-between  flex ">
            <div className="flex flex-col items-center pt-2 justify-between ">
              <h1 className="text-xl ml-20 p-3  font-bold w-96 justify-center flex items-center text-center ">
                Adresime Gelsin
              </h1>
              <h1 className="text-lg ml-20 justify-center   text-center font-bold ">
                Siparişini nereye getirelim?
              </h1>
            </div>
            <div className=" mb-4">
              <span
                onClick={() => {
                  handleClick();
                }}
                className="w-[50px] mt-5 ml-12  h-[50px] place-self-end rounded-full justify-center  items-center flex hover:bg-gray-50  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 text-xl  cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* 
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
              {selectedCity2 ? (
                <h1 className="ml-3">{selectedCity2}</h1>
              ) : (
                <h3 className="text-gray-500 ml-3 text-sm">İl</h3>
              )}
              <span
                className={`text-sm ml-3 text-black font-bold text-opacity-80 absolute transition duration-200 ${
                  open
                    ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
                    : ""
                } ${
                  selectedCity2
                    ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
                    : ""
                }`}
              >
                İl
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
                    onChange={(e) => filterCities(e.target.value)}
                  />
                </div>
              </div>

           
              {filteredCities?.map((item: any) => (
                <option
                  value={item.id}
                  className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 
                 ${item.city === selectedCity && "text-orange-400"}  `}
                  key={item?.city}
                  onClick={(e: any) => {
                    if (
                      item.city?.toLocaleUpperCase("tr-TR") !==
                      selectedCity?.toLocaleUpperCase("tr-TR")
                    ) {
                      setSelectedCity(item.city);
                      setSelectedCity2(item.city);
                    }
                    setDistrictID(e.target.value);
                    setOpen(!open);
                  }}
                >
                  {
                    (item.city =
                      item.city.charAt(0) +
                      item.city.substring(1).toLocaleLowerCase("tr-TR"))
                  }
                </option>
              ))}
            </ul>
          </div> */}
          <Dropdown
            nameOf={"İl"}
            open={open}
            setOpen={setOpen}
            data={filteredCities}
            filter={filterCities}
            selectedItem={selectedCity}
            setSelectedItem={setSelectedCity}
            setItemID={setDistrictID}
            selectedModalItem={selectedCityModal}
            setSelectedModalItem={setSelectedCityModal}
            openNeighDrop={openNeighDrop}
            setOpenNeighDrop={setOpenNeighDrop}
            handleClick={handleClick}
          />

          {/* <div
            className={`flex-col flex  justify-center items-center py-3.5  ${
              open ? "" : ""
            }${!selectedCity2 ? "   pointer-events-none opacity-20 " : ""} `}
          >
            <label>
              <div
                onClick={() => setOpenDistDrop(!openDistDrop)}
                className={`bg-white  w-[400px]  border  p-1 rounded h-[56px] mb-1 transition duration-200${
                  openDistDrop
                    ? " border-[2.4px]  "
                    : " border hover:border-[1.6px]"
                } border-black flex justify-between items-center  font-bold cursor-pointer `}
              >
                {selectedDist2 ? (
                  <h1 className="ml-3">{selectedDist2}</h1>
                ) : (
                  <h3 className="text-gray-500 ml-3 text-md">İlçe</h3>
                )}
                <span
                  className={`text-md ml-3 text-black text-opacity-80 absolute transition duration-200 ${
                    openDistDrop
                      ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
                      : ""
                  }${
                    selectedDist2
                      ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
                      : ""
                  }`}
                >
                  İlçe
                </span>
                <BiChevronDown size={38} className="text-gray-400 " />
              </div>
            </label>
            <ul
              className={`bg-white  overflow-y-auto w-[400px] shadow-gray-400 shadow-md   rounded-b-lg ${
                openDistDrop ? "max-h-[205px] border-2 mt-2 " : "max-h-0"
              }`}
            >
              <div className="flex  justify-center items-center mb-1  h-9 sticky  bg-white">
                <div className="relative border rounded border-gray-700 p-[2px] mt-2">
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
                    className=" bg-white rounded pl-6 h-7 w-[372px] outline-offset-2 outline-2  "
                    type="text"
                  ></input>
                </div>
              </div>

              {filteredDistricts &&
                filteredDistricts?.map((item: any) => (
                  <option
                    className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                      item.district
                    }
                  ${item.district === selectedDist && "text-orange-400"} `}
                    key={item.district}
                    onClick={(e: any) => {
                      if (item.district !== selectedDist) {
                        setSelectedDist(item.district);
                        setSelectedDist2(item.district);
                      }
                      setOpenDistDrop(!openDistDrop);
                      setNeighborID(item.id);
                    }}
                  >
                    {
                      (item.district =
                        item.district.charAt(0) +
                        item.district.substring(1).toLocaleLowerCase("tr-TR"))
                    }
                  </option>
                ))}
            </ul>
          </div> */}
          <Dropdown
            nameOf={"İlçe"}
            open={openDistDrop}
            setOpen={setOpenDistDrop}
            data={filteredDistricts}
            filter={filterDistricts}
            selectedItem={selectedDist}
            setSelectedItem={setSelectedDist}
            selectedModalItem={selectedDistrictModal}
            setSelectedModalItem={setSelectedDistrictModal}
            setItemID={setNeighborID}
            openNeighDrop={openNeighDrop}
            setOpenNeighDrop={setOpenNeighDrop}
            handleClick={handleClick}
          />

          {/* <div
            className={`flex-col flex z-0 relative justify-center items-center py-3.5  ${
              openDistDrop ? "hidden" : ""
            }  ${open ? "" : ""} ${
              selectedDist2
                ? ""
                : "pointer-events-none opacity-20 cursor-not-allowed"
            } `}
          >
            <label>
              <div
                onClick={() => setOpenNeighDrop(!openNeighDrop)}
                className={`bg-white  w-[400px] border   p-1 rounded h-[56px]  transition duration-200${
                  openNeighDrop
                    ? " border-[2.4px]   "
                    : " border hover:border-[1.6px]"
                } border-black flex justify-between items-center font-bold cursor-pointer`}
              >
                {selectedMahal2 ? (
                  <h1 className="ml-3"> {selectedMahal2}</h1>
                ) : (
                  <h3 className="text-gray-500 ml-3 text-md">Mahalle</h3>
                )}
                <span
                  className={`text-md ml-3 text-black text-opacity-80 absolute transition duration-200 ${
                    openNeighDrop
                      ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1   scale-90"
                      : ""
                  }${
                    selectedMahal2
                      ? "text-black bg-white p-1 transform -translate-y-7 -translate-x-1 scale-90"
                      : ""
                  }`}
                >
                  Mahalle
                </span>
                <BiChevronDown size={38} className="text-gray-400 " />
              </div>
            </label>
            <ul
              className={`bg-white  overflow-y-auto w-[400px] shadow-gray-400 shadow-md  rounded-b-lg ${
                openNeighDrop
                  ? "max-h-[220px] border-2 z-10 overflow-hidden absolute mt-[280px]"
                  : "max-h-0"
              }`}
            >
              <div className="flex  justify-center items-center mb-1  h-9 sticky  bg-white">
                <div className="relative border rounded border-gray-700 p-[2px] mt-2">
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
                    className=" bg-white rounded pl-6 h-7 w-[372px] outline-offset-2 outline-2  "
                    type="text"
                  ></input>
                </div>
              </div>

              {filteredNeighbor?.map((item: any) => (
                <option
                  className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    item.neighborhood
                  }
                  ${
                    item.neighborhood === selectedNeighborhood &&
                    "text-orange-400"
                  } `}
                  key={item.neighborhood}
                  onClick={(e) => {
                    if (item.neighborhood !== selectedNeighborhood) {
                      setSelectedNeighborhood(item.neighborhood);
                      setSelectedMahal2(item.neighborhood);
                    }
                    setOpenNeighDrop(!openNeighDrop);
                    handleClick();
                    handleRemoveItem(e.target);
                  }}
                >
                  {
                    (item.neighborhood =
                      item.neighborhood.charAt(0) +
                      item.neighborhood.substring(1).toLocaleLowerCase("tr-TR"))
                  }
                </option>
              ))}
            </ul>
          </div> */}

          <Dropdown
            nameOf={"Mahalle"}
            open={openNeighDrop}
            setOpen={setOpenNeighDrop}
            data={filteredNeighbor}
            filter={filterNeighbor}
            selectedItem={selectedNeighborhood}
            setSelectedItem={setSelectedNeighborhood}
            selectedModalItem={selectedNeighModal}
            setSelectedModalItem={setSelectedNeighModal}
            setItemID={setNeighborID}
            openNeighDrop={openNeighDrop}
            setOpenNeighDrop={setOpenNeighDrop}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Deneme2;

// Variable names and file names should be in Engilsh and make sense -30 mins X
// Variable types should be configured -30 mins
// Dropdown should be a single component -1 day
// All the data should be fetched from the server after filtering(except city) -3 hours X
// API endpoint names should be make sense(E.g. /address/city or /address/town etc.) -2 mins X
// JSON files names should be in English -1 min X
// Estimation: Total of 2 days

/* <Dropdown
type={"district"}
  name="İlçe"
  open={open}
  setOpen={setOpen}
  data={districts2}
  filter={filterTowns()}
  selectedItem={selectedTown}
/>

<Dropdown
type={"neighborhood"}
  name="Mahalle"
  open={open}
  setOpen={setOpen}
  data={mahalleler2}
  filter={}
  selectedItem={selectedNeighhoud}
/> */
