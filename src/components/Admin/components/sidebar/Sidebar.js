/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
    AppstoreOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    OrderedListOutlined,
} from "@ant-design/icons";

function Sidebar(props) {
    const dispatch = useDispatch();

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
                <Link to="/admin" className={"sidebar-list-item"}>
                    <span>
                        <AppstoreOutlined></AppstoreOutlined>
                    </span>
                    <p>Dashboard</p>
                </Link>
                <Link to="/admin/customer" className={"sidebar-list-item"}>
                    <span>
                        <UsergroupAddOutlined></UsergroupAddOutlined>
                    </span>
                    <p>Customer</p>
                </Link>
                <Link to="/admin/product" className={"sidebar-list-item"}>
                    <span>
                        <ShopOutlined></ShopOutlined>
                    </span>
                    <p>Products</p>
                </Link>
                <Link to="/admin/order" className={"sidebar-list-item"}>
                    <span>
                        <OrderedListOutlined></OrderedListOutlined>
                    </span>
                    <p>Order</p>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
