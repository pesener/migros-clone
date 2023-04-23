import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { fetchCity } from "./actions/cityAction";
import { fetchDistrict } from "./actions/distAction";
import { fetchNeighbor } from "./actions/neighborAction";

import { useAppDispatch, useAppSelector } from "../index";

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

const AdressModal = ({
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

  const dispatch = useAppDispatch();

  const cities = useAppSelector((state: any) => state.cities);

  const districts = useAppSelector((state: any) => state.districts);

  const neighborhoods = useAppSelector((state: any) => state.neighborhoods);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  ///city///

  const [filteredCities, setFilteredCities] = useState<any>();

  const [open, setOpen] = useState<boolean>(false);

  const [selectedCityModal, setSelectedCityModal] = useState<any>();

  const [activateDropCity, setActivateDropCity] = useState<boolean>(true);

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
    dispatch(fetchCity());
    setFilteredCities(cities);
  }, [open]);

  ///dist///
  const [filteredDistricts, setFilteredDistricts] = useState<any>();

  const [districtID, setDistrictID] = useState<any>();

  const [openDistDrop, setOpenDistDrop] = useState<boolean>(false);

  const [selectedDistrictModal, setSelectedDistrictModal] = useState<any>();

  const [activateDropDist, setActivateDropDist] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchDistrict({ city_id: districtID }));
    setFilteredDistricts(districts);
  }, [selectedCity, openDistDrop]);

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

  const [filteredNeighbor, setFilteredNeighbor] = useState<any>();

  const [neighborID, setNeighborID] = useState<any>();

  const [openNeighDrop, setOpenNeighDrop] = useState<boolean>(false);

  const [selectedNeighModal, setSelectedNeighModal] = useState<any>();

  const [activateDropNeigh, setActivateDropNeigh] = useState<boolean>(false);

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
    dispatch(fetchNeighbor({ district_id: neighborID }));
    setFilteredNeighbor(neighborhoods);
  }, [selectedDist, openNeighDrop]);

  return (
    <div>
      {loading ? (
        <img
          className="index-0 flex bg-gray-300 bg-opacity-10 justify-center-items-center h-[90px] w-[90px]"
          src="https://www.migros.com.tr/assets/icons/loading-indicator.gif"
          alt="indicator"
        />
      ) : (
        <div className="fixed   inset-0 z-0  flex justify-center items-center ">
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
                  className="w-[50px] mt-3 ml-12  h-[50px] z-10 rounded-full justify-center  items-center flex hover:bg-gray-50  cursor-pointer"
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
              activation={activateDropCity}
              setActivation={setActivateDropDist}
            />

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
              activation={activateDropDist}
              setActivation={setActivateDropNeigh}
            />

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
              activation={activateDropNeigh}
              setActivation={setActivateDropNeigh}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdressModal;

// Variable names and file names should be in Engilsh and make sense -30 mins X
// Variable types should be configured -30 mins
// Dropdown should be a single component -1 day
// All the data should be fetched from the server after filtering(except city) -3 hours X
// API endpoint names should be make sense(E.g. /address/city or /address/town etc.) -2 mins X
// JSON files names should be in English -1 min X
// Estimation: Total of 2 days
