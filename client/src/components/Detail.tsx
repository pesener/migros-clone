import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

import { fetchOneProduct } from "../actions/oneProductAction";
import { useAppDispatch, useAppSelector } from "../index";

const Detail = ({
  id,
  sid,
  cardItems,
  setCardItems,
}: {
  id: any;
  sid: any;
  cardItems: any;
  setCardItems: any;
}) => {
  const dispatch = useAppDispatch();
  const linkOne = useAppSelector((state) => state.linkOne);
  const [quantId, setQuantId] = useState<any>();
  const [quantName, setQuantName] = useState<string>();
  const [quantPrice, setQuantPrice] = useState<number>();
  const [quantImg, setQuantImg] = useState<string>();
  useEffect(() => {
    dispatch(fetchOneProduct(sid));
    console.log(sid, " başarı id");
  }, [sid]);

  const quantity = getItemQuantity(quantId);
  console.log(quantity);
  console.log(quantId);

  function getItemQuantity(quantId: string) {
    return (
      cardItems.find((item: any) => item.quantId === quantId)?.quantity || 0
    );
  }
  function handleProductCount(id: string) {
    setCardItems((currItems: any) => {
      if (
        currItems.find((item: any) => item.quantId === id) == null &&
        quantName !== undefined &&
        quantImg !== undefined &&
        quantPrice !== undefined &&
        quantId === id
      ) {
        return [
          ...currItems,
          { quantName, quantImg, quantPrice, quantId, quantity: 1 },
        ];
      } else {
        return currItems.map((item: any) => {
          if (item.quantId === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  const handleProductCountMinus = (id: string) => {
    setCardItems((currItem: any) => {
      if (currItem.find((item: any) => item.quantId === id)?.quantity === 1) {
        return currItem.filter((item: any) => item.quantId !== id);
      } else {
        return currItem.map((item: any) => {
          if (item.quantId === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCard = (quantId: any) => {
    setCardItems((currItem: any) => {
      return currItem.filter((item: any) => item.quantId !== quantId);
    });
  };

  return (
    <div className="relative flex w-full h-full">
      {" "}
      <div>
        <div className="relative flex">
          <div className=" w-[900px] ml-[129px] absolute -top-6 flex items-center  text-sm">
            <Link to={`/`}>
              <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
            </Link>
            <BiChevronRight size={20} />{" "}
            <Link to={`/products/${sid}`}>
              <div className="cursor-pointer  ml-2">{linkOne?.name}</div>{" "}
            </Link>
            <BiChevronRight size={20} />
            {linkOne?.sublinks?.map((mysublinks: any) => (
              <Link to={`/products/${sid}`}>
                <div className="cursor-pointer ml-1  ">
                  {" "}
                  {mysublinks.SubHead}
                </div>
              </Link>
            ))}
            <BiChevronRight size={20} />
            {linkOne?.sublinks?.map((mysublinks: any) =>
              mysublinks.product?.map((plink: any) => (
                <div className="cursor-default ">
                  {" "}
                  {id === plink.id ? plink.name : ""}
                </div>
              ))
            )}
          </div>
          <div className="mt-2 grid grid-cols-2">
            {linkOne?.sublinks?.map((mysublinks: any) => (
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
                            <div
                              className={`font-bold text-white ml-4 mt-4 bg-primary w-[190px] h-[60px] rounded flex items-center justify-center cursor-pointer ${
                                quantId === plink.id && quantity > 0
                                  ? "hidden"
                                  : ""
                              }`}
                              onClick={() => {
                                setQuantId(plink.id);
                                setQuantName(plink.name);
                                setQuantPrice(plink.price);
                                setQuantImg(plink.img);
                                handleProductCount(plink.id);
                              }}
                            >
                              Sepete Ekle
                            </div>
                            <div
                              className={`w-[190px] h-[60px]  border-gray-500 border mt-[14px]   mx-[10px] rounded cursor-pointer ${
                                quantId === plink.id && quantity > 0
                                  ? "flex"
                                  : "hidden"
                              }`}
                            >
                              <div className="w-[65px] rounded-tl rounded-bl h-[58.8px]  bg-gray-100 flex items-center justify-center">
                                {" "}
                                <BsTrash3
                                  className={` ${
                                    quantity > 1
                                      ? "hidden"
                                      : "text-gray w-8 h-8 "
                                  }  `}
                                  onClick={() => {
                                    // setOpenPlus(false);
                                    removeFromCard(plink.id);
                                  }}
                                />{" "}
                                <AiOutlineMinus
                                  className={`${
                                    quantity > 2 || quantity === 2
                                      ? "text-gray w-8 h-8 "
                                      : "hidden"
                                  } `}
                                  onClick={() => {
                                    handleProductCountMinus(plink.id);
                                  }}
                                />
                              </div>
                              <div className="w-[55px] h-[58.8px] flex items-center ml-4  justify-center text-center font-semibold">
                                {quantity} Adet
                              </div>
                              <div className="w-[65px] rounded-tr rounded-br h-[58.8px]   bg-gray-100 flex items-center justify-center ml-4">
                                {" "}
                                <AiOutlinePlus
                                  className="text-gray  w-8 h-8  "
                                  onClick={() => {
                                    handleProductCount(plink.id);
                                  }}
                                />{" "}
                              </div>
                            </div>
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
                              Mağaza stoklarıyla sınırlıdır. Ürünün stok, fiyat
                              ve kampanya bilgisi teslimat bölgenize göre
                              değişiklik gösterebilmektedir.{" "}
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
    </div>
  );
};

export default Detail;
