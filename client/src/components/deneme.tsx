import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
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

  const [openDist, setOpenDist] = useState<boolean>(false);

  const [selectedDist2, setSelectedDist2] = useState<any>();
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

  const [mid, setMid] = useState<any>();

  const [openMahal, setOpenMahal] = useState<boolean>(false);

  const [selectedMahal2, setSelectedMahal2] = useState<any>();

  useEffect(() => {
    getDataMahalle({ ilce_id: mid })
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
        <div className="w-[590px] h-[500px] relative  bg-white rounded  flex flex-col justify-center items-center">
          <div className="bg-white top-0  absolute font-bold justify-between  flex ">
            <div className="flex flex-col items-center pt-2 justify-between ">
              <h1 className="text-xl ml-20 p-4  font-bold w-96 justify-center flex items-center text-center ">
                Adresime Gelsin
              </h1>
              <h1 className="text-lg ml-20 justify-center pb-4  text-center font-bold ">
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

          <div className="flex-col flex relative mt-[130px] justify-center  items-center py-3.5 ">
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
              className={`bg-white  overflow-y-auto w-[400px] active:border-2 shadow-gray-400 shadow-md rounded-b-lg ${
                open
                  ? "max-h-60 border-2  absolute mt-[310px] z-10 "
                  : "max-h-0"
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  />
                </div>
              </div>

              {iller?.map((cit: any) => (
                <option
                  value={cit.id}
                  className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
                    cit.il
                  }
                 ${cit.il === selectedCity && "text-orange-400"}  ${
                    cit?.il?.startsWith(city) ? "block" : "hidden"
                  }  `}
                  key={cit?.il}
                  onClick={(e: any) => {
                    if (cit.il?.toLowerCase() !== selectedCity?.toLowerCase()) {
                      setSelectedCity(cit.il);
                      setSelectedCity2(cit.il);
                    }
                    handleCity(e.target.value);
                    setOpen(!open);
                  }}
                >
                  {
                    (cit.il =
                      cit.il.charAt(0) + cit.il.substring(1).toLowerCase())
                  }
                </option>
              ))}
            </ul>
          </div>

          <div
            className={`flex-col flex  justify-center items-center py-3.5  ${
              open ? "" : ""
            }${!selectedCity2 ? "   pointer-events-none opacity-20 " : ""} `}
          >
            <label>
              <div
                onClick={() => setOpenDist(!openDist)}
                className={`bg-white  w-[400px]  border  p-1 rounded h-[56px] mb-1 transition duration-200${
                  openDist
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
                    openDist
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
                openDist ? "max-h-[205px] border-2 mt-2 " : "max-h-0"
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  ></input>
                </div>
              </div>

              {districts2 &&
                districts2?.map((dis: any) => (
                  <option
                    className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
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
            </ul>
          </div>

          <div
            className={`flex-col flex z-0 relative justify-center items-center py-3.5 mb-28 ${
              openDist ? "hidden" : ""
            }  ${open ? "" : ""} ${
              selectedDist2
                ? ""
                : "pointer-events-none opacity-20 cursor-not-allowed"
            } `}
          >
            <label>
              <div
                onClick={() => setOpenMahal(!openMahal)}
                className={`bg-white  w-[400px] border   p-1 rounded h-[56px] mb-4 transition duration-200${
                  openMahal
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
                    openMahal
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
                openMahal
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
                    value={city}
                    onChange={(e) => setCity(e.target.value?.toLowerCase())}
                  ></input>
                </div>
              </div>

              {mahalleler2?.map((mah: any) => (
                <option
                  className={`p-4  text-sm cursor-pointer  hover:text-orange-400 active:bg-gray-200 ${
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deneme2;
