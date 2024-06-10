<<<<<<< HEAD
import axios from "axios";
import { Rate, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { HeartOutlined } from "@ant-design/icons";

import { formatPrice } from "../../untils/index";
import { AddToCart } from "../../actions/CartAction";
=======
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { formatPrice } from "../../untils/index";
import { AddToCart } from "../../actions/CartAction";
import { useDispatch } from "react-redux";
import { message } from "antd";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();
<<<<<<< HEAD
    var userInfo = useSelector((state) => state.userSignin.userInfo);

    const success = useCallback(() => {
=======

    const success = () => {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        message.success({
            content: "Thêm vào giỏ hàng thành công",
            duration: 1,
            className: "custom-class",
            style: {
                position: "absolute",
                right: "1rem",
                top: "4rem",
            },
        });
<<<<<<< HEAD
    }, []);

    const error = useCallback(() => {
        message.error({
            content: "Bạn cần đăng nhập để mua hàng",
            duration: 1,
            className: "custom-class",
            style: {
                position: "absolute",
                right: "1rem",
                top: "4rem",
            },
        });
    }, []);

    const AddProductToCart = useCallback(
        (product) => {
            if (userInfo) {
                const action = AddToCart(product);
                dispatch(action);
                success();
            } else {
                error();
                return;
            }
        },
        [dispatch, error, success, userInfo]
    );

    const numberOfReviews = useMemo(
        () => product.reviews.length,
        [product.reviews]
    );

    const averageStarRating = useMemo(() => {
        return numberOfReviews > 0
            ? product.reviews.reduce(
                  (totalStars, review) => totalStars + review?.star,
                  0
              ) / numberOfReviews
            : 0;
    }, [numberOfReviews, product.reviews]);

    const handleHeartClick = async (product) => {
        try {
            if (userInfo) {
                await axios.put(
                    `http://localhost:4000/products/updateId/${product._id}`,
                    { ...product, like: true }
                );

                message.success({
                    content: "Đã thêm vào danh sách yêu thích",
                    duration: 1,
                    className: "custom-class",
                    style: {
                        position: "fixed",
                        left: "40%",
                        top: "5rem",
                        zIndex: 9999,
                    },
                });
            } else {
                error(
                    "Bạn cần đăng nhập để thêm sản phẩm vào danh sách yêu thích"
                );
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image} alt=""></img>
=======
    };
    const AddProductToCart = (product) => {
        const action = AddToCart(product);
        dispatch(action);
        success();
    };
    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image}></img>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                <p className="hotsale-listproduct-product-name">
                    {product.name}
                </p>
                <div className="price">
                    <span className="price1">
                        {formatPrice(product.salePrice)}đ
                    </span>
                    <span className="price2">
                        {formatPrice(product.price)}đ
                    </span>
                </div>
            </a>
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            <div className="buy" onClick={() => AddProductToCart(product)}>
<<<<<<< HEAD
                Thêm vào giỏ hàng
            </div>
            <div className="interact-product-element">
                <Rate allowHalf value={averageStarRating} />
                <HeartOutlined
                    onClick={() => handleHeartClick(product)}
                    className="product-heart-icon"
                />
=======
                Mua Ngay
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            </div>
        </div>
    );
}

export default Product;
