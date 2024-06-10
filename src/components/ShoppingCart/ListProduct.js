<<<<<<< HEAD
import React from "react";
import Product from "./Product";
=======
import React from 'react';
import Product from './Product'

>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

function ListProduct(props) {
    const { products } = props;

    return (
        <div className="shopping-cart-list">
<<<<<<< HEAD
            {products.map((product, index) => (
                <Product product={product} key={index}></Product>
            ))}
=======
            {
                products.map((product, index) => (
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
