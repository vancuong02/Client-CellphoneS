/* eslint-disable jsx-a11y/alt-text */
<<<<<<< HEAD
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../actions/CartAction";
import { Link } from "react-router-dom";
import { formatPrice } from "../../untils/index";
import { Rate, message } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Sale.css";
=======
import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../actions/CartAction";
import { Link } from "react-router-dom";
import { formatPrice } from "../../untils/index";
import { message } from "antd";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();
<<<<<<< HEAD
    var userInfo = useSelector((state) => state.userSignin.userInfo);

    const success = useCallback(() => {
        message.success({
            content: "Thêm vào giỏ hàng thành công",
            duration: 1.5,
=======

    const success = () => {
        message.success({
            content: "Thêm vào giỏ hàng thành công",
            duration: 1,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            className: "custom-class",
            style: {
                position: "absolute",
                right: "1rem",
                top: "4rem",
            },
        });
<<<<<<< HEAD
    }, []);

    const error = useCallback((text) => {
        message.error({
            content: text,
            duration: 1.5,
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
                error("Bạn cần đăng nhập để thêm vào giỏ hàng");
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
=======
    };

    const AddProductToCart = (product) => {
        const action = AddToCart(product);
        dispatch(action);
        success();
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    };

    return (
        <div className="hotsale-listproduct-product">
            <Link to={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">
                    {product.name}
                </p>
                <div className="price">
                    <span className="price1">
<<<<<<< HEAD
                        đ{formatPrice(product.salePrice)}
                    </span>
                    <span className="price2">
                        đ{formatPrice(product.price)}
=======
                        {formatPrice(product.salePrice)}đ
                    </span>
                    <span className="price2">
                        {formatPrice(product.price)}đ
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    </span>
                </div>
            </Link>
            {product.percentDiscount >= 5 ? (
<<<<<<< HEAD
                <div className="product-price-percent">
                    <span className="product-percent-detail">
                        Giảm&nbsp;{product.percentDiscount}%
                    </span>
=======
                <div className="discount">
                    <p>{product.percentDiscount}%</p>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                </div>
            ) : (
                ""
            )}
            <div
                className="buy"
                onClick={(e) => {
                    AddProductToCart(product);
                }}
            >
<<<<<<< HEAD
                Thêm vào giỏ hàng
            </div>
            <div className="interact-product-element">
                <Rate disabled defaultValue={averageStarRating} />
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
