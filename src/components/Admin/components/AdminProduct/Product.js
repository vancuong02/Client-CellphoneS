<<<<<<< HEAD
import { message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";

=======
import React from "react";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import {
    DeleteProduct,
    paginationProduct,
} from "../../../../actions/ProductAction";
<<<<<<< HEAD
import { formatPrice } from "../../../../untils/index";
=======
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../untils/index";
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

function Product(props) {
    const { product, number } = props;
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);

    const handleDeleteProduct = async (product) => {
<<<<<<< HEAD
        // eslint-disable-next-line no-restricted-globals
        const confirmDel = confirm(
            `Bạn có chắc chắn muốn xóa ${product.name} hay không?`
        );
        if (confirmDel) {
            await dispatch(DeleteProduct(product._id));
            dispatch(paginationProduct(currentPage));
            message.success("Xóa sản phẩm thành công");
        }
=======
        await dispatch(DeleteProduct(product._id));
        dispatch(paginationProduct(currentPage));
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
