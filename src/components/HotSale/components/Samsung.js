import axios from "axios";
import ListProduct from "../ListProduct";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../../constants/UserConstant";
import { handlePercentDiscount } from "../../../untils/index";

function Samsung() {
    const name = "samsung";
    const [hotSamsung, setHotSamsung] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/products/${name}`
                );
                setHotSamsung(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {hotSamsung ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(hotSamsung)}
                    ></ListProduct>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
}

export default Samsung;
