/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    DollarCircleOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";
import { formatPrice } from "../../../../untils";

export default function DashBoard() {
    // Tổng user
    const users = useSelector((state) => state?.users?.user);
    const quantityUsers = users?.length || "0";

    // Tổng sản phẩm
    const product = useSelector((state) => state?.allProduct?.product);
    const quantityProduct = product?.products?.length * product?.pages || "0";

    // Tổng đơn hàng
    const orders = useSelector((state) => state?.allOrder?.order);
    const quantityOrder = orders?.length || "0";

    // Tổng doanh thu
    const arrSales = orders?.map((item) => item.totalPrice);
    const totalSales =
        arrSales?.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0) || 0;

    return (
        <section id="dashboard">
            <div className="dashboard">
                <div className="dashboard-top">
                    <div className="dashboard-top-content">
                        <li className="dashboard-top-content-avatar">
                            <img src="https://cdn-1.webcatalog.io/catalog/cellphones/cellphones-icon-filled-256.png?v=1675613161086"></img>
                            <span>Nguyễn Văn Cường</span>
                        </li>
                        <li className="dashboard-top-content-bell"></li>
                    </div>
                </div>

                <div className="dashboard-middle">
                    <div className="dashboard-middle-statistic">
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <ShoppingOutlined></ShoppingOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">
                                        {quantityProduct}
                                    </span>
                                    <span className="title">Total Product</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <ShoppingCartOutlined></ShoppingCartOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">
                                        {quantityOrder}
                                    </span>
                                    <span className="title">Total Orders</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <DollarCircleOutlined></DollarCircleOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">
                                        {formatPrice(totalSales)}
                                    </span>
                                    <span className="title">Total Sales</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <FileTextOutlined></FileTextOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">
                                        {quantityUsers}
                                    </span>
                                    <span className="title">Total Users</span>
                                </div>
                            </li>
                        </div>
                    </div>
                    <ChartDashBoard></ChartDashBoard>
                </div>

                <div className="dashboard-new">
                    <div className="dashboard"></div>
                    <div className="dashboard"></div>
                </div>
            </div>
        </section>
    );
}
