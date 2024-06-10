<<<<<<< HEAD
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "./ShoppingCart.css";
import Header from "../header/Header";
import ListProduct from "./ListProduct";
import { formatPrice } from "../../untils";

function Cart() {
    const history = useHistory();
    const cartItems = useSelector((state) => state.cart.cartItems);
    var userInfo = useSelector((state) => state.userSignin.userInfo);

    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.qty * item.salePrice,
            0
        );
    }, [cartItems]);

    const saved = useMemo(() => {
        return cartItems.reduce(
            (total, item) =>
                total + (item.qty * item.price - item.qty * item.salePrice),
            0
        );
    }, [cartItems]);

    const convertUSD = Math.floor(totalPrice / 23000);
=======
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
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    const Order = () => {
        if (userInfo) {
            history.push("/order");
<<<<<<< HEAD
            localStorage.setItem("totalPriceOrderInCart", convertUSD);
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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

<<<<<<< HEAD
                    {userInfo && cartItems && cartItems.length > 0 && (
                        <>
                            <ListProduct products={cartItems}></ListProduct>
                            <div className="totalElement">
                                <div className="subElment">
                                    <div className="total-price">
                                        <span className="left">Tạm tính: </span>
                                        <span className="right">
                                            ₫{formatPrice(totalPrice - 23000)}
                                        </span>
                                    </div>
                                    <span className="saved">
                                        Tiết kiệm: ₫{formatPrice(saved)}
=======
                    {cartItems && cartItems.length > 0 && (
                        <>
                            <ListProduct products={cartItems}></ListProduct>
                            <div className="total">
                                <div className="total-price">
                                    <span className="left">Tổng tiền: </span>
                                    <span className="right">
                                        {formatPrice(totalPrice)} vnd
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                    </span>
                                </div>
                                {totalPrice <= 0 ? (
                                    ""
                                ) : (
                                    <div
<<<<<<< HEAD
                                        className="orderCart"
                                        onClick={() => Order()}
                                    >
                                        Mua Hàng
=======
                                        className="order"
                                        onClick={() => Order()}
                                    >
                                        Đặt Hàng
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                    </div>
                                )}
                            </div>
                        </>
                    )}

<<<<<<< HEAD
                    {userInfo && cartItems.length === 0 && (
                        <img
                            src="https://bizweb.dktcdn.net/100/364/542/themes/733815/assets/empty-cart.png?1665711930882"
                            alt="Empty Cart"
                        ></img>
                    )}

                    {!userInfo && (
=======
                    {cartItems.length === 0 && (
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
