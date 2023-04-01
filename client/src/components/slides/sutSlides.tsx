import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxBox } from "react-icons/rx";

const SutSlides = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const slides = [
    {
      url: "https://images.migrosone.com/sanalmarket/banner/category_page_top/39859/41893-webkategori1-f05ede.jpg",
    },
    {
      url: "https://images.migrosone.com/sanalmarket/banner/category_page_top/39976/42010-824webkategoriaspro-33e0d9.png",
    },
    {
      url: "https://images.migrosone.com/sanalmarket/banner/category_page_top/39928/41962-824webkategorisana-06afef.png",
    },
    {
      url: "https://images.migrosone.com/sanalmarket/banner/category_page_top/39984/42018-webkategori1-51daaf.jpg",
    },
  ];
  return (
    <div className="w-[1070px] h-[205px]  m-auto relative z-1 group border-none outline-none">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded bg-center bg-cover z-1"
      ></div>
      {/* left arrow */}
      <div className="absolute z-2 flex items-center justify-center  top-[50%]  translate-x-[-31%] h-8 w-16 translate-y-[-50%] left-1 bg-white   rounded-tl-full rounded-tr-full  rotate-90  text-gray-600 cursor-pointer shadow-lg">
        <div className=" mt-2     ">
          <BsChevronDown onClick={prevSlide} size={30} />
        </div>
      </div>
      {/* rigth arrow */}
      <div className="absolute flex items-center justify-center  top-[50%] translate-x-[56%] h-8 w-16 translate-y-[-50%] right-5 bg-white   rounded-tl-full rounded-tr-full  rotate-[270deg]  text-gray-600 cursor-pointer shadow-lg">
        <div className=" mt-2 z-2">
          {" "}
          <BsChevronDown onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-0 justify-center py-2 cursor-pointer ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` mr-2 text-sm  ${
              slideIndex === currentIndex
                ? "bg-primary h-2 "
                : "bg-gray-200 h-[6px] "
            }`}
          >
            <div className="h-[6px] w-[13px] rounded"></div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default SutSlides;
