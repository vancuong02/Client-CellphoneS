import axios from "axios";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

function Xiaomi() {
=======
import ListProduct from "../ListProduct";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../../constants/UserConstant";
import { handlePercentDiscount } from "../../../untils/index";

function Xiaomi(props) {
    const name = "xiaomi";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const [hotXiaomi, setHotXiaomi] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
<<<<<<< HEAD
                    `http://localhost:4000/products/xiaomi`
=======
                    `${BASE_URL}/products/${name}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                );
                setHotXiaomi(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
<<<<<<< HEAD
                <h2>xiaomi</h2>
=======
                <h2>{name}</h2>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
