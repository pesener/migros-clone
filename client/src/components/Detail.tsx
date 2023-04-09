import React, { useState, useEffect } from "react";
import { getProduct } from "../axios/indexAxios";
import { BiChevronRight } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";

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
                <div key={plink.name} className=" grid grid-cols-2 ">
                  <div className="">
                    {id === plink.id ? (
                      <div className=" border border-gray-400 rounded-lg w-[570px] h-[570px]  ml-32 flex items-center justify-center">
                        <img
                          className=" w-[450px]  h-[450px] "
                          alt=""
                          src={plink.img}
                        />
                      </div>
                    ) : (
                      <div className="hidden">{""}</div>
                    )}{" "}
                  </div>

                  <div>
                    {" "}
                    {id === plink.id ? (
                      <div className="ml-[340px]  rounded-lg border border-gray-400 absolute w-[700px] h-[430px]">
                        <div className="text-black text-xl font-bold mt-4 ml-4">
                          {" "}
                          {plink.name}{" "}
                          <div className="text-blue-700 hover:text-primary text-base mt-4 cursor-pointer">
                            {plink.brand}
                          </div>
                        </div>
                        {id === plink.id ? (
                          <div className="text-primary text-lg   font-semibold ml-4 mt-4 mb-4 ">
                            {plink.price} TL
                          </div>
                        ) : (
                          <div className="hidden  ">{""}</div>
                        )}{" "}
                        <div className="border-b border-2"></div>
                        <div className="font-bold text-black ml-4 mt-4">
                          Adet
                        </div>
                        <div className="flex">
                          {" "}
                          <button className="font-bold text-white ml-4 mt-4 bg-primary w-[190px] h-[60px] rounded">
                            Sepete Ekle
                          </button>
                          <div className="w-[60px] text-gray-300 h-[60px] border mt-4 ml-4 rounded border-gray-300 flex items-center justify-center">
                            <BsHeart size={30} />
                          </div>
                        </div>
                        <div className="border-b border-2 mt-4"></div>
                        <div className="flex flex-col ml-4 mt-2 mb-2">
                          <li className="text-sm marker:text-primary text-gray-600 mb-2 marker:text-lg">
                            Bu üründen en fazla 4 adet sipariş verilebilir.
                            Belirtilen adet üzerindeki siparişlerin iptal
                            edilmesi hakkı saklıdır.
                          </li>
                          <li className="text-sm marker:text-primary text-gray-600 marker:text-lg">
                            Mağaza stoklarıyla sınırlıdır. Ürünün stok, fiyat ve
                            kampanya bilgisi teslimat bölgenize göre değişiklik
                            gösterebilmektedir.{" "}
                          </li>
                        </div>
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
