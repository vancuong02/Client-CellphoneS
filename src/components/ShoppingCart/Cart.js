/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { formatPrice } from "../../untils";
import "./ShoppingCart.css";
import ListProduct from "./ListProduct";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../header/Header";

function Cart(props) {
    const history = useHistory();
    const cartItems = useSelector((state) => state.cart.cartItems);
    var userInfo = useSelector((state) => state.userSignin.userInfo);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.qty * item.salePrice,
        0
    );

    const Order = () => {
        if (userInfo) {
            history.push("/order");
        } else {
            alert("Bạn cần đăng nhập");
            history.push("/login");
        }
    };

    return (
        <>
            <Header />
            <section id="shopping-cart">
                <div className="shopping-cart">
                    <div className="shopping-cart-header">
                        <Link to="/" className="back-home">
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                        <h2 className="shopping-cart-title">
                            Giỏ hàng của bạn
                        </h2>
                    </div>
                    <button className="btn-cart">Giỏ hàng</button>

                    {cartItems && cartItems.length > 0 && (
                        <>
                            <ListProduct products={cartItems}></ListProduct>
                            <div className="total">
                                <div className="total-price">
                                    <span className="left">Tổng tiền: </span>
                                    <span className="right">
                                        {formatPrice(totalPrice)} vnd
                                    </span>
                                </div>
                                {totalPrice <= 0 ? (
                                    ""
                                ) : (
                                    <div
                                        className="order"
                                        onClick={() => Order()}
                                    >
                                        Đặt Hàng
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {cartItems.length === 0 && (
                        <img
                            src="https://bizweb.dktcdn.net/100/364/542/themes/733815/assets/empty-cart.png?1665711930882"
                            alt="Empty Cart"
                        ></img>
                    )}
                </div>
            </section>
        </>
    );
}

export default Cart;
