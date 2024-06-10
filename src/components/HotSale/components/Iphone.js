/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

function Iphone() {
    const [hotIphone, setHotIphone] = useState([]);
    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `http://localhost:4000/products/iphone`
                );
                setHotIphone(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>iphone</h2>
                {hotIphone ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(hotIphone)}
                    ></ListProduct>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
}

export default Iphone;
