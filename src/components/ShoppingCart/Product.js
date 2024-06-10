import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    AddToCart,
    DeleteToCart,
    DeleteQtyProduct,
} from "../../actions/CartAction";
import { formatPrice } from "../../untils/index";
import { getproductById } from "../../actions/ProductAction";

Product.propTypes = {};

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    const productById = useSelector((state) => state.getProductById.product);

    useEffect(() => {
        dispatch(getproductById(product._id));
    }, [dispatch, product._id]);

    function handleDecrementProduct(product) {
        const action = DeleteToCart(product);
        if (product.qty === 1) {
            // eslint-disable-next-line no-restricted-globals
            const confirmDelete = confirm(
                `Bạn có chắc chắn muốn xóa ${product.name} khỏi giỏ hàng không không?`
            );
            if (confirmDelete) {
                dispatch(action);
            }
        } else {
            dispatch(action);
        }
    }

    function handlePlusProduct(product) {
        if (product.qty >= productById.quantity) {
            alert("Số lượng mua vượt qúa giới hạn hiện có");
        } else {
            const action = AddToCart(product);
            dispatch(action);
        }
    }

    function handleProductOut(product) {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm(
            `Bạn có chắc chắn muốn xóa ${product.name} khỏi giỏ hàng không không?`
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
                    <img src={product.image} alt="cart-image" aria-hidden></img>
                </div>
                <div className="shopping-cart-list-product-block-right">
                    <p className="product-name">{product.name}</p>
                    <div className="priceElment">
                        <p className="priceDefault">
                            ₫{formatPrice(product.salePrice)}
                        </p>
                        <p className="priceSale">
                            ₫{formatPrice(product.price)}
                        </p>
                    </div>
                </div>

                <div className="parentAction">
                    <button
                        onClick={() => handleProductOut(product)}
                        className="delete-product"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.9999 4H10.6666V2.88666C10.6509 2.45988 10.4667 2.0567 10.1543 1.76553C9.84188 1.47435 9.42675 1.31893 8.99992 1.33333H6.99992C6.57309 1.31893 6.15796 1.47435 5.84554 1.76553C5.53312 2.0567 5.34889 2.45988 5.33325 2.88666V4H1.99992C1.82311 4 1.65354 4.07024 1.52851 4.19526C1.40349 4.32028 1.33325 4.48985 1.33325 4.66666C1.33325 4.84348 1.40349 5.01305 1.52851 5.13807C1.65354 5.26309 1.82311 5.33333 1.99992 5.33333H2.66659V12.6667C2.66659 13.1971 2.8773 13.7058 3.25237 14.0809C3.62744 14.456 4.13615 14.6667 4.66659 14.6667H11.3333C11.8637 14.6667 12.3724 14.456 12.7475 14.0809C13.1225 13.7058 13.3333 13.1971 13.3333 12.6667V5.33333H13.9999C14.1767 5.33333 14.3463 5.26309 14.4713 5.13807C14.5963 5.01305 14.6666 4.84348 14.6666 4.66666C14.6666 4.48985 14.5963 4.32028 14.4713 4.19526C14.3463 4.07024 14.1767 4 13.9999 4ZM6.66659 2.88666C6.66659 2.78 6.80659 2.66666 6.99992 2.66666H8.99992C9.19325 2.66666 9.33325 2.78 9.33325 2.88666V4H6.66659V2.88666ZM11.9999 12.6667C11.9999 12.8435 11.9297 13.013 11.8047 13.1381C11.6796 13.2631 11.5101 13.3333 11.3333 13.3333H4.66659C4.48977 13.3333 4.32021 13.2631 4.19518 13.1381C4.07016 13.013 3.99992 12.8435 3.99992 12.6667V5.33333H11.9999V12.6667Z"
                                fill="#212B36"
                            ></path>{" "}
                            <path
                                d="M5.99992 11.3333C6.17673 11.3333 6.3463 11.2631 6.47132 11.1381C6.59635 11.013 6.66658 10.8435 6.66658 10.6667V8C6.66658 7.82319 6.59635 7.65362 6.47132 7.5286C6.3463 7.40357 6.17673 7.33334 5.99992 7.33334C5.82311 7.33334 5.65354 7.40357 5.52851 7.5286C5.40349 7.65362 5.33325 7.82319 5.33325 8V10.6667C5.33325 10.8435 5.40349 11.013 5.52851 11.1381C5.65354 11.2631 5.82311 11.3333 5.99992 11.3333Z"
                                fill="#212B36"
                            ></path>{" "}
                            <path
                                d="M9.99992 11.3333C10.1767 11.3333 10.3463 11.2631 10.4713 11.1381C10.5963 11.013 10.6666 10.8435 10.6666 10.6667V8C10.6666 7.82319 10.5963 7.65362 10.4713 7.5286C10.3463 7.40357 10.1767 7.33334 9.99992 7.33334C9.82311 7.33334 9.65354 7.40357 9.52851 7.5286C9.40349 7.65362 9.33325 7.82319 9.33325 8V10.6667C9.33325 10.8435 9.40349 11.013 9.52851 11.1381C9.65354 11.2631 9.82311 11.3333 9.99992 11.3333Z"
                                fill="#212B36"
                            ></path>
                        </svg>
                    </button>
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
