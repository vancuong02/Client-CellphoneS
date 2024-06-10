import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    EditOutlined,
    UserOutlined,
    KeyOutlined,
    ReconciliationOutlined,
    HeartOutlined,
} from "@ant-design/icons";

import "../../UserInfo.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const SideNav = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const { userInfo } = useSelector((state) => state.userSignin);

    return (
        <div className="sidenav-element">
            <div className="sidenav-account">
                <img
                    width={60}
                    aria-hidden
                    alt="image-user"
                    className="sidenav-avater"
                    src="https://iconape.com/wp-content/png_logo_vector/user-tie.png"
                />
                <div className="sidenav-edit">
                    <span className="sidenav-name">{userInfo.email}</span>
                    <Link to="/user/profile">
                        <EditOutlined />
                        Sửa hồ sơ
                    </Link>
                </div>
            </div>
            <div className="sidenav-sub">
                <UserOutlined />
                <Link
                    to="/user/profile"
                    className={
                        pathname === "/user/profile" ? "activeSidenav" : ""
                    }
                >
                    Tài khoản của tôi
                </Link>
            </div>
            <div className="sidenav-sub">
                <KeyOutlined />
                <Link
                    to="/user/changePassword"
                    className={
                        pathname === "/user/changePassword"
                            ? "activeSidenav"
                            : ""
                    }
                >
                    Mật khẩu
                </Link>
            </div>
            <div className="sidenav-sub">
                <HeartOutlined />
                <Link
                    className={
                        pathname === "/user/productLiked" ? "activeSidenav" : ""
                    }
                    to="/user/productLiked"
                >
                    Sản phẩm yêu thích
                </Link>
            </div>
            <div className="sidenav-sub">
                <ReconciliationOutlined />
                <Link to="/myOrder">Đơn mua</Link>
            </div>
        </div>
    );
};

export default SideNav;
