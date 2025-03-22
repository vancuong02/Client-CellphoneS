import axios from "axios";
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ComputerKeyboard(props) {
  const [hotKeyboard, setHotKeyboard] = useState([]);

  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/keyboard`
        );
        setHotKeyboard(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale">
      <div className="hotsale">
        <h2>Bàn phím</h2>
        {hotKeyboard ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotKeyboard)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
