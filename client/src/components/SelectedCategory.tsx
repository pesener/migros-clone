import React, { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import { getProduct } from "../axios/indexAxios";
import ProductCards from "./ProductCards";

const SelectedCategory = ({ id }: { id: any }) => {
  const [links, setLinks] = useState<any>([]);

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
    <div className="w-full absolute top-[220px] h-[1500px] z-0 ">
      <div className=" w-[250px] ml-[25px]  flex items-center justify-center text-sm">
        <Link to={`/`} key={links._id}>
          <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
        </Link>
        <BiChevronRight size={20} />{" "}
        <div className=" cursor-default ml-2">{links?.name}</div>{" "}
      </div>

      <div className="h-[700px] mt-5 absolute w-[330px]  border-2 rounded-lg ml-[55px]">
        <div className="h-[85px] border-b ">
          {" "}
          <h1 key={links._id} className="ml-6 font-bold text-xl mt-4">
            {links?.name}
          </h1>
          <div className="flex flex-col">
            {" "}
            {links?.sublinks?.map((mysublinks: any) => (
              <div>
                <h1
                  key={mysublinks.id}
                  className="ml-6 font-normal text-md mt-4"
                >
                  {}
                </h1>
                {mysublinks.sublink?.map((slink: any) => (
                  <span
                    key={slink._id}
                    className="  items-center font-normal  "
                  >
                    {slink.length}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="border-b h-[80px]">
            {" "}
            <div className="cursor-default absolute top-32 font-semibold ml-6 text-lg">
              Alt Kategoriler
            </div>{" "}
            {links?.sublinks?.map((mysublinks: any) => (
              <h1
                key={mysublinks.id}
                className="ml-6 font-normal text-md  cursor-pointer "
              >
                {mysublinks.SubHead}
              </h1>
            ))}
          </div>
        </div>
        <div className="ml-[370px] top-8 absolute z-0">
          {" "}
          <SutSlides />
        </div>
      </div>
      <div className="ml-[420px] mt-[330px]  grid grid-cols-5">
        {links?.sublinks?.map((mysublinks: any) => (
          <div className="grid grid-cols-2">
            <div className="h-[380px] w-[210px] border mb-3 border-gray-400 rounded">
              <div>
                {" "}
                <div>
                  <h1
                    key={mysublinks.id}
                    className="ml-6 font-normal text-md mt-4"
                  >
                    {}
                  </h1>
                  {mysublinks.sublink?.map((slink: any) => (
                    <span
                      key={slink._id}
                      className="items-center font-normal  "
                    >
                      <img alt="" src={slink.img} />
                      {slink.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-[40px] h-[40px] shadow-xl relative mt-[10px]  bg-primary   ml-[150px] rounded cursor-pointer">
                <AiOutlinePlus
                  className="text-white absolute mt-1 ml-[5px]"
                  size={30}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategory;
