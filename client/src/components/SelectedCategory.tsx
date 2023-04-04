import React, { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <div className="w-full h-[1500px] z-0 ">
      <div className=" w-[250px] ml-[50px] flex items-center justify-center text-sm">
        <Link to={`/`} key={links._id}>
          <div className="cursor-pointer mr-4">Anasayfa</div>{" "}
        </Link>
        <BiChevronRight size={20} />{" "}
        <div className=" cursor-default ml-4">{links?.name}</div>{" "}
      </div>

      <div className="h-[700px] mt-8 absolute w-[340px]  border-2 rounded ml-[50px]">
        <div className="h-[100px] border-b ">
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
        <div className="ml-[420px] top-8 absolute z-0">
          {" "}
          <SutSlides />
        </div>
      </div>
      <div className="ml-[470px] mt-[330px]">
        <ProductCards />
      </div>
    </div>
  );
};

export default SelectedCategory;
