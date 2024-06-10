import React from "react";
import Product from "./Product";

function ListProduct(props) {
    const { HotSaleProducts } = props;

    return (
        <div className="hotsale-listproducts">
            {HotSaleProducts.map((product, index) => (
                <Product product={product} key={index}></Product>
            ))}
        </div>
    );
}

export default ListProduct;
