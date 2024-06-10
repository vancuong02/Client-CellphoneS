<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import { SignoutUser, getUserById } from "../../actions/UserAction";
import { searchProduct } from "../../actions/ProductAction";
=======
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { SignoutUser } from "../../actions/UserAction";
import { useHistory } from "react-router";
import { searchProduct } from "../../actions/ProductAction";
import { Link } from "react-router-dom";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

import {
    DownOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
} from "@ant-design/icons";

<<<<<<< HEAD
function Header() {
    const [menu, setMenu] = useState(true);
    const [search, setSearch] = useState("");
    const [showAccount, setShowAccount] = useState(false);
    const [showAccount2, setShowAccount2] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = cartItems.length;

    const { userInfo } = useSelector((state) => state.userSignin);

    const { user } = useSelector((state) => state.users);

    useEffect(() => {
        if (userInfo && userInfo._id) {
            dispatch(getUserById(userInfo._id));
        }
    }, [dispatch, userInfo]);

    const handleSignout = () => {
        dispatch(SignoutUser());
    };

    const SearchProduct = (e) => {
        e.preventDefault();
        history.push("/search");
=======
function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showAccount, setShowAccount] = useState(false);
    const [showAccount2, setShowAccount2] = useState(false);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [search, setSearch] = useState("");
    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = cartItems.length;
    const [menu, setMenu] = useState(true);
    const handleSignout = () => {
        dispatch(SignoutUser());
    };
    const SearchProduct = async (e) => {
        e.preventDefault();
        await history.push("/search");
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch(searchProduct(search));
        setSearch("");
    };

    return (
        <div className="header">
            <section id="menu">
                <div className="logo">
<<<<<<< HEAD
                    <Link to="/">
                        <img
                            src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/14f148d28df88bc5dbbabbfbb1332792.png"
                            alt="logo"
                            width={200}
                        />
                    </Link>
=======
                    <span>
                        <Link to="/"> CELLPHONES </Link>
                    </span>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                </div>
                <div className="search">
                    <form onSubmit={(e) => SearchProduct(e)}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Tìm kiếm ..."
                            defaultValue={setSearch}
                            onChange={(e) => setSearch(e.target.value)}
                        ></input>
                        <SearchOutlined
                            onClick={(e) => SearchProduct(e)}
                        ></SearchOutlined>
                    </form>
                </div>
                <ul className="menu-list" id={menu ? "hidden" : ""}>
                    <li className="active">
                        <Link to="/"> Trang Chủ </Link>
                    </li>
                    <li>
                        <Link to="/product"> Sản Phẩm </Link>
                    </li>
<<<<<<< HEAD
                    {user ? (
                        <li onClick={() => setShowAccount2(!showAccount2)}>
                            <Link to="#">
                                {user.name || user.user.name}
=======
                    {userInfo ? (
                        <li onClick={() => setShowAccount2(!showAccount2)}>
                            <Link to="#">
                                {userInfo.name}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                <DownOutlined style={{ fontSize: "14px" }} />
                            </Link>
                            {showAccount2 ? (
                                <div className="menu-drop">
<<<<<<< HEAD
                                    {user.isAdmin ? (
=======
                                    {userInfo.isAdmin ? (
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                        <Link to="/admin">Admin</Link>
                                    ) : (
                                        ""
                                    )}
<<<<<<< HEAD
                                    <Link to="/user/profile">
                                        Tài khoản của tôi
                                    </Link>
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                    <Link to="/myOrder">Đơn hàng</Link>
                                    <Link
                                        to="#"
                                        onClick={() => handleSignout()}
                                    >
                                        Đăng xuất
                                    </Link>
                                </div>
                            ) : (
                                ""
                            )}
                        </li>
                    ) : (
                        <li onClick={() => setShowAccount(!showAccount)}>
                            <Link to="/">
                                Tài khoản
                                <DownOutlined style={{ fontSize: "14px" }} />
                            </Link>

                            {showAccount ? (
                                <div className="menu-drop">
                                    <Link to="register">Đăng kí</Link>
                                    <Link to="login">Đăng nhập</Link>
                                </div>
                            ) : (
                                ""
                            )}
                        </li>
                    )}
                    <li className="shop-cart">
                        <Link to="/cart" className="shop-cart">
                            <ShoppingCartOutlined
                                style={{ fontSize: "30px" }}
                            ></ShoppingCartOutlined>
<<<<<<< HEAD

                            <span className="count">{user ? amount : 0}</span>
=======
                            <span className="count"> {amount} </span>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                        </Link>
                    </li>
                </ul>
                <div className="bar" onClick={() => setMenu(!menu)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </section>
        </div>
    );
}

export default Header;
