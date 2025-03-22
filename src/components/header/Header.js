import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import { SignoutUser, getUserById } from "../../actions/UserAction";
import { searchProduct } from "../../actions/ProductAction";
import LogoPage from "../../assets/logo/logo-page.svg";

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

  // const { user } = useSelector((state) => state.users);

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
              alt="logo"
              width={140}
              src={LogoPage}
              // src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg"
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
            <SearchOutlined onClick={(e) => SearchProduct(e)}></SearchOutlined>
          </form>
        </div>
        <ul className="menu-list" id={menu ? "hidden" : ""}>
          <li className="active">
            <Link to="/"> Trang Chủ </Link>
          </li>
          <li>
            <Link to="/product"> Sản Phẩm </Link>
          </li>
          {userInfo ? (
            <li onClick={() => setShowAccount2(!showAccount2)}>
              <Link to="#">
                {userInfo.name || ""}
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>
              {showAccount2 ? (
                <div className="menu-drop">
                  {userInfo.isAdmin ? <Link to="/admin">Admin</Link> : ""}
                  <Link to="/user/profile">Tài khoản của tôi</Link>
                  <Link to="/myOrder">Đơn hàng</Link>
                  <Link to="#" onClick={() => handleSignout()}>
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

              <span className="count">{userInfo ? amount : 0}</span>
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
