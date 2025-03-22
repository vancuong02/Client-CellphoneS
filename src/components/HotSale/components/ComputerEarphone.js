import axios from "axios";
import { useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ComputerEarphone() {
  const [hotappleEarphone, setHotappleEarphone] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/earphone`
        );
        setHotappleEarphone(data);
      } catch (error) {
        console.error(error);
      }
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale apple Earphone">
      <div className="hotsale">
        <h2>Tai nghe</h2>
        {hotappleEarphone.length > 0 ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotappleEarphone)}
          />
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
}
