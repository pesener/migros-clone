import React, { useEffect, useState } from "react";
import SelectedCategory from "../components/SelectedCategory";
import { useParams } from "react-router-dom";

const SelectedCategoryScreen = ({
  setSid,
  countProduct,
  setCountProduct,
  cardItems,
  setCardItems,
}: {
  setSid: any;
  countProduct: any;
  setCountProduct: any;
  cardItems: any;
  setCardItems: any;
}) => {
  const { id } = useParams();
  useEffect(() => {
    setSid(id);
  });
  return (
    <div>
      <SelectedCategory
        id={id}
        countProduct={countProduct}
        setCountProduct={setCountProduct}
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
    </div>
  );
};

export default SelectedCategoryScreen;
