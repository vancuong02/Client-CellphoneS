import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DeleteProduct,
    paginationProduct,
} from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../untils/index";
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";

function Product(props) {
    const { product, number } = props;
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);

    const handleDeleteProduct = async (product) => {
        await dispatch(DeleteProduct(product._id));
        dispatch(paginationProduct(currentPage));
    };

    return (
        <tr>
            <td>{number + 1}</td>
            <td>
                <img src={product.image} alt="oke"></img>
            </td>
            <td>{product.name}</td>
            <td>{formatPrice(product.salePrice)}</td>
            <td>{product.type}</td>
            <td>{product.quantity}</td>
            <td>
                <div className="product-actions">
                    <Link
                        to="#"
                        className="remove-product"
                        onClick={(e) => handleDeleteProduct(product)}
                    >
                        <DeleteOutlined />
                    </Link>
                    <Link
                        className="update-product"
                        to={`/admin/product/update/${product._id}`}
                    >
                        <EditOutlined></EditOutlined>
                    </Link>
                    <Link
                        className="review-product"
                        to={`/admin/product/reviewProduct/${product._id}`}
                    >
                        <FormOutlined></FormOutlined>
                    </Link>
                </div>
            </td>
        </tr>
    );
}

export default Product;
