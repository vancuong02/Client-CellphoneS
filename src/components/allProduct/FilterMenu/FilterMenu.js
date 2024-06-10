<<<<<<< HEAD
=======
/* eslint-disable jsx-a11y/alt-text */
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./FilterMenu.css";
import { getAllSelectList } from "../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../actions/ListTypeProductAction";
import { filterProductByRandomField } from "../../../actions/ProductAction";

export default function FilterMenu() {
    const dispatch = useDispatch();
    const [dataFilter, setDataFilter] = useState({});
    const filterMenuList = useSelector((state) => state.selectList.List);
    const { List } = useSelector((state) => state.allTypeProduct);

    useEffect(() => {
        dispatch(filterProductByRandomField(dataFilter));
    }, [dataFilter, dispatch]);

    useEffect(() => {
        dispatch(getAllSelectList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllTypeProduct());
    }, [dispatch]);

    const filterMenuItemAntd = (item) => (
        <div className="filter-menu-item">
            <div
                className={
                    dataFilter[`${item.property}`]
                        ? `filter-menu-item-name active`
                        : `filter-menu-item-name`
                }
            >
                <Dropdown
                    overlay={menuShow(item, item.options)}
                    trigger={["click"]}
                >
                    <span className="ant-dropdown-link">
                        {dataFilter[`${item.property}`]
                            ? dataFilter[`${item.property}`]
                            : item.name}
                        <DownOutlined />
                    </span>
                </Dropdown>
            </div>
        </div>
    );

    const menuShow = (menuItem, arrItem) => (
        <div className="menu-show">
            <div className="menu-show-list">
                {arrItem.map((item) => (
                    <div
                        className={`menu-show-item`}
                        onClick={() => handleClickMenuShow(item, menuItem)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="menu-show-btn">
                <button
                    className="cancel"
                    onClick={() => CancelChooseMenuShow(menuItem, arrItem)}
                >
                    Bỏ Chọn
                </button>
            </div>
        </div>
    );

    const handleClickMenuShow = (item, menuItem) => {
        const data = {};
        data[`${menuItem.property}`] = item;

        setDataFilter({ ...dataFilter, ...data });
    };

    const CancelChooseMenuShow = (menuItem, arrItem) => {
        delete dataFilter[`${menuItem.property}`];
        const newDataFilter = { ...dataFilter };
        setDataFilter(newDataFilter);
    };

<<<<<<< HEAD
    const MenuFirmProduct = (item, index) => (
        <div
            key={index}
=======
    const MenuFirmProduct = (item) => (
        <div
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            className={
                dataFilter[`type`] === item.name
                    ? `filter-menu-firm-item active`
                    : "filter-menu-firm-item"
            }
            onClick={() => HandleFilterProductByType(item.name)}
        >
<<<<<<< HEAD
            <img src={item.img} alt="a"></img>
=======
            <img src={item.img}></img>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        </div>
    );

    const HandleFilterProductByType = async (name) => {
        if (dataFilter.type === name) {
            delete dataFilter[`type`];
            const newDataFilter = { ...dataFilter };
            setDataFilter({ ...newDataFilter });
        } else {
            setDataFilter({ ...dataFilter, type: name });
        }
    };

    return (
        <div>
            <div className="filter-menu-firm">
<<<<<<< HEAD
                {List
                    ? List.map((item, index) => MenuFirmProduct(item, index))
                    : ""}
=======
                {List ? List.map((item) => MenuFirmProduct(item)) : ""}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            </div>

            <div className="filter-menu">
                {filterMenuList && filterMenuList.length > 0
                    ? filterMenuList.map((item) => filterMenuItemAntd(item))
                    : ""}
            </div>
        </div>
    );
}
