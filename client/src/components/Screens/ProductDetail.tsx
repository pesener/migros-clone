import React from "react";
import Detail from "../Detail";
import { useParams } from "react-router-dom";

const ProductDetail = ({
  sid,
  cardItems,
  setCardItems,
}: {
  sid: any;
  cardItems: any;
  setCardItems: any;
}) => {
  const { id } = useParams();

  return (
    <div>
      <Detail
        sid={sid}
        id={id}
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
    </div>
  );
};

export default ProductDetail;
