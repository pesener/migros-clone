import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const BasketDetail = ({
  cardItems,
  setCardItems,
}: {
  cardItems: any;
  setCardItems: any;
}) => {
  const removeFromCard = (quantId: any) => {
    setCardItems((currItem: any) => {
      return currItem.filter((item: any) => item.quantId !== quantId);
    });
  };
  function handleProductCount(quantId: any) {
    setCardItems((currItems: any) => {
      if (currItems.find((item: any) => item.quantId === quantId) == null) {
        return [...currItems, { quantId, quantity: 1 }];
      } else {
        return currItems.map((item: any) => {
          if (item.quantId === quantId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const handleProductCountMinus = (quantId: any) => {
    setCardItems((currItem: any) => {
      if (
        currItem.find((item: any) => item.quantId === quantId)?.quantity === 1
      ) {
        return currItem.filter((item: any) => item.quantId !== quantId);
      } else {
        return currItem.map((item: any) => {
          if (item.quantId === quantId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  return (
    <div className="w-full h-[210px] text-blue bg-white absolute top-0 z-50">
      <div className=" border-b border-gray-300">
        {" "}
        <Link to={"/"}>
          <button className="cursor-pointer w-[185px] ml-[120px] h-[58px] mt-3  rounded-tl-lg rounded-tr-lg  bg-white ">
            <img
              className="w-[158px]  h-12 mb-2 my-1 ml-1   cursor-pointer"
              src="https://www.migros.com.tr/assets/logos/sanalmarket/sanalmarket-logo.svg"
              alt=""
            ></img>
          </button>
        </Link>
      </div>
      <div className="w-full h-[140px] bg-[#fef5eb] flex items-center justify-center">
        <div className="w-[1270px]  bg-white h-[86px] rounded-lg hover:bg-gray-100 flex items-center justify-between mr-[40px] cursor-pointer">
          <h1 className="text-[#02b61d] ml-[28px] text-[20px] font-bold  ">
            {" "}
            Sepetine Özel Fırsatlar (51 ürün)
          </h1>
          <div className="bg-gray-200 w-[42px] h-[42px] mr-8 rounded-full cursor-pointer">
            <BiChevronDown className="text-gray-600" size={40} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="h-[700px]">
          {" "}
          <div className="w-[1000px]   flex ">
            {" "}
            <div className="flex w-[1000px] justify-between">
              <div className="flex ">
                {" "}
                <div className=" ml-[125px] h-[40px] text-[27px] font-bold mt-[40px]">
                  Sepetim
                </div>
                <div className="text-md  h-[40px] text-gray-400 ml-2 font-semibold mt-[52px]">
                  {cardItems.length} Ürün
                </div>
              </div>
              <div className="text-primary font-bold  h-[40px] text-[16px] mt-[54px] mr-4 cursor-pointer">
                Sepeti Düzenle
              </div>
            </div>
          </div>
          <div>
            {cardItems?.map((item: any) => (
              <div className="border border-gray-300 ml-[120px] rounded-lg w-[870px] h-[165px] mb-4 flex">
                {" "}
                <div>
                  {" "}
                  <img
                    className="w-[140px] h-[140px] mt-3"
                    src={item.quantImg}
                    alt=""
                  />
                </div>
                <div className="font-semibold text-md mt-3 flex flex-col w-[400px]">
                  {" "}
                  {item.quantName}
                  <div className="bg-[#fdf2b8] text-[11px] font-semibold rounded w-[80px] mt-1 justify-center h-[20px] items-center flex">
                    {" "}
                    İndirimli ürün{" "}
                  </div>
                </div>
                <div className="flex flex-col ml-[200px]">
                  <div className="bg-[#fce24d] font-bold  w-[120px] rounded-tl-full rounded-r-full items-center  justify-center h-[48px] text-black text-[19px]   mt-4  flex   ">
                    {item.quantity > 1
                      ? (item.quantPrice * item.quantity).toFixed(2)
                      : item.quantPrice}
                    <div className="text-[12px] font-semibold mt-1 ">
                      {"\u00A0 TL"}
                    </div>
                  </div>
                  <div className="flex border-gray-100 border-2 rounded-lg w-[100px] h-[34px] justify-between  mt-12">
                    {" "}
                    <div
                      className={`${
                        item.quantity > 2 || item.quantity === 2
                          ? "text-gray-500 bg-[#f5f7fa] rounded-tl rounded-bl  w-[32px] h-[32px] flex justify-center items-center "
                          : "hidden"
                      } `}
                    >
                      <AiOutlineMinus
                        className={`${
                          item.quantity > 2 || item.quantity === 2
                            ? "text-gray-500 bg-[#f5f7fa] rounded-tl rounded-bl  w-[20px] h-[20px] cursor-pointer "
                            : "hidden"
                        } `}
                        onClick={() => {
                          handleProductCountMinus(item.quantId);
                        }}
                      />
                    </div>
                    <div
                      className={`${
                        item.quantity < 2 || item.quantity === 1
                          ? "w-[32px] bg-[#f5f7fa] h-[32px] flex items-center justify-center cursor-pointer"
                          : "hidden"
                      } `}
                    >
                      {" "}
                      <BsTrash3
                        className={`${
                          item.quantity < 2 || item.quantity === 1
                            ? "text-gray-500 bg-[#f5f7fa] rounded-tl rounded-bl w-[20px] h-[20px] "
                            : "hidden"
                        } `}
                        onClick={() => {
                          removeFromCard(item.quantId);
                        }}
                      />{" "}
                    </div>
                    <div className="flex flex-col text-xs font-semibold justify-center items-center">
                      {item.quantity}{" "}
                      <div className="text-xs font-normal"> adet</div>
                    </div>
                    <div className="text-gray-500 bg-[#f5f7fa] justify-center items-center flex   w-[32px] h-[32px] rounded-tr rounded-br  cursor-pointer">
                      <AiOutlinePlus
                        className="text-gray-500 bg-[#f5f7fa]   w-[20px] h-[20px] rounded-tr rounded-br "
                        onClick={() => {
                          handleProductCount(item.quantId);
                        }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sağ Taraf */}

        <div className="w-[550px]  h-[320px] flex  items-center">
          <div className="border border-gray-300 rounded-lg w-[420px] h-[320px] mt-[70px] ml-8 flex flex-col">
            <div className="flex mt-4 ml-6 justify-between h-[40px] ">
              <div className="text-lg  font-bold ">Sepet Özeti</div>{" "}
              <div className="mr-4 text-md text-gray-500">
                {cardItems.length} Ürün
              </div>
            </div>
            <div className="flex mt-4 ml-6 justify-between h-[40px] ">
              <div className="text-md text-gray-500 font-semibold ">
                Toplam Tutar
              </div>{" "}
              <div className="mr-4 text-md font-semibold text-gray-900">
                {cardItems?.map((item: any) =>
                  cardItems.reduce((total: any, cartItem: any) => {
                    cardItems?.find((i: any) => i.quantId === cartItem.quantId);
                    const itemsCount: Number =
                      total + (item?.quantPrice || 0) * cartItem.quantity;
                    console.log(total, "www", itemsCount);

                    return itemsCount;
                  }, 0)
                )}{" "}
                TL
              </div>
            </div>
            <div className="flex mt-4 ml-6 justify-between h-[40px] ">
              <div className="text-md text-[#02b61d] font-semibold ">
                Migros İndirimi
              </div>{" "}
              <div className="mr-4 text-md text-[#02b61d] ">-0,00 TL</div>
            </div>
            <div className="flex mt-4 ml-6 justify-between h-[40px] ">
              <div className="text-lg  font-bold ">Ödenecek Tutar</div>{" "}
              <div className="mr-4 text-md font-semibold  ">
                {" "}
                {cardItems?.map((item: any) =>
                  cardItems.reduce((total: any, cartItem: any) => {
                    cardItems?.find((i: any) => i.quantId === cartItem.quantId);
                    const itemsCount: Number =
                      total + (item?.quantPrice || 0) * cartItem.quantity;
                    console.log(total, "www", itemsCount);

                    return itemsCount;
                  }, 0)
                )}{" "}
                TL
              </div>
            </div>
            <div className="flex border-t justify-center items-center h-[100px] ">
              <div className="border w-[400px] h-[60px] flex justify-center bg-primary text-white font-bold text-md rounded-lg items-center cursor-pointer">
                Devam Et
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDetail;
