/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../constants/UserConstant";

function Iphone(props) {
    const [hotIphone, setHotIphone] = useState([]);
    const name = "iphone";
    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/products/${name}`
                );
                setHotIphone(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{name}</h2>
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
