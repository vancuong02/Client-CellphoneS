import axios from "axios";
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

function Samsung(props) {
    const [hotSamsung, setHotSamsung] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `http://localhost:4000/products/samsung`
                );
                setHotSamsung(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>samsung</h2>
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
