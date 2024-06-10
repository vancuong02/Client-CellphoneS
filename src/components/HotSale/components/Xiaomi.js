import axios from "axios";
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

function Xiaomi() {
    const [hotXiaomi, setHotXiaomi] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `http://localhost:4000/products/xiaomi`
                );
                setHotXiaomi(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>xiaomi</h2>
                {hotXiaomi ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(hotXiaomi)}
                    ></ListProduct>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
}

export default Xiaomi;
