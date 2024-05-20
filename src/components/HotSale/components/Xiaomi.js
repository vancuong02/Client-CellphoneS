import axios from "axios";
import ListProduct from "../ListProduct";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../../constants/UserConstant";
import { handlePercentDiscount } from "../../../untils/index";

function Xiaomi(props) {
    const name = "xiaomi";
    const [hotXiaomi, setHotXiaomi] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/products/${name}`
                );
                setHotXiaomi(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
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
