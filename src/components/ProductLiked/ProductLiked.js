import axios from "axios";
import { Rate, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HeartTwoTone } from "@ant-design/icons";
import React, { useMemo, useCallback } from "react";

import "./ProductLike.css";
import { formatPrice } from "../../untils/index";
import { AddToCart } from "../../actions/CartAction";

function LikedProducts(props) {
  const { userInfo } = useSelector((state) => state.userSignin);
  const { product, setLoad, load } = props;
  const dispatch = useDispatch();

  const AddProductToCart = useCallback(
    (product) => {
      const action = AddToCart(product);
      dispatch(action);
    },
    [dispatch]
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

  const handleRemoveHeart = async (product) => {
    try {
      console.log("INĐO", product._id, userInfo._id);

      await axios.post(`http://localhost:4000/products/unlike/${product._id}`, {
        user_id: userInfo._id,
      });

      setLoad(!load);

      message.success({
        content: "Đã xóa sản phẩm khỏi danh sách yêu thích",
        duration: 1,
        className: "custom-class",
        style: {
          position: "fixed",
          left: "40%",
          top: "5rem",
          zIndex: 9999,
        },
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="list-product-like">
      <Link to={"/detail/" + product._id}>
        <img src={product.image} alt="hi" className="product-like-img"></img>
        <p className="product-like-name">{product.name}</p>
        <div className="product-like-price">
          <span className="price-like-sale">
            {formatPrice(product.salePrice)}đ
          </span>
          <span className="price-like-default">
            {formatPrice(product.price)}đ
          </span>
        </div>
      </Link>
      <div
        className="product-like-buy"
        onClick={() => AddProductToCart(product)}
      >
        Thêm vào giỏ hàng
      </div>
      <div className="product-like-interact">
        <Rate disabled value={averageStarRating} />
        <HeartTwoTone
          onClick={() => handleRemoveHeart(product)}
          twoToneColor="#eb2f96"
          className="product-like-icon-heart"
          title="Click vào để bỏ thích sản phẩm"
        />
      </div>
    </div>
  );
}

export default LikedProducts;
