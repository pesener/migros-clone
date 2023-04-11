import React, { useEffect, useState } from "react";
import { getProducts } from "../axios/indexAxios";
import { Link } from "react-router-dom";

const CategoriesDropdown = () => {
  const [links, setLinks] = useState<any>([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setLinks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {" "}
      <div className=" ">
        {" "}
        <div className="group/underskin z-30  absolute flex mt-[20px] ml-[270px] font-bold text-sm ">
          {" "}
          <div className="ml-4 group-hover/underskin:text-primary cursor-pointer ">
            {" "}
            KAMPANYALAR{" "}
          </div>
          <div className="group-hover/underskin:bg-primary   absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        </div>
        <div className="group/underski z-30 absolute flex mt-[20px] ml-[400px] font-bold text-sm ">
          <div className=" ml-7 group-hover/underski:text-primary cursor-pointer  ">
            {" "}
            MİGROSKOP{" "}
          </div>
          <div className="group-hover/underski:bg-primary   absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        </div>
        <div className="group/undersk z-30 absolute flex mt-[20px] ml-[540px] font-bold text-sm ">
          <div className=" ml-0  w-[150px] group-hover/undersk:text-primary cursor-pointer ">
            {" "}
            ÇOKLU İNDİRİMLER{" "}
          </div>
          <div className="group-hover/undersk:bg-primary   absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        </div>
        <div className="group/unders z-30 absolute flex mt-[20px] ml-[700px] font-bold text-sm ">
          <div className=" ml-2 w-[170px] group-hover/unders:text-primary cursor-pointer ">
            MONEY İNDİRİMLİ
          </div>
          <div className="group-hover/unders:bg-primary   absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        </div>
      </div>
      <div className="relative flex z-20">
        <div className="ml-[125px]     w-[140px] mt-4 group  font-bold p-1   cursor-pointer text-sm   flex  ">
          <div className="flex group/underline ">
            {" "}
            <img
              src="https://www.migros.com.tr/assets/icons/categories.svg"
              alt="categories"
              className="mr-4 w-5 h-5 "
            />
            <div className=" "> KATEGORİLER </div>
            <div className="group-hover/underline:bg-primary   absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
          </div>

          <div className="group/close ">
            <div className="group-hover:bg-black z-0   group-hover:bg-opacity-20 hidden group-hover:flex inset-x-0   absolute   h-[700px] mt-[32px]  ">
              <div className="group-hover:bg-white group/info z-10 absolute  w-[230px]   h-[600px] ml-32 rounded-bl-lg flex-col">
                <div className="group-hover/info:bg-white  ml-[230px] absolute rounded-br-lg  z-1 w-[1080px] h-[600px]"></div>

                <div className="hover:bg-primary z-10 group/edit  hover:bg-opacity-20 h-10 w-[300px] flex  relative ">
                  <div className="absolute group-hover/edit:bg-primary h-[38px] w-[6px] rounded-br-lg rounded-tr-lg"></div>
                  <h1 className="text-green-600 group-hover/edit:text-primary z-10 mt-2 group/fix  ml-6 items-center ">
                    Tüm İndirimli Ürünler
                  </h1>{" "}
                  <div className="w-[28px] z-10 overflow-hidden absolute ml-[300px]">
                    <div className=" h-[64px] z-10  group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
                  </div>{" "}
                </div>
                <div className="hover:bg-primary  z-10 group/edit hover:bg-opacity-20 h-10 w-[300px] relative flex  ">
                  <div className="absolute group-hover/edit:bg-primary h-[38px] w-[6px] rounded-br-lg rounded-tr-lg"></div>
                  <h1 className="text-primary z-10 mt-2 ml-6">
                    Sadece Migros'ta
                  </h1>
                  <div className="w-[28px] z-10  overflow-hidden absolute ml-[300px]">
                    <div className=" h-[64px] z-10 group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
                  </div>{" "}
                </div>
                {links.map((link: any) => (
                  <div key={link.name} className="group/link">
                    <div
                      key={link.name}
                      className="hover:bg-primary  z-10 group/edit hover:bg-opacity-20 h-10 w-[300px] relative flex  "
                    >
                      <div className="absolute group-hover/edit:bg-primary h-[38px] w-[6px] rounded-br-lg rounded-tr-lg"></div>
                      <Link
                        to={`/products/${link._id}`}
                        key={link.name}
                        className="text-black font-normal  group-hover/edit:text-primary z-10 mt-2 ml-6"
                      >
                        <h1 key={link.name}>{link.name}</h1>
                      </Link>
                      <div className="w-[28px] z-10  overflow-hidden absolute ml-[300px]">
                        <div className=" h-[64px] z-10  group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
                      </div>{" "}
                    </div>
                    {link.submenu && (
                      <div>
                        <div className="absolute ml-[300px] h-[600px] top-0 z-9 w-[1000px] hidden group-hover/link:block hover:block ">
                          <div className="">
                            <div
                              className="w-12 h-12  absolute 
                   bg-white "
                            ></div>
                          </div>
                          <div className="bg-white  ml-[100px] z-10 grid grid-cols-2">
                            {link.sublinks.map((mysublinks: any) => (
                              <div key={mysublinks.Head}>
                                <h1
                                  key={mysublinks.Head}
                                  className="text-sm flex items-center text-primary hover:underline decoration-primary p-5 h-[10px] w-[300px]"
                                >
                                  {mysublinks.Head}
                                </h1>
                                <div className="    items-center w-[420px] flex-wrap flex ml-[20px] ">
                                  {mysublinks.sublink.map(
                                    (slink: any, i: any) => (
                                      <div
                                        key={slink.name}
                                        className="text-xs text-gray-900 items-center h-[30px] "
                                      >
                                        {" "}
                                        <span
                                          key={slink.name}
                                          className="hover:text-primary  items-center font-normal  "
                                        >
                                          {slink.name}
                                          {i === mysublinks.sublink.length - 1
                                            ? " "
                                            : `${","}\u00A0`}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
