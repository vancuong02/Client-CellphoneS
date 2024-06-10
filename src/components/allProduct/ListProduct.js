<<<<<<< HEAD
import React from "react";
import Product from "./Product";
function ListProduct(props) {
    const { HotSaleProducts } = props;

    return (
        <div className="hotsale-listproduct">
            {HotSaleProducts.map((product, index) => (
                <Product product={product} key={index}></Product>
            ))}
=======
import React from 'react';
import Product from './Product'


function ListProduct(props) {
    const {HotSaleProducts} = props;

    return (
        <div className="hotsale-listproduct">
            {
                HotSaleProducts.map((product, index) => (
                    <Product product={product} key={index}></Product>
                ))
            }
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        </div>
    );
}

<<<<<<< HEAD
export default ListProduct;
=======
export default ListProduct;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
