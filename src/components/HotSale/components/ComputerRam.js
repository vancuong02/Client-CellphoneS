import axios from "axios";
import { useEffect, useState } from "react";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

export default function ComputerRam() {
  const [hotRam, setHotRam] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(`http://localhost:4000/products/ram`);
        setHotRam(data);
      } catch (error) {
        console.error(error);
      }
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale apple Ram">
      <div className="hotsale">
        <h2>RAM</h2>
        {hotRam.length > 0 ? (
          <ListProduct HotSaleProducts={handlePercentDiscount(hotRam)} />
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
}
