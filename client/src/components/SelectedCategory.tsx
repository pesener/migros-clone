import { useEffect, useState } from "react";
import SutSlides from "./slides/sutSlides";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineCloseCircle,
  AiOutlineMinus,
} from "react-icons/ai";
import { TbArrowsDownUp } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { fetchOneProduct } from "./actions/oneProductAction";
import { useAppDispatch, useAppSelector } from "../index";

const SelectedCategory = ({
  id,

  cardItems,
  setCardItems,
}: {
  cardItems: any;
  setCardItems: any;
  id: any;
}) => {
  const dispatch = useAppDispatch();
  const linkOne = useAppSelector((state) => state.linkOne);

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id]);

  ///FILTERING STATES
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("Önerilenler");
  const [selectedFilter, setSelectedFilter] = useState<any>([]);
  const [filteredBrands, setFilteredBrands] = useState<any>();
  const [filteredBrands2, setFilteredBrands2] = useState<any>();
  // const [openPlus, setOpenPlus] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<any[]>([]);
  ///BASKET STATES
  const [quantId, setQuantId] = useState<any>();
  const [quantName, setQuantName] = useState<string>();
  const [quantPrice, setQuantPrice] = useState<any>();
  const [quantImg, setQuantImg] = useState<string>();

  const sortData = [
    { name: "Önerilenler" },
    { name: "Önce En Düşük Fiyat" },
    { name: "Önce En Yüksek Fiyat" },
  ];

  ///FILTERING FUNCTIONS

  const filterBrands = (input: any) => {
    const inputter = filteredBrands2.filter((item: any) =>
      item.brand
        .toLocaleLowerCase("tr-TR")
        .startsWith(input.toLocaleLowerCase("tr-TR"))
    );
    setFilteredBrands(inputter);
    console.log(inputter, "ddd");
    console.log(selectedFilter);
  };
  useEffect(() => {
    linkOne.name === "Meyve, Sebze"
      ? setFilteredBrands(linkOne?.sublinks[0]?.product)
      : linkOne.name === "Süt, Kahvaltılık"
      ? setFilteredBrands(linkOne?.sublinks[2]?.product)
      : console.log(filteredBrands);
  }, [linkOne]);

  useEffect(() => {
    linkOne.name === "Meyve, Sebze"
      ? setFilteredBrands2(linkOne?.sublinks[0]?.product)
      : linkOne.name === "Süt, Kahvaltılık"
      ? setFilteredBrands2(linkOne?.sublinks[2]?.product)
      : console.log(filteredBrands);
  }, [filterBrands, selectedFilter]);

  const handleRemoveFilterOne = (index: any, checkboxValue: string) => {
    selectedFilter.splice(index, 1);
    setSelectedFilter(Array.from(selectedFilter));
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.filter((checkbox) => checkbox.value !== checkboxValue)
    );
  };

  const handleRemoveFilter = (index: any) => {
    selectedFilter.splice(index);
    setSelectedFilter(Array.from(selectedFilter));
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.filter((checkbox) => checkbox.value === false)
    );
  };

  const handleChangeCheck = (event: any, checkboxValue: string) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedFilter((pre: any) => [...pre, value]);
      setCheckboxes((prevCheckboxes) => [
        ...prevCheckboxes,
        { value: checkboxValue, checked: true },
      ]);
    } else {
      setSelectedFilter((pre: any) => {
        return [...pre.filter((x: any) => x !== value)];
      });
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.filter((checkbox) => checkbox.value !== checkboxValue)
      );
    }
  };

  ///BASKET FUNCTIONS
  const quantity = getItemQuantity(quantId);

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
          {
            quantName,
            quantImg,
            quantPrice,
            quantId,
            quantity: 1,
          },
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

  const removeFromCard = (quantId: any) => {
    setCardItems((currItem: any) => {
      return currItem.filter((item: any) => item.quantId !== quantId);
    });
  };
  /////

  // const handleProductCount = (index: any) => {
  //   setCountProduct(countProduct + 1);
  // };

  // const handleProductCount = (id: any) => {
  //   return cardItems.find((item) => item.id === id)?.quantity || 0;
  // };

  // const handleProductCount = (id: any) => {
  //   setCardItems((currItem) => {
  //     if (currItem.find((item) => item.id === id) == null) {
  //       return [...currItem, { id, quantity: 1 }];
  //     } else {
  //       return currItem.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  // const handleProductCountMinus = (id: any) => {
  //   setCardItems((currItem) => {
  //     if (currItem.find((item) => item.id === id)?.quantity === 1) {
  //       return currItem.filter((item) => item.id !== id);
  //     } else {
  //       return currItem.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };
  // const handleProductCountMinus = (index: any) => {
  //   setCountProduct(countProduct - 1);
  // };
  console.log(cardItems);

  console.log(quantId);
  console.log(selectedFilter);
  console.log(quantPrice);
  console.log(quantName);

  console.log(quantity);

  return (
    <div className="">
      <div className="w-full  top-[220px] h-[1500px] z-0 ">
        <div className=" w-[250px] ml-[25px]  flex items-center justify-center text-sm">
          <Link to={`/`}>
            <div className="cursor-pointer mr-2">Anasayfa</div>{" "}
          </Link>
          <BiChevronRight size={20} />{" "}
          <div className=" cursor-default ml-2">{linkOne?.name}</div>{" "}
        </div>

        <div className="h-[700px] mt-5 absolute w-[330px]  border-2 rounded-lg ml-[55px] ">
          <div className="h-[85px] border-b ">
            {" "}
            <h1 key={linkOne.uniqueId} className="ml-6 font-bold text-xl mt-4">
              {linkOne?.name}
            </h1>
            <div className="flex flex-col">
              {" "}
              {linkOne?.sublinks?.map((mysublinks: any) => (
                <div>
                  <h1 className="ml-6 font-normal text-md mt-4">{}</h1>
                  {mysublinks.sublink?.map((slink: any) => (
                    <span
                      key={slink.uniqueId}
                      className="  items-center font-normal  "
                    >
                      {}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-b h-[100px]">
              {" "}
              <div className="cursor-default absolute top-28 font-bold ml-6 text-lg">
                Alt Kategoriler
              </div>{" "}
              {linkOne?.sublinks?.map((mysublinks: any) =>
                mysublinks.product?.map((item: any) => (
                  <h1
                    key={mysublinks.uniqueId}
                    className="ml-6 font-normal text-md  cursor-pointer  absolute top-[160px]"
                  >
                    {mysublinks.SubHead}
                    {`\u00A0 (${mysublinks.product.length})`}
                  </h1>
                ))
              )}
            </div>
            <div className=" h-[40px] absolute font-bold ml-6 mt-6 text-lg">
              {" "}
              Markalar
            </div>
            <div className="border-b">
              <input
                placeholder="Marka Ara"
                className="border-black indent-3 outline-none mt-20 rounded w-[280px] focus:border-[2.4px] h-[55px] mx-6 border hover:border-[1.6px] "
                onChange={(e) => filterBrands(e.target.value)}
              ></input>
              <ul className="ml-6 mt-6  flex flex-col  h-40 w-[250px]  overflow-y-auto  justify-start">
                {filteredBrands
                  ?.filter(
                    (x: any, index: any) =>
                      filteredBrands.findIndex(
                        (data: any) =>
                          data.brand === x.brand &&
                          data.brand_Comp === x.brand_Comp
                      ) === index
                  )
                  .map(
                    (item: any) => (
                      <div className="flex items-center mb-2">
                        <input
                          id={`checkbox_${item.id}`}
                          className="w-5 h-5 cursor-pointer text-orange-300 accent-orange-300  border-gray-300 hover:border-gray-800 rounded   mr-2  "
                          type="checkbox"
                          key={item.brand}
                          checked={checkboxes.some(
                            (checkbox: any) => checkbox.value === item.brand
                          )}
                          value={item.brand}
                          onChange={(event) => {
                            handleChangeCheck(event, item.brand);
                          }}
                        />

                        <label>{item.brand}</label>
                      </div>
                    )
                    // .includes(brandInput)
                  )}
              </ul>
            </div>
          </div>
          <div className="ml-[365px] top-8 absolute z-0">
            {" "}
            {selectedFilter.length === 0 ? (
              <SutSlides />
            ) : (
              <div>
                <div className="flex flex-wrap items-center mt-[20px] w-[750px] h-[100px] ">
                  {selectedFilter?.map((item: any, index: any) => (
                    <div className="text-lg mr-2 flex justify-center items-center hover:bg-gray-200 border border-gray-400 rounded-lg px-4">
                      <div className="mr-3 cursor-default flex">
                        {" "}
                        {selectedFilter.length !== 0 ? item : ""}
                      </div>
                      <div
                        className="text-primary font-normal cursor-pointer"
                        onClick={() => handleRemoveFilterOne(index, item)}
                      >
                        <AiOutlineCloseCircle />
                      </div>
                    </div>
                  ))}
                  <div
                    className="text-primary font-semibold text-sm ml-3  w-[140px] cursor-pointer"
                    onClick={(index) => handleRemoveFilter(index)}
                  >
                    Filtreleri Temizle ({selectedFilter.length})
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`w-[260px] h-[55px] ${
              selectedFilter.length !== 0 ? "mt-[0px]  " : ""
            }  border-black absolute ml-[1190px] rounded mt-[170px] cursor-pointer`}
          >
            <div>
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`  p-1 rounded  h-[56px]  transition duration-200 ${
                  open ? "border-[2.4px] " : " border hover:border-[1.6px] "
                }  border  border-black flex justify-between items-center  font-bold cursor-pointer`}
              >
                {selectedItem ? (
                  <h1 className="text-black mx-auto text-md  truncate">
                    {selectedItem}
                  </h1>
                ) : (
                  <h3 className="text-black ml-12 text-md">
                    {sortData[0].name}
                  </h3>
                )}
              </div>
              <ul
                className={`bg-white  overflow-y-auto w-[255px]  shadow-gray-400 shadow-sm rounded-b-lg ${
                  open ? "h-50 border  absolute mt-[10px] z-10 " : "max-h-0"
                }`}
              >
                {sortData?.map((item: any) => (
                  <option
                    onClick={() => {
                      setSelectedItem(item.name);
                      setOpen(!open);
                    }}
                    className={`p-4  text-md cursor-pointer  hover:text-orange-400 active:bg-gray-200    ${
                      item?.name === selectedItem && "text-orange-400"
                    }  `}
                  >
                    {item.name}
                  </option>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`text-black font-bold ml-[1205px] mt-[190px] absolute ${
              selectedFilter.length !== 0 ? "mt-[18px]" : ""
            }  `}
          >
            <TbArrowsDownUp size={22} />
          </div>
          <div
            className={`text-gray-400  ml-[1400px] absolute top-[280px] ${
              selectedFilter.length !== 0 ? "top-[110px]" : ""
            }`}
          >
            <BiChevronDown size={38} />
          </div>
        </div>
        <div
          className={`ml-[420px] mt-[380px] ${
            selectedFilter.length !== 0 ? "mt-[210px]" : ""
          } `}
        >
          {selectedFilter.length !== 0
            ? linkOne?.sublinks?.map((mysublinks: any) => (
                <div
                  key={mysublinks.uniqueId}
                  className="grid grid-cols-5  w-[1100px] gap-0 p-0 "
                >
                  {selectedItem === "Önce En Düşük Fiyat"
                    ? mysublinks?.product
                        ?.filter((x: any) => selectedFilter.includes(x?.brand))
                        ?.sort((a: any, b: any) => (a.price > b.price ? 1 : -1))
                        ?.map((plink: any, index: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                  quantId === plink.id && quantity > 0
                                    ? "hidden"
                                    : ""
                                }`}
                                onClick={() => {
                                  setQuantId(plink.id);
                                  quantId === plink.id
                                    ? setQuantName(plink.name)
                                    : quantId === plink.id
                                    ? setQuantPrice(plink.price)
                                    : quantId === plink.id
                                    ? setQuantImg(plink.img)
                                    : quantId === plink.id
                                    ? handleProductCount(plink.id)
                                    : setQuantId(null);
                                }}
                              >
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      // setOpenPlus(false);
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : selectedItem === "Önce En Yüksek Fiyat"
                    ? mysublinks.product
                        ?.filter((x: any) => selectedFilter.includes(x?.brand))
                        .sort((a: any, b: any) => (a.price > b.price ? -1 : 1))
                        .map((plink: any, index: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                {" "}
                                {plink.price}{" "}
                              </div>

                              <div
                                key={plink.uniqueId}
                                className={`w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "hidden"
                                    : ""
                                }`}
                                onClick={() => {
                                  if (
                                    plink.name?.toLocaleUpperCase("tr-TR") !==
                                    quantName?.toLocaleUpperCase("tr-TR")
                                  ) {
                                    setQuantName(plink.name);
                                  }
                                  if (
                                    plink.id?.toLocaleUpperCase("tr-TR") !==
                                    quantId?.toLocaleUpperCase("tr-TR")
                                  ) {
                                    setQuantId(plink.id);
                                  }
                                  if (
                                    plink.price?.toLocaleUpperCase("tr-TR") !==
                                    quantPrice?.toLocaleUpperCase("tr-TR")
                                  ) {
                                    setQuantPrice(plink.price);
                                  }
                                  if (
                                    plink.img?.toLocaleUpperCase("tr-TR") !==
                                    quantImg?.toLocaleUpperCase("tr-TR")
                                  ) {
                                    setQuantImg(plink.img);
                                  }

                                  handleProductCount(quantId);
                                }}
                              >
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : selectedItem === "Önerilenler"
                    ? mysublinks.product
                        ?.filter((x: any) => selectedFilter.includes(x?.brand))
                        .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                        .map((plink: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                className="text-primary absolute bottom-16 text-lg font-semibold ml-2 cursor-default"
                              >
                                {" "}
                                {plink.price}
                                {`\u00A0TL`}
                              </div>

                              <div
                                key={plink.uniqueId}
                                className={`w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer ${
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
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      // setOpenPlus(false);
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : ""}
                </div>
              ))
            : linkOne?.sublinks?.map((mysublinks: any) => (
                <div
                  key={mysublinks.uniqueId}
                  className="grid grid-cols-5  w-[1100px] gap-0 p-0 "
                >
                  {selectedItem === "Önce En Düşük Fiyat"
                    ? mysublinks.product
                        ?.sort((a: any, b: any) => (a.price > b.price ? 1 : -1))
                        .map((plink: any, index: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : selectedItem === "Önce En Yüksek Fiyat"
                    ? mysublinks.product
                        ?.sort((a: any, b: any) => (a.price > b.price ? -1 : 1))
                        .map((plink: any, index: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                {" "}
                                {plink.price}{" "}
                              </div>

                              <div
                                key={plink.uniqueId}
                                className={`w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer ${
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
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : selectedItem === "Önerilenler"
                    ? mysublinks.product
                        ?.sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                        .map((plink: any, index: any) => (
                          <div key={plink.uniqueId} className=" p-0">
                            <div
                              key={plink.uniqueId}
                              className=" h-[380px]   w-[210px] relative border mb-3 border-gray-400 rounded-lg "
                            >
                              <Link
                                to={`/details/${plink.id}`}
                                key={plink.uniqueId}
                              >
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
                                className="text-primary absolute bottom-16 text-lg font-semibold ml-2 cursor-default"
                              >
                                {" "}
                                {plink.price}
                                {`\u00A0TL`}
                              </div>

                              <div
                                key={plink.uniqueId}
                                className={`w-[40px] h-[40px] shadow-xl absolute bottom-3 bg-primary   ml-[150px] rounded cursor-pointer ${
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
                                <AiOutlinePlus
                                  className={`text-white  mt-1  ml-[5px] ${
                                    quantId === plink.id && quantity > 0
                                      ? "hidden"
                                      : ""
                                  } `}
                                  size={30}
                                />
                              </div>
                              <div
                                className={`w-[190px] h-[35px]  absolute bottom-3 border-primary border   mx-[10px] rounded cursor-pointer ${
                                  quantId === plink.id && quantity > 0
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <div className="w-[35px] rounded-tl rounded-bl h-[33.8px]  bg-orange-100 flex items-center justify-center">
                                  {" "}
                                  <BsTrash3
                                    className={` ${
                                      quantity > 1
                                        ? "hidden"
                                        : "text-primary w-5 h-5 "
                                    }  `}
                                    onClick={() => {
                                      removeFromCard(plink.id);
                                    }}
                                  />{" "}
                                  <AiOutlineMinus
                                    className={`${
                                      quantity > 2 || quantity === 2
                                        ? "text-primary"
                                        : "hidden"
                                    } `}
                                    onClick={() => {
                                      handleProductCountMinus(plink.id);
                                    }}
                                  />
                                </div>
                                <div className="w-[55px] h-[20px] flex items-center ml-8 mt-2 font-semibold">
                                  {quantity} Adet
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
                        ))
                    : ""}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCategory;
