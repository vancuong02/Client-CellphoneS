import axios from "axios";
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ComputerMouse() {
  const [hotMouse, setHotMouse] = useState([]);

  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/mouse`
        );
        setHotMouse(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale">
      <div className="hotsale">
        <h2>Chuột máy tính</h2>
        {hotMouse ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotMouse)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
