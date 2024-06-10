import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import { SignoutUser, getUserById } from "../../actions/UserAction";
import { searchProduct } from "../../actions/ProductAction";

import {
    DownOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
} from "@ant-design/icons";

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
        dispatch(searchProduct(search));
        setSearch("");
    };

    return (
        <div className="header">
            <section id="menu">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/14f148d28df88bc5dbbabbfbb1332792.png"
                            alt="logo"
                            width={200}
                        />
                    </Link>
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
                    {user ? (
                        <li onClick={() => setShowAccount2(!showAccount2)}>
                            <Link to="#">
                                {user.name || user.user.name}
                                <DownOutlined style={{ fontSize: "14px" }} />
                            </Link>
                            {showAccount2 ? (
                                <div className="menu-drop">
                                    {user.isAdmin ? (
                                        <Link to="/admin">Admin</Link>
                                    ) : (
                                        ""
                                    )}
                                    <Link to="/user/profile">
                                        Tài khoản của tôi
                                    </Link>
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

                            <span className="count">{user ? amount : 0}</span>
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
