import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const Basket = ({
  cardItems,
  setCardItems,
}: {
  cardItems: any;
  setCardItems: any;
}) => {
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
        <div className=" top-[28px] text-primary font-bold absolute left-[72px]">
          0,00 TL
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
                {cardItems?.map((item: any) => (
                  <ul className="w-[410px] h-[95px] overflow-y-auto ">
                    <div className="border absolute rounded w-[75px] h-[75px] ml-2 mt-2">
                      {" "}
                      <img alt="" src={item.quantImg}></img>
                    </div>
                    <div className="absolute w-[320px]  h-[80px]">
                      <div className="font-bold text-black text-sm absolute ml-[90px] flex flex-wrap mt-2">
                        {item.quantName}{" "}
                      </div>
                    </div>
                    <div className="bg-hemen font-bold w-[80px] rounded-tl-lg rounded-tr-lg rounded-br-lg items-center justify-center h-[40px] text-black text-sm absolute ml-[290px] mt-[40px] flex flex-wrap ">
                      {item.quantPrice}
                      {"TL "}
                    </div>
                    <div className="bg-white flex justify-center items-center w-[407px] shadow-lg absolute bottom-0  h-[80px]">
                      <div className="bg-primary text-white w-[380px] flex justify-center items-center text-center rounded font-semibold absolute bottom-4 h-[50px]">
                        Sepete Git
                      </div>
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
