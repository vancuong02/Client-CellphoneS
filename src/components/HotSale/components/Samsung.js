import axios from "axios";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";

function Samsung(props) {
=======
import ListProduct from "../ListProduct";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../../constants/UserConstant";
import { handlePercentDiscount } from "../../../untils/index";

function Samsung() {
    const name = "samsung";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const [hotSamsung, setHotSamsung] = useState([]);

    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
<<<<<<< HEAD
                    `http://localhost:4000/products/samsung`
=======
                    `${BASE_URL}/products/${name}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                );
                setHotSamsung(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale">
            <div className="hotsale">
<<<<<<< HEAD
                <h2>samsung</h2>
=======
                <h2>{name}</h2>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
