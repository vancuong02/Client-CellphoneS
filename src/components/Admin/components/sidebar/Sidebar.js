/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
    AppstoreOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    OrderedListOutlined,
<<<<<<< HEAD
    AreaChartOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

function Sidebar() {
    const dispatch = useDispatch();
    const location = useLocation();
=======
} from "@ant-design/icons";

function Sidebar(props) {
    const dispatch = useDispatch();
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    useEffect(() => {
        const getNewOrder = () => {
            dispatch(GetAllOrderPendding());
        };
        getNewOrder();
    }, [dispatch]);

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/14f148d28df88bc5dbbabbfbb1332792.png"></img>
            </div>
            <div className="sidebar-list">
<<<<<<< HEAD
                <Link
                    to="/admin"
                    className={`sidebar-list-item ${
                        location.pathname === "/admin" ? "active" : ""
                    }`}
                >
=======
                <Link to="/admin" className={"sidebar-list-item"}>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    <span>
                        <AppstoreOutlined></AppstoreOutlined>
                    </span>
                    <p>Dashboard</p>
                </Link>
<<<<<<< HEAD
                <Link
                    to="/admin/customer"
                    className={`sidebar-list-item ${
                        location.pathname === "/admin/customer" ? "active" : ""
                    }`}
                >
=======
                <Link to="/admin/customer" className={"sidebar-list-item"}>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    <span>
                        <UsergroupAddOutlined></UsergroupAddOutlined>
                    </span>
                    <p>Customer</p>
                </Link>
<<<<<<< HEAD
                <Link
                    to="/admin/product"
                    className={`sidebar-list-item ${
                        location.pathname === "/admin/product" ? "active" : ""
                    }`}
                >
=======
                <Link to="/admin/product" className={"sidebar-list-item"}>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    <span>
                        <ShopOutlined></ShopOutlined>
                    </span>
                    <p>Products</p>
                </Link>
<<<<<<< HEAD
                <Link
                    to="/admin/order"
                    className={`sidebar-list-item ${
                        location.pathname === "/admin/order" ? "active" : ""
                    }`}
                >
=======
                <Link to="/admin/order" className={"sidebar-list-item"}>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    <span>
                        <OrderedListOutlined></OrderedListOutlined>
                    </span>
                    <p>Order</p>
                </Link>
<<<<<<< HEAD
                <Link
                    to="/admin/statistical"
                    className={`sidebar-list-item ${
                        location.pathname === "/admin/statistical"
                            ? "active"
                            : ""
                    }`}
                >
                    <span>
                        <AreaChartOutlined />
                    </span>
                    <p>Statistical</p>
                </Link>
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            </div>
        </div>
    );
}

export default Sidebar;
