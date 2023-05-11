import React, { useEffect, useState } from "react";
import SelectedCategory from "../components/SelectedCategory";
import { useParams } from "react-router-dom";

const SelectedCategoryScreen = ({
  setSid,
  cardItems,
  setCardItems,
}: {
  setSid: any;
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
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
    </div>
  );
};

export default SelectedCategoryScreen;
