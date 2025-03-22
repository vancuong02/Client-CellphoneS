/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ScreenComputer() {
  const [hotScreenComputer, setHotScreenComputer] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/screen`
        );
        setHotScreenComputer(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale iphone">
      <div className="hotsale">
        <h2>Màn hình</h2>
        {hotScreenComputer ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotScreenComputer)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
