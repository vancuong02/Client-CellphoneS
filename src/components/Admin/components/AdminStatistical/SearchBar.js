import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./Statistical.css";

const SearchBar = ({ onSearch }) => {
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");

    const handleSearch = () => {
        const today = new Date();
        let isFuture = false;

        if (date) {
            const inputDate = new Date(date);
            if (inputDate > today) {
                isFuture = true;
            }
        }

        if (month) {
            const [year, monthValue] = month.split("-");
            const inputMonth = new Date(year, monthValue - 1);
            if (inputMonth > today) {
                isFuture = true;
            }
        }

        if (isFuture) {
            alert("Bạn đang chọn ngày trong tương lai. Vui lòng chọn lại");
            setDate("");
            setMonth("");
        } else {
            onSearch({ date, month });
        }
    };

    return (
        <div className="statistical-input-element">
            <p className="statistical-label">Tìm kiếm theo ngày hoặc tháng: </p>
            <input
                type="date"
                value={date}
                className="statistical-input-item"
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="month"
                value={month}
                className="statistical-input-item"
                onChange={(e) => setMonth(e.target.value)}
            />
            <button onClick={handleSearch} className="statistical-input-search">
                <SearchOutlined />
            </button>
        </div>
    );
};

export default SearchBar;
