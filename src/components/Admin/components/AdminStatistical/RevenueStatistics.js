import axios from "axios";
import { Bar } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";

import "./Statistical.css";
import SearchBar from "./SearchBar";

const RevenueStatistics = () => {
    const [orders, setOrders] = useState([]);
    const [searchDate, setSearchDate] = useState("");
    const [searchMonth, setSearchMonth] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:4000/order");
                setOrders(response.data);
                setFilteredOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleSearch = ({ date, month }) => {
        let filtered = orders;

        if (date && !month) {
            filtered = filtered.filter(
                (order) =>
                    format(parseISO(order.createdAt), "yyyy-MM-dd") === date
            );
            setSearchDate(date);
            setSearchMonth("");
        } else {
            setSearchDate("");
        }
        if (month && !date) {
            filtered = filtered.filter(
                (order) =>
                    format(parseISO(order.createdAt), "yyyy-MM") === month
            );
            setSearchDate("");
            setSearchMonth(month);
        } else {
            setSearchMonth("");
        }

        if (month && date) {
            alert("Chỉ tìm kiếm theo ngày hoặc theo tháng");
            return;
        }

        setFilteredOrders(filtered);
    };

    const calculateRevenue = () => {
        const revenueData = {};

        filteredOrders.forEach((order) => {
            const date = format(
                parseISO(order.createdAt),
                searchDate ? "yyyy-MM-dd" : "yyyy-MM"
            );
            if (!revenueData[date]) {
                revenueData[date] = 0;
            }
            revenueData[date] += order.totalPrice;
        });

        return revenueData;
    };

    const totalRevenue = () => {
        return filteredOrders.reduce(
            (total, order) => total + order.totalPrice,
            0
        );
    };

    const revenueData = calculateRevenue();
    const totalRevenueAmount = totalRevenue();

    const chartData = {
        labels: Object.keys(revenueData),
        datasets: [
            {
                label: "VND",
                data: Object.values(revenueData),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: "Revenue Statistics",
                font: {
                    size: 18,
                },
                color: "#333",
            },
            legend: {
                labels: {
                    font: {
                        size: 16,
                    },
                    color: "#333",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,
                    },
                    color: "#333",
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14,
                    },
                    color: "#333",
                },
            },
        },
    };

    return (
        <div>
            <div className="statistics-title">Revenue Statistics</div>
            <SearchBar onSearch={handleSearch} />
            {searchDate && searchDate !== "" ? (
                <div className="statistics-content">
                    Doanh thu ngày {searchDate}:{" "}
                    {totalRevenueAmount.toLocaleString()} VND
                </div>
            ) : (
                <></>
            )}
            {searchMonth && searchMonth !== "" ? (
                <div className="statistics-content">
                    Doanh số tháng{" "}
                    {format(parseISO(`${searchMonth}-01`), "M/yyyy")} là:{" "}
                    {totalRevenueAmount.toLocaleString()} VND
                </div>
            ) : (
                <></>
            )}
            <Bar
                className="statistical-chart"
                data={chartData}
                options={chartOptions}
            />
        </div>
    );
};

export default RevenueStatistics;
