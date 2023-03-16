import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";
import { getDataIl, getDataIlce, getDataMahalle } from "../axios/indexAxios";

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

  ///city///

  const [iller, setIller] = useState<any>();

  const [city, setCity] = useState<string>();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getDataIl()
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

  const [dist, setDist] = useState<string>();

  const [openDist, setOpenDist] = useState<boolean>(false);

  useEffect(() => {
    getDataIlce()
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ///Mahalle///

  const [mahalleler2, setMahalleler2] = useState<any>();

  const [mahalleler, setMahalleler] = useState<any>();

  const [mahal, setMahal] = useState<string>();

  const [openMahal, setOpenMahal] = useState<boolean>(false);

  useEffect(() => {
    getDataMahalle()
      .then((res) => {
        setMahalleler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCity = async (id: any) => {
    const dt: any = districts?.filter((x: any) => x.il_id === id);
    await setDistricts2(dt);
    console.log(dt);
  };

  const handleDistrict = async (id: any) => {
    const dt: any = mahalleler?.filter((x: any) => x.ilce_id === id);
    await setMahalleler2(dt);
    console.log(dt);
  };

  return (
    <div>
      <div className="fixed  z-4 inset-0  flex justify-center items-center ">
        <div className="w-[600px] h-[550px]   bg-white rounded  flex flex-col justify-center items-center">
          <div className="bg-white mb-8 w-full font-bold justify-between  flex ">
            <div className="flex flex-col items-center  justify-between ">
              <h1 className="text-2xl ml-24 p-1 font-bold w-96 justify-center flex items-center text-center ">
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

          <div className="flex-col flex justify-center items-center py-3.5 ">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white  w-96   p-1 rounded mb-4  h-[56px] ${
                open ? " border-2 " : "border"
              } border-black flex justify-between items-center shadow-lg font-bold cursor-pointer`}
            >
              {selectedCity ? selectedCity : "il"}

              <BiChevronDown size={38} className="text-gray-400" />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 active:border-2 shadow-lg rounded-lg ${
                open ? "max-h-60 border-2 " : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center   h-8 sticky  bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white  rounded-l-lg"
                />
                <input
                  className=" bg-white border-b  w-96  "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value?.toLowerCase())}
                ></input>
              </div>

              {iller?.map((cit: any) => (
                <option
                  value={cit.id}
                  className={`p-2  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    cit.il
                  }
                 ${cit.il === selectedCity && "text-orange-400"}  `}
                  key={cit.il}
                  onClick={(e: any) => {
                    if (cit.il?.toLowerCase() !== selectedCity?.toLowerCase()) {
                      setSelectedCity(cit.il);
                      handleCity(e.target.value);
                      setOpen(!open);
                    }
                  }}
                >
                  {cit.il}
                </option>
              ))}
            </ul>
          </div>

          <div
            className={`flex-col flex  justify-center items-center py-3.5  ${
              open ? "hidden" : ""
            } `}
          >
            <div
              onClick={() => setOpenDist(!openDist)}
              className={`bg-white  w-96    p-1 rounded h-[56px] mb-4 ${
                openDist ? " border-2  " : " border"
              } border-black flex justify-between items-center shadow-lg font-bold cursor-pointer`}
            >
              {selectedDist ? selectedDist : "İlçe"}
              <BiChevronDown size={38} className="text-gray-400" />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 shadow-lg  rounded-lg ${
                openDist ? "max-h-60 border-2  " : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center  px-2 sticky top-0 bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white  rounded-l-lg"
                />
                <input
                  className=" bg-white  border-b w-96  "
                  type="text"
                  value={dist}
                  onChange={(e) => setDist(e.target.value)}
                ></input>
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
                        handleDistrict(e.target.value);
                        setOpenDist(!openDist);
                      }
                    }}
                  >
                    {dis.ilce}
                  </option>
                ))}
            </ul>
          </div>

          <div
            className={`flex-col flex  justify-center items-center py-3.5 mb-32 ${
              openDist ? "hidden" : ""
            } `}
          >
            <div
              onClick={() => setOpenMahal(!openMahal)}
              className={`bg-white  w-96    p-1 rounded h-[56px] mb-4 ${
                openMahal ? " border-2  " : " border"
              } border-black flex justify-between items-center shadow-lg font-bold cursor-pointer`}
            >
              {selectedMahal ? selectedMahal : "mahalle"}
              <BiChevronDown size={38} className="text-gray-400" />
            </div>
            <ul
              className={`bg-white  overflow-y-auto w-96 shadow-lg  rounded-lg ${
                openMahal ? "max-h-60 border-2  " : "max-h-0"
              }`}
            >
              <div className="flex justify-center items-center  px-2 sticky top-0 bg-white">
                <SlMagnifier
                  size={27}
                  className="text-gray-400 bg-white  rounded-l-lg"
                />
                <input
                  className=" bg-white  border-b w-96  "
                  type="text"
                  value={mahal}
                  onChange={(e) => setMahal(e.target.value)}
                ></input>
              </div>

              {mahalleler2?.map((mah: any) => (
                <option
                  className={`p-2  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    mah.mahalle
                  }
                  ${mah.mahalle === selectedMahal && "text-orange-400"} `}
                  key={mah.mahalle}
                  onClick={() => {
                    if (mah.mahalle !== selectedMahal) {
                      setSelectedMahal(mah.mahalle);
                      setOpenMahal(!openMahal);
                    }
                  }}
                >
                  {mah.mahalle}
                </option>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deneme2;
