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

    const Order = () => {
        if (userInfo) {
            history.push("/order");
            localStorage.setItem("totalPriceOrderInCart", convertUSD);
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
                                    </span>
                                </div>
                                {totalPrice <= 0 ? (
                                    ""
                                ) : (
                                    <div
                                        className="orderCart"
                                        onClick={() => Order()}
                                    >
                                        Mua Hàng
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {userInfo && cartItems.length === 0 && (
                        <img
                            src="https://bizweb.dktcdn.net/100/364/542/themes/733815/assets/empty-cart.png?1665711930882"
                            alt="Empty Cart"
                        ></img>
                    )}

                    {!userInfo && (
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
