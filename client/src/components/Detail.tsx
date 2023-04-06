import React, { useState, useEffect } from "react";
import { getProductDetail } from "../axios/indexAxios";

const Detail = ({ id }: { id: any }) => {
  const [links, setLinks] = useState<any>([]);
  useEffect(() => {
    getProductDetail(id)
      .then((res: any) => {
        setLinks(res.data);
        console.log(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="bg-primary w-142 h-32 text-black" key={links._id}>
        {links.name}
      </div>
    </div>
  );
};

export default Detail;
