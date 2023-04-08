import React, { useState, useEffect } from "react";
import { getProduct } from "../axios/indexAxios";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Detail = ({ id, sid }: { id: any; sid: any }) => {
  const [links, setLinks] = useState<any>([]);

  useEffect(() => {
    getProduct(sid)
      .then((res: any) => {
        setLinks(res.data);
        console.log(res.data);
        console.log(sid, " başarı id");
      })
      .catch((err: any) => {
        console.log(err);
        console.log(sid, " hata id");
      });
  }, [sid]);

  return (
    <div className="relative flex w-full h-full">
      {" "}
      <div className="relative flex">
        <div className=" w-[450px] ml-[129px] absolute -top-6 flex items-center  text-sm">
          <Link to={`/`}>
            <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
          </Link>
          <BiChevronRight size={20} />{" "}
          <Link to={`/products/${sid}`}>
            <div className="cursor-pointer  ml-2">{links?.name}</div>{" "}
          </Link>
          <BiChevronRight size={20} />
          {links?.sublinks?.map((mysublinks: any) => (
            <div className="cursor-default ml-1 "> {mysublinks.SubHead}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2">
          {links?.sublinks?.map((mysublinks: any) => (
            <div key={mysublinks.name} className=" ">
              {mysublinks.product?.map((plink: any) => (
                <div key={plink.name} className=" ">
                  <div className="">
                    {id === plink.id ? (
                      <div className=" border border-gray-400 rounded-lg w-[600px] h-[600px]  ml-32 flex items-center justify-center">
                        <img
                          className=" w-[450px]  h-[450px] "
                          alt=""
                          src={plink.img}
                        />
                      </div>
                    ) : (
                      <div className="hidden  ">{""}</div>
                    )}{" "}
                  </div>

                  <div>
                    {" "}
                    {id === plink.id ? (
                      <div className="text-black text-lg font-bold">
                        {plink.name}{" "}
                      </div>
                    ) : (
                      <div className="hidden  ">{""}</div>
                    )}{" "}
                  </div>
                  <div>
                    {" "}
                    {id === plink.id ? (
                      <div className="text-black text-lg font-bold">
                        {plink.price}{" "}
                      </div>
                    ) : (
                      <div className="hidden  ">{""}</div>
                    )}{" "}
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

export default Detail;
