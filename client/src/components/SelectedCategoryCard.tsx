import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

const SelectedCategoryCard = ({
  plink,
  cardItems,
  setQuantId,
  setQuantName,
  setQuantPrice,
  setQuantImg,
  removeFromCard,
  handleProductCount,
  handleProductCountMinus,
}: {
  plink: any;
  cardItems: any;
  setQuantId: any;
  setQuantName: any;
  setQuantPrice: any;
  setQuantImg: any;
  removeFromCard: any;
  handleProductCount: any;
  handleProductCountMinus: any;
}) => {
  return (
    <div>
      {" "}
      <div key={plink.uniqueId} className=" p-0">
        <div
          key={plink.uniqueId}
          className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
        >
          <Link to={`/details/${plink.id}`} key={plink.uniqueId}>
            <img
              key={plink.uniqueId}
              alt=""
              className="mt-2 cursor-pointer"
              src={plink.img}
            />
            <div
              key={plink.uniqueId}
              className="font-semibold mx-2 text-sm cursor-pointer"
            >
              {plink.name}
            </div>
          </Link>
          <br></br>

          <div
            key={plink.uniqueId}
            className="text-primary absolute bottom-16 text-xl font-semibold ml-2 cursor-default"
          >
            {plink.price}TL
          </div>

          <div
            key={plink.uniqueId}
            className={`w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer ${
              cardItems.some(
                (finder: any) =>
                  finder.quantId === plink.id && finder.quantity > 0
              )
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
            <AiOutlinePlus
              className={`text-white  mt-1  ml-[5px] ${
                cardItems.some(
                  (finder: any) =>
                    finder.quantId === plink.id && finder.quantity > 0
                )
                  ? "hidden"
                  : ""
              } `}
              size={30}
            />
          </div>
          <div
            className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
              cardItems.find(
                (finder: any) =>
                  finder.quantId === plink.id && finder.quantity > 0
              )
                ? "flex"
                : "hidden"
            }`}
          >
            <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
              <div>
                <BsTrash3
                  className={`text-primary w-5 h-5 ${
                    cardItems.find(
                      (item: any) =>
                        item.quantId === plink.id && item.quantity === 1
                    )
                      ? "text-primary w-5 h-5"
                      : "hidden"
                  }`}
                  onClick={() => {
                    removeFromCard(plink.id);
                  }}
                />
              </div>
              <AiOutlineMinus
                className={`text-primary ${
                  cardItems.find(
                    (item: any) =>
                      item.quantId === plink.id && item.quantity > 1
                  )
                    ? "text-primary"
                    : "hidden"
                }`}
                onClick={() => {
                  handleProductCountMinus(plink.id);
                }}
              />
            </div>

            <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
              {cardItems.map((item: any) =>
                item.quantId === plink.id ? item.quantity : ""
              )}{" "}
              Adet
            </div>
            <div className="w-[35px] rounded-tr rounded-br h-[33.8px]   bg-orange-100 flex items-center justify-center right-0 absolute">
              {" "}
              <AiOutlinePlus
                className="text-primary   w-5 h-5 "
                onClick={() => {
                  handleProductCount(plink.id);
                }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCategoryCard;
