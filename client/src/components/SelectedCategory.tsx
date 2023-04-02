import React, { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { getProduct } from "../axios/indexAxios";

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
        <div className="cursor-pointer mr-4">Anasayfa</div>{" "}
        <BiChevronRight size={20} />{" "}
        <div key={links._id} className=" cursor-default ml-4">
          {links.name}
        </div>{" "}
      </div>

      <div className="h-[700px] mt-5 absolute w-[340px]  border-2 rounded ml-[50px]">
        <div className="h-[100px] border-b ">
          {" "}
          <h1 key={links._id} className="ml-6 font-bold text-xl mt-4">
            {links.name}
          </h1>
          {links.sublinks?.map((mysublinks: any) => (
            <h1 key={mysublinks._id} className="ml-6 font-normal text-md mt-4">
              {mysublinks.length}
            </h1>
          ))}
        </div>
      </div>

      <div className="ml-[420px] mt-12 absolute z-0">
        {" "}
        <SutSlides />
      </div>
    </div>
  );
};

export default SelectedCategory;
