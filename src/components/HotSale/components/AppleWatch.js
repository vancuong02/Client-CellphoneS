import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
import { useEffect, useState } from "react";

const Watch = () => {
    const [hotappleWatch, setHotappleWatch] = useState([]);
    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `http://localhost:4000/products/apple%20watch`
                );
                setHotappleWatch(data);
            } catch (error) {
                console.error(error);
            }
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale apple watch">
            <div className="hotsale">
                <h2>Apple Watch</h2>
                {hotappleWatch.length > 0 ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(hotappleWatch)}
                    />
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </section>
    );
};

export default Watch;
