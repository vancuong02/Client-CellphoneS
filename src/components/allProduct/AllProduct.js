/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import ListProduct from "./ListProduct";
import "./Sale.css";
import { handlePercentDiscount } from "../../untils/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../actions/ProductAction";

import FilterProduct from "./FilterProduct";
import SortByPrice from "./SortByPrice/SortByPrice";
import FilterMenu from "./FilterMenu/FilterMenu";

function AllProduct(props) {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.allProduct.product);

    useEffect(() => {
        dispatch(getAllProduct());

        return () => {
            return [];
        };
    }, [dispatch]);

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <div className="search-product">
                    <FilterMenu></FilterMenu>
                    <div style={{ display: "flex" }}>
                        <SortByPrice></SortByPrice>
                        <FilterProduct></FilterProduct>
                    </div>
                </div>
                {product && product.length > 0 ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(product)}
                    ></ListProduct>
                ) : (
                    <img
                        width="60%"
                        src="https://etecvn.com/default/template/img/cart-empty.png"
                    ></img>
                )}
            </div>
        </section>
    );
}

export default AllProduct;
