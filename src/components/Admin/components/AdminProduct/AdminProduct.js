<<<<<<< HEAD
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

import "./AdminProduct.css";
import ListProduct from "./ListProduct";
import { paginationProduct } from "../../../../actions/ProductAction";

function AdminProduct() {
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationProduct } from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

function AdminProduct(props) {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);
    const { products } = useSelector((state) => state.allProduct.product);

    useEffect(() => {
        dispatch(paginationProduct(currentPage));
    }, [dispatch, currentPage]);

    return (
        <div className="admin-product">
            <div className="admin-product-link">
                <Link to="/admin/product/create" className="add-product">
                    <AppstoreAddOutlined />
                </Link>
<<<<<<< HEAD
                <Link to="/admin/product/update/info" className="add-product">
                    <ToolOutlined></ToolOutlined>
                </Link>
            </div>

            {products && products.length > 0 && (
                <ListProduct listProducts={products}></ListProduct>
            )}

            {products && products.length === 0 && "No product available"}
=======
                {/* <Link to="/admin/product/update/info" className="add-product">
                    <ToolOutlined></ToolOutlined>
                </Link> */}
            </div>

            {products && products.length > 0 ? (
                <ListProduct listProducts={products}></ListProduct>
            ) : (
                "No product available"
            )}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        </div>
    );
}

export default AdminProduct;
