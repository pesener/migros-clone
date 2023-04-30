import React, { useEffect, useState } from "react";
import SelectedCategory from "../SelectedCategory";
import { useParams } from "react-router-dom";

const SelectedCategoryScreen = ({ setSid }: { setSid: any }) => {
  const { id } = useParams();
  useEffect(() => {
    setSid(id);
  });
  return (
    <div>
      <SelectedCategory id={id} />
    </div>
  );
};

export default SelectedCategoryScreen;
