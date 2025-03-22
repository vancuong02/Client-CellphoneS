import axios from "axios";
import { useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ComputerCase() {
  const [hotCase, setHotCase] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(`http://localhost:4000/products/case`);
        setHotCase(data);
      } catch (error) {
        console.error(error);
      }
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale apple Case">
      <div className="hotsale">
        <h2>Vỏ máy tính</h2>
        {hotCase.length > 0 ? (
          <ListProduct HotSaleProducts={handlePercentDiscount(hotCase)} />
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
}
