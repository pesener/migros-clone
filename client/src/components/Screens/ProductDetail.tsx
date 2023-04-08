import React from "react";
import Detail from "../Detail";
import { useParams } from "react-router-dom";

const ProductDetail = ({ sid }: { sid: any }) => {
  const { id } = useParams();

  return (
    <div>
      <Detail sid={sid} id={id} />
    </div>
  );
};

export default ProductDetail;
