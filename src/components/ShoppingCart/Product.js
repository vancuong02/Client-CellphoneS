/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import {
    AddToCart,
    DeleteToCart,
    DeleteQtyProduct,
} from "../../actions/CartAction";
import { formatPrice } from "../../untils/index";

Product.propTypes = {};

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    function handleDecrementProduct(product) {
        const action = DeleteToCart(product);
        if (product.qty === 1) {
            // eslint-disable-next-line no-restricted-globals
            const confirmDelete = confirm(
                "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không không?"
            );
            if (confirmDelete) {
                dispatch(action);
            }
        } else {
            dispatch(action);
        }
    }

    function handlePlusProduct(product) {
        console.log(product);
        const action = AddToCart(product);
        dispatch(action);
    }

    function handleProductOut(product) {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm(
            "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không không?"
        );
        if (confirmDelete) {
            const action = DeleteQtyProduct(product);
            dispatch(action);
        }
    }

    return (
        <div className="shopping-cart-list-product">
            <div className="shopping-cart-list-product-block">
                <div className="shopping-cart-list-product-block-left">
                    <img src={product.image}></img>
                </div>
                <div className="shopping-cart-list-product-block-right">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">
                        {formatPrice(product.salePrice)}
                    </p>
                </div>

                <div className="shopping-cart-list-product-bottom">
                    <i
                        onClick={() => handleProductOut(product)}
                        className="fa-solid fa-trash delete-product"
                    ></i>
                    <ul className="button-event">
                        <li onClick={() => handleDecrementProduct(product)}>
                            -
                        </li>
                        <li className="quantity">{product.qty}</li>
                        <li onClick={() => handlePlusProduct(product)}>+</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product;
