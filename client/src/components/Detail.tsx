import React, { useState, useEffect } from "react";
import { getProductDetail } from "../axios/indexAxios";

const Detail = ({ id }: { id: any }) => {
  const [links, setLinks] = useState<any>([]);
  useEffect(() => {
    getProductDetail({ p_id: id })
      .then((res: any) => {
        setLinks(res.data);
        console.log(res.data);
        console.log(id, " başarı id");
      })
      .catch((err: any) => {
        console.log(err);
        console.log(id, " hata id");
      });
  }, [id]);

  return (
    <div>
      <div className="bg-white border w-142 h-32 text-black" key={links._id}>
        {links.name}
      </div>
    </div>
  );
};

export default Detail;
