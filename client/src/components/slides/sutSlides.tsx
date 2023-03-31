import React from "react";

const SutSlides = () => {
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
    <div className="w-[800px] h-[130px]  m-auto relative z-1">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full rounded bg-center bg-cover z-1"
      ></div>
    </div>
  );
};

export default SutSlides;
