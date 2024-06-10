/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
<<<<<<< HEAD

function Iphone() {
    const [hotIphone, setHotIphone] = useState([]);
=======
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../constants/UserConstant";

function Iphone(props) {
    const [hotIphone, setHotIphone] = useState([]);
    const name = "iphone";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    useEffect(() => {
        async function FetchApi() {
            try {
                const { data } = await axios.get(
<<<<<<< HEAD
                    `http://localhost:4000/products/iphone`
=======
                    `${BASE_URL}/products/${name}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                );
                setHotIphone(data);
            } catch (error) {}
        }
        FetchApi();
    }, []);

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
<<<<<<< HEAD
                <h2>iphone</h2>
=======
                <h2>{name}</h2>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
