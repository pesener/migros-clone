import React from "react";
import Detail from "../Detail";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Detail id={id} />
    </div>
  );
};

export default ProductDetail;
