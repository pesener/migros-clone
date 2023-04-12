import React, { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { getProduct } from "../axios/indexAxios";
import { TbArrowsDownUp } from "react-icons/tb";

const SelectedCategory = ({ id }: { id: any }) => {
  const [links, setLinks] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>("Önerilenler");

  const sortData = [
    { name: "Önerilenler" },
    { name: "Önce En Düşük Fiyat" },
    { name: "Önce En Yüksek Fiyat" },
  ];

  useEffect(() => {
    getProduct(id)
      .then((res: any) => {
        setLinks(res.data);
        console.log(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="">
      <div className="w-full  top-[220px] h-[1500px] z-0 ">
        <div className=" w-[250px] ml-[25px]  flex items-center justify-center text-sm">
          <Link to={`/`}>
            <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
          </Link>
          <BiChevronRight size={20} />{" "}
          <div className=" cursor-default ml-2">{links?.name}</div>{" "}
        </div>

        <div className="h-[700px] mt-5 absolute w-[330px]  border-2 rounded-lg ml-[55px] ">
          <div className="h-[85px] border-b ">
            {" "}
            <h1 key={links.uniqueId} className="ml-6 font-bold text-xl mt-4">
              {links?.name}
            </h1>
            <div className="flex flex-col">
              {" "}
              {links?.sublinks?.map((mysublinks: any) => (
                <div>
                  <h1 className="ml-6 font-normal text-md mt-4">{}</h1>
                  {mysublinks.sublink?.map((slink: any) => (
                    <span
                      key={slink.uniqueId}
                      className="  items-center font-normal  "
                    >
                      {}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-b h-[100px]">
              {" "}
              <div className="cursor-default absolute top-28 font-bold ml-6 text-lg">
                Alt Kategoriler
              </div>{" "}
              {links?.sublinks?.map((mysublinks: any) => (
                <h1
                  key={mysublinks.uniqueId}
                  className="ml-6 font-normal text-md  cursor-pointer  absolute top-[160px]"
                >
                  {mysublinks.SubHead}
                </h1>
              ))}
            </div>
            <div className="border-b h-[200px] absolute font-bold ml-6 mt-12 text-lg">
              {" "}
              Markalar
            </div>
          </div>
          <div className="ml-[378px] top-8 absolute z-0">
            {" "}
            <SutSlides />
          </div>
          <div className="w-[260px] h-[55px]   border-black absolute ml-[1190px] rounded mt-[170px] cursor-pointer">
            <div>
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`  p-1 rounded  h-[56px]  transition duration-200 ${
                  open ? "border-[2.4px] " : " border hover:border-[1.6px] "
                }  border  border-black flex justify-between items-center  font-bold cursor-pointer`}
              >
                {selectedItem ? (
                  <h1 className="text-black ml-12 text-md">{selectedItem}</h1>
                ) : (
                  <h3 className="text-black ml-12 text-md">
                    {sortData[0].name}
                  </h3>
                )}
              </div>
              <ul
                className={`bg-white  overflow-y-auto w-[255px]  shadow-gray-400 shadow-sm rounded-b-lg ${
                  open ? "h-50 border  absolute mt-[10px] z-10 " : "max-h-0"
                }`}
              >
                {sortData?.map((item: any) => (
                  <option
                    onClick={() => {
                      setSelectedItem(item.name);
                      setOpen(!open);
                    }}
                    className={`p-4  text-md cursor-pointer  hover:text-orange-400 active:bg-gray-200    ${
                      item?.name === selectedItem && "text-orange-400"
                    }  `}
                  >
                    {item.name}
                  </option>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-black font-bold ml-[1205px] mt-[187px] ">
            <TbArrowsDownUp size={22} />
          </div>
        </div>
        <div className="ml-[420px] mt-[380px] ">
          {links?.sublinks?.map((mysublinks: any) => (
            <div
              key={mysublinks.uniqueId}
              className="grid grid-cols-5  w-[1100px] gap-0 p-0 "
            >
              {selectedItem === "Önce En Düşük Fiyat"
                ? mysublinks.product
                    ?.sort((a: any, b: any) => (a.price > b.price ? 1 : -1))
                    .map((plink: any) => (
                      <div key={plink.uniqueId} className=" p-0">
                        <div
                          key={plink.uniqueId}
                          className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                        >
                          <Link
                            to={`/details/${plink.id}`}
                            key={plink.uniqueId}
                          >
                            <img
                              key={plink.uniqueId}
                              alt=""
                              className="mt-2 cursor-pointer"
                              src={plink.img}
                            />
                            <div
                              key={plink.uniqueId}
                              className="font-semibold mx-2 text-sm cursor-pointer"
                            >
                              {plink.name}
                            </div>
                          </Link>
                          <br></br>

                          <div
                            key={plink.uniqueId}
                            className="text-primary absolute bottom-16 text-xl font-semibold ml-2 cursor-default"
                          >
                            {plink.price}TL
                          </div>

                          <div
                            key={plink.uniqueId}
                            className="w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer"
                          >
                            <AiOutlinePlus
                              className="text-white  mt-1  ml-[5px]"
                              size={30}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                : selectedItem === "Önce En Yüksek Fiyat"
                ? mysublinks.product
                    ?.sort((a: any, b: any) => (a.price > b.price ? -1 : 1))
                    .map((plink: any) => (
                      <div key={plink.uniqueId} className=" p-0">
                        <div
                          key={plink.uniqueId}
                          className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                        >
                          <Link
                            to={`/details/${plink.id}`}
                            key={plink.uniqueId}
                          >
                            <img
                              key={plink.uniqueId}
                              alt=""
                              className="mt-2 cursor-pointer"
                              src={plink.img}
                            />
                            <div
                              key={plink.uniqueId}
                              className="font-semibold mx-2 text-sm cursor-pointer"
                            >
                              {plink.name}
                            </div>
                          </Link>
                          <br></br>

                          <div
                            key={plink.uniqueId}
                            className="text-primary absolute bottom-16 text-xl font-semibold ml-2 cursor-default"
                          >
                            {" "}
                            {plink.price}{" "}
                          </div>

                          <div
                            key={plink.uniqueId}
                            className="w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer"
                          >
                            <AiOutlinePlus
                              className="text-white  mt-1  ml-[5px]"
                              size={30}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                : selectedItem === "Önerilenler"
                ? mysublinks.product
                    ?.sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                    .map((plink: any) => (
                      <div key={plink.uniqueId} className=" p-0">
                        <div
                          key={plink.uniqueId}
                          className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                        >
                          <Link
                            to={`/details/${plink.id}`}
                            key={plink.uniqueId}
                          >
                            <img
                              key={plink.uniqueId}
                              alt=""
                              className="mt-2 cursor-pointer"
                              src={plink.img}
                            />
                            <div
                              key={plink.uniqueId}
                              className="font-semibold mx-2 text-sm cursor-pointer"
                            >
                              {plink.name}
                            </div>
                          </Link>
                          <br></br>

                          <div
                            key={plink.uniqueId}
                            className="text-primary absolute bottom-16 text-lg font-semibold ml-2 cursor-default"
                          >
                            {" "}
                            {plink.price}
                            {`\u00A0TL`}
                          </div>

                          <div
                            key={plink.uniqueId}
                            className="w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer"
                          >
                            <AiOutlinePlus
                              className="text-white  mt-1  ml-[5px]"
                              size={30}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCategory;
