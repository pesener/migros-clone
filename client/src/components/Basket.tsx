import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Basket = ({
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
  useEffect(() => {
    const quantity = getItemQuantity(
      cardItems?.map((item: any) => item.quantId)
    );
  });

  function getItemQuantity(quantId: any) {
    return (
      cardItems.find((item: any) => item.quantId === quantId)?.quantity || 0
    );
  }
  return (
    <div className="absolute top-[90px] right-[125px] group/basket cursor-pointer">
      <div className="border-[1.6px] border-gray-300 w-[200px] h-[54px] rounded-lg ">
        <div className=" ml-4 flex mt-4 w-[30px] ">
          <FaShoppingCart size={22} />
        </div>

        <div className="border-2 border-white absolute bg-primary w-[20px] h-[20px] rounded-full top-2 left-[32px] flex items-center text-sm text-white justify-center">
          <div className="font-semibold mb-[2px]">
            {" "}
            <div>
              {cardItems.length === null
                ? "0"
                : cardItems.reduce(
                    (accum: any, item: any) => accum + item.quantity,
                    0
                  )}
            </div>
          </div>
        </div>

        <div className="font-bold top-2 absolute left-[68px]">Sepetim</div>
        <div className=" top-[30px] text-primary font-bold absolute left-[68px] w-[70px]">
          {cardItems.length === 0
            ? "0,00 TL"
            : cardItems.reduce((total: any, cartItem: any) => {
                const itemsCount: any =
                  total + cartItem?.quantPrice * cartItem?.quantity;

                console.log(total, "www", itemsCount);

                return +parseFloat(itemsCount).toFixed(1);
              }, 0)}{" "}
          TL
        </div>
        <div className=" top-[14px] font-bold absolute right-[12px]">
          <BiChevronDown size={30} />
        </div>
        <div
          className={` ${
            cardItems.length === 0
              ? "hidden group-hover/basket:flex rounded-lg border absolute w-[300px] top-[70px] right-[80px] bg-white h-[52px] shadow-[20px_5px_60px_-15px_rgba(0,0,0,0.3)]"
              : "hidden group-hover/basket:block absolute w-[410px] top-[50px] max-h-[540px] z-50 right-[2px] bg-opacity-100   "
          }`}
        >
          {cardItems.length === 0 ? (
            <div className="flex items-center justify-center ml-[64px]  ">
              {" "}
              Sepetiniz henüz boş
            </div>
          ) : (
            <div className="bg-white w-[410px] border-2 rounded bottom-[0px] mt-[20px]   shadow-[20px_5px_60px_-15px_rgba(0,0,0,0.3)] ">
              {" "}
              <div className="grid grid-cols-1 p-0 gap-0  w-[410px]  max-h-[520px]   ">
                <ul className="w-[410px] max-h-[520px] overflow-y-auto ">
                  {cardItems?.map((item: any) => (
                    <div className="flex flex-wrap mt-4">
                      <div className="border  rounded w-[70px] h-[80px] ml-2 mt-2">
                        {" "}
                        <img alt="" src={item.quantImg}></img>
                      </div>
                      <div className=" w-[320px]  h-[130px] ">
                        <div className="flex justify-between">
                          {" "}
                          <div className="font-bold   text-black text-sm  ml-[10px]  flex flex-wrap mt-3">
                            {item.quantName}{" "}
                          </div>
                          <div>
                            {" "}
                            <BsTrash3
                              className="text-gray-300 mr-6 mt-3"
                              size={20}
                              onClick={() => {
                                removeFromCard(item.quantId);
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex border-gray-500 border rounded w-[80px] justify-between ml-4 mt-4">
                          {" "}
                          <AiOutlineMinus
                            className={`${
                              item.quantity > 2 || item.quantity === 2
                                ? "text-gray-500 bg-gray-200  rounded-tl rounded-bl  w-[24px] h-[24px] "
                                : "hidden"
                            } `}
                            onClick={() => {
                              handleProductCountMinus(item.quantId);
                            }}
                          />
                          <BsTrash3
                            className={`${
                              item.quantity < 2 || item.quantity === 1
                                ? "text-gray-500 bg-gray-200 rounded-tl rounded-bl  w-[24px] h-[24px]  "
                                : "hidden"
                            } `}
                            onClick={() => {
                              removeFromCard(item.quantId);
                            }}
                          />{" "}
                          <div>{item.quantity}</div>
                          <AiOutlinePlus
                            className="text-gray-500 bg-gray-200   w-[24px] h-[24px] rounded-tr rounded-br "
                            onClick={() => {
                              handleProductCount(item.quantId);
                            }}
                          />{" "}
                        </div>
                        <div className="bg-[#fce24d] font-bold  w-[80px] rounded-tl-lg rounded-tr-lg rounded-br-lg items-center justify-center h-[40px] text-black text-sm  ml-[220px]   flex   ">
                          {item.quantity > 1
                            ? (item.quantPrice * item.quantity).toFixed(2)
                            : item.quantPrice}
                          {" TL"}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-white flex justify-center items-center w-[407px] shadow-lg    bottom-0  h-[80px]">
                    <Link to={"/basket"}>
                      <div className="bg-primary text-white w-[380px] flex justify-center items-center text-center rounded font-semibold  bottom-4 h-[50px]">
                        Sepete Git
                      </div>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
