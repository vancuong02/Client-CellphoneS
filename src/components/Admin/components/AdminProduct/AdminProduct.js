import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

import "./AdminProduct.css";
import ListProduct from "./ListProduct";
import { paginationProduct } from "../../../../actions/ProductAction";

function AdminProduct() {
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
                <Link to="/admin/product/update/info" className="add-product">
                    <ToolOutlined></ToolOutlined>
                </Link>
            </div>

            {products && products.length > 0 && (
                <ListProduct listProducts={products}></ListProduct>
            )}

            {products && products.length === 0 && "No product available"}
        </div>
    );
}

export default AdminProduct;
