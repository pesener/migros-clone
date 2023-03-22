import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  getDataDistrict,
  getDataCity,
  getDataNeighborhood,
} from "../axios/indexAxios";
import { Select, MenuItem, TextField, FormControl, Box } from "@mui/material";

type Props = {
  isOn: boolean;
  setIsOn: (active: boolean) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  selectedDist: string;
  setSelectedDist: (active: string) => void;
  selectedCity: string;
  setSelectedCity: (active: string) => void;
  selectedMahal: string;
  setSelectedMahal: (active: string) => void;
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
  selectedMahal,
  setSelectedMahal,
}: Props) => {
  const handleClick = () => {
    setIsActive(false);
    console.log(isActive);
  };

  const handleRemoveItem = (e: any) => {
    setSelectedCity2(
      selectedCity2.filter((item: any) => item !== e.target.value)
    );
    setSelectedDist2(
      selectedDist2.filter((item: any) => item !== e.target.value)
    );
    setSelectedMahal2(
      selectedMahal2.filter((item: any) => item !== e.target.value)
    );
  };

  ///city///

  const [iller, setIller] = useState<any>();

  const [city, setCity] = useState<string>();

  const [open, setOpen] = useState<boolean>(false);

  const [selectedCity2, setSelectedCity2] = useState<any>();

  useEffect(() => {
    getDataCity()
      .then((res) => {
        setIller(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(iller);
  ///dist///
  const [districts2, setDistricts2] = useState<any>();

  const [districts, setDistricts] = useState<any>();

  const [openDist, setOpenDist] = useState<boolean>(false);

  const [selectedDist2, setSelectedDist2] = useState<any>();
  useEffect(() => {
    getDataDistrict()
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ///Mahalle///

  const [mahalleler2, setMahalleler2] = useState<any>();

  const [mid, setMid] = useState<any>();

  const [openMahal, setOpenMahal] = useState<boolean>(false);

  const [selectedMahal2, setSelectedMahal2] = useState<any>();

  useEffect(() => {
    getDataNeighborhood({ ilce_id: mid })
      .then((res) => {
        setMahalleler2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleCity = async (id: any) => {
    const dt: any = districts?.filter((x: any) => x.il_id === id);
    await setDistricts2(dt);
    console.log(dt);
  };

  return (
    <div>
      <div className="fixed  z-0 inset-0  flex justify-center items-center ">
        <div className="w-[600px] h-[550px] relative  bg-white rounded  flex flex-col justify-center items-center">
          <div className="bg-white mb-8 w-full font-bold justify-between  flex ">
            <div className="flex flex-col items-center  justify-between ">
              <h1 className="text-2xl ml-24 p-1  font-bold w-96 justify-center flex items-center text-center ">
                Adresime Gelsin
              </h1>
              <h1 className="text-xl ml-24 justify-center text-center font-bold ">
                Siparişini nereye getirelim?
              </h1>
            </div>
            <div className=" mb-4">
              <span
                onClick={handleClick}
                className="w-16 ml-8  h-16 place-self-end rounded-full justify-center  items-center flex hover:bg-gray-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-black text-xl  cursor-pointer"
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

          <Box className="flex-col flex justify-center items-center mb-4 w-96  ">
            <TextField
              label="İl"
              select
              value={selectedCity2}
              className={`bg-white  shadow-lg font-bold `}
              fullWidth
            >
              <div className="flex  justify-center items-center   h-9 sticky  bg-white">
                <div className="relative">
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  ></input>
                </div>
              </div>

              {iller?.map((cit: any) => (
                <MenuItem
                  value={cit.id}
                  className={`p-2 max-h-60 text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    cit.il
                  }
                 ${cit.il === selectedCity && "text-orange-400"} ${
                    cit.il?.toLowerCase().startsWith(city) ? "block" : "hidden"
                  }  `}
                  key={cit.il}
                  onClick={(e: any) => {
                    if (cit.il?.toLowerCase() !== selectedCity?.toLowerCase()) {
                      setSelectedCity(cit.il);
                      setSelectedCity2(cit.il);
                    }
                    handleCity(e.target.value);
                  }}
                >
                  {
                    (cit.il =
                      cit.il.charAt(0) + cit.il.substring(1).toLowerCase())
                  }
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box className="flex-col flex justify-center items-center mb-4 w-96  ">
            <TextField
              label="İlçe"
              select
              value={selectedDist2}
              className={`bg-white     shadow-lg font-bold `}
              fullWidth
            >
              <div className="flex  justify-center items-center   h-9 sticky  bg-white">
                <div className="relative">
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  ></input>
                </div>
              </div>

              {districts2 &&
                districts2?.map((dis: any) => (
                  <option
                    className={`p-2  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                      dis.ilce
                    }
                  ${dis.ilce === selectedDist && "text-orange-400"} `}
                    key={dis.ilce}
                    onClick={(e: any) => {
                      if (dis.ilce !== selectedDist) {
                        setSelectedDist(dis.ilce);
                        setSelectedDist2(dis.ilce);
                      }
                      setOpenDist(!openDist);
                      setMid(dis.id);
                    }}
                  >
                    {
                      (dis.ilce =
                        dis.ilce.charAt(0) +
                        dis.ilce.substring(1).toLowerCase())
                    }
                  </option>
                ))}
            </TextField>
          </Box>

          <Box className="flex-col flex justify-center items-center mb-4 w-96  ">
            <TextField
              label="Mahalle"
              select
              value={selectedMahal2}
              className={`bg-white     shadow-lg font-bold `}
              fullWidth
            >
              <div className="flex  justify-center items-center   h-9 sticky  bg-white">
                <div className="relative">
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  ></input>
                </div>
              </div>

              {mahalleler2?.map((mah: any) => (
                <option
                  className={`p-2  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    mah.mahalle
                  }
                  ${mah.mahalle === selectedMahal && "text-orange-400"} `}
                  key={mah.mahalle}
                  onClick={(e) => {
                    if (mah.mahalle !== selectedMahal) {
                      setSelectedMahal(mah.mahalle);
                      setSelectedMahal2(mah.mahalle);
                    }
                    setOpenMahal(!openMahal);
                    handleClick();
                    handleRemoveItem(e.target);
                  }}
                >
                  {
                    (mah.mahalle =
                      mah.mahalle.charAt(0) +
                      mah.mahalle.substring(1).toLowerCase())
                  }
                </option>
              ))}
            </TextField>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Deneme2;
