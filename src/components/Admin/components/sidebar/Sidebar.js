/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import LogoPage from "../../../../assets/logo/logo-admin.png";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    };
    getNewOrder();
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={LogoPage} />
      </div>
      <div className="sidebar-list">
        <Link
          to="/admin"
          className={`sidebar-list-item ${
            location.pathname === "/admin" ? "active" : ""
          }`}
        >
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Dashboard</p>
        </Link>
        <Link
          to="/admin/customer"
          className={`sidebar-list-item ${
            location.pathname === "/admin/customer" ? "active" : ""
          }`}
        >
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Customer</p>
        </Link>
        <Link
          to="/admin/product"
          className={`sidebar-list-item ${
            location.pathname === "/admin/product" ? "active" : ""
          }`}
        >
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Products</p>
        </Link>
        <Link
          to="/admin/order"
          className={`sidebar-list-item ${
            location.pathname === "/admin/order" ? "active" : ""
          }`}
        >
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>Order</p>
        </Link>
        <Link
          to="/admin/statistical"
          className={`sidebar-list-item ${
            location.pathname === "/admin/statistical" ? "active" : ""
          }`}
        >
          <span>
            <AreaChartOutlined />
          </span>
          <p>Statistical</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
