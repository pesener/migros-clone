import React from "react";
import SelectedCategory from "../SelectedCategory";
import { useParams } from "react-router-dom";

const SelectedCategoryScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <SelectedCategory id={id} />
    </div>
  );
};

export default SelectedCategoryScreen;
