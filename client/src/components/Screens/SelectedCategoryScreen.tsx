import React, { useEffect, useState } from "react";
import SelectedCategory from "../SelectedCategory";
import { useParams } from "react-router-dom";

const SelectedCategoryScreen = ({
  setSid,
  countProduct,
  setCountProduct,
}: {
  setSid: any;
  countProduct: any;
  setCountProduct: any;
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
      />
    </div>
  );
};

export default SelectedCategoryScreen;
