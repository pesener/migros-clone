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
      <div className="ml-[125px]   w-[140px] mt-4 group group/underline font-bold p-1   cursor-pointer text-sm  flex  ">
        <img
          src="https://www.migros.com.tr/assets/icons/categories.svg"
          alt="categories"
          className="mr-4 w-5 h-5 "
        />
        <span className="flex-col"> KATEGORİLER </span>
        <div className="group-hover/underline:bg-primary absolute mt-[26px]  w-[140px] h-[7px] rounded-tr-lg rounded-tl-lg"></div>
        <div className="group-hover:bg-black  group-hover:bg-opacity-20 hidden group-hover:flex inset-x-0   absolute   h-[700px] mt-[32px]  ">
          <div className="group-hover:bg-white group/info z-10 absolute  w-[230px]   h-[600px] ml-32 rounded-bl-lg flex-col">
            <div className="group-hover/info:bg-white  ml-[230px] absolute rounded-br-lg rounded-bl-lg z-0 w-[1080px] h-[600px]"></div>

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
              <h1 className="text-primary z-10 mt-2 ml-6">Sadece Migros'ta</h1>
              <div className="w-[28px] z-10  overflow-hidden absolute ml-[300px]">
                <div className=" h-[64px] z-10  group-hover/edit:bg-primary group-hover/edit:bg-opacity-20 rotate-45 transform origin-top-left"></div>
              </div>{" "}
            </div>
            {links.map((link: any) => (
              <div className="group/link">
                <div className="hover:bg-primary  z-10 group/edit hover:bg-opacity-20 h-10 w-[300px] relative flex  ">
                  <div className="absolute group-hover/edit:bg-primary h-[38px] w-[6px] rounded-br-lg rounded-tr-lg"></div>
                  <h1
                    key={link.name}
                    className="text-black font-normal group-hover/edit:text-primary z-10 mt-2 ml-6"
                  >
                    {link.name}
                  </h1>
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
                      <div className="bg-white  ml-[100px] grid grid-cols-2">
                        {link.sublinks.map((mysublinks: any) => (
                          <div>
                            <h1
                              key={mysublinks.Head}
                              className="text-sm flex items-center text-primary hover:underline decoration-primary p-5 h-[10px] w-[300px]"
                            >
                              {mysublinks.Head}
                            </h1>
                            {mysublinks.sublink.map((slink: any) => (
                              <h3 className="text-sm text-gray-900 ">
                                <dd className="hover:text-primary font-normal ml-[20px]">
                                  {slink.name}
                                </dd>
                              </h3>
                            ))}
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
  );
};

export default CategoriesDropdown;
