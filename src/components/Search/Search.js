<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";

import "./Search.css";
import ListProduct from "./ListProduct";
import { handlePercentDiscount } from "../../untils/index";

function Search() {
    const searchProduct = useSelector((state) => state.searchProduct);
    const { products } = searchProduct;

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                {products && products.length > 0 ? (
                    <ListProduct
                        HotSaleProducts={handlePercentDiscount(products)}
                    ></ListProduct>
                ) : (
                    <h2>Không tìm thấy sản phẩm</h2>
                )}
=======
import React from 'react';
import { useSelector } from 'react-redux';
import {handlePercentDiscount} from '../../untils/index'
import './Search.css'
import ListProduct from './ListProduct'
function Search(props) {
    const searchProduct = useSelector(state => state.searchProduct)
    const {products} = searchProduct;
    
    
    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                {
                    products && products.length > 0 ? (<ListProduct HotSaleProducts={handlePercentDiscount(products)}></ListProduct>) : (<h2>ko tim thay sp</h2>)
                }
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            </div>
        </section>
    );
}

<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
