import React, { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
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
    <div className="">
      <div className="w-full  top-[220px] h-[1500px] z-0 ">
        <div className=" w-[250px] ml-[25px]  flex items-center justify-center text-sm">
          <Link to={`/`}>
            <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
          </Link>
          <BiChevronRight size={20} />{" "}
          <div className=" cursor-default ml-2">{links?.name}</div>{" "}
        </div>

        <div className="h-[700px] mt-5 absolute w-[330px]  border-2 rounded-lg ml-[55px]">
          <div className="h-[85px] border-b ">
            {" "}
            <h1 key={links.name} className="ml-6 font-bold text-xl mt-4">
              {links?.name}
            </h1>
            <div className="flex flex-col">
              {" "}
              {links?.sublinks?.map((mysublinks: any) => (
                <div>
                  <h1 className="ml-6 font-normal text-md mt-4">{}</h1>
                  {mysublinks.sublink?.map((slink: any) => (
                    <span
                      key={slink.name}
                      className="  items-center font-normal  "
                    >
                      {}
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
                  key={mysublinks.SubHead}
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
        <div className="ml-[420px] mt-[330px] ">
          {links?.sublinks?.map((mysublinks: any) => (
            <div key={mysublinks.index} className="grid grid-cols-5  ">
              {mysublinks.product?.map((plink: any) => (
                <div key={plink.index} className=" ">
                  <div
                    key={plink.index}
                    className=" h-[400px] ml- w-[220px] relative border mb-3 border-gray-400 rounded "
                  >
                    <Link to={`/details/${plink.id}`} key={plink.name}>
                      <img
                        key={plink.img}
                        alt=""
                        className="mt-2 cursor-pointer"
                        src={plink.img}
                      />
                      <div
                        key={plink.name}
                        className="font-semibold mx-2 text-sm cursor-pointer"
                      >
                        {plink.name}
                      </div>
                    </Link>
                    <br></br>

                    <div
                      key={plink.price}
                      className="text-primary absolute bottom-16 text-xl font-semibold ml-2 cursor-default"
                    >
                      {" "}
                      {plink.price}{" "}
                    </div>

                    <div
                      key={plink.index}
                      className="w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer"
                    >
                      <AiOutlinePlus
                        className="text-white  mt-1  ml-[5px]"
                        size={30}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCategory;
