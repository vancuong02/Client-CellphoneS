import React from "react";
import { formatPrice } from "../../untils";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../actions/CartAction";
import { message } from "antd";

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    const success = () => {
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
    };

    const AddProductToCart = (product) => {
        const action = AddToCart(product);
        dispatch(action);
        success();
    };

    return (
        <div className="hotsale-listproduct-products">
            <a href={"/detail/" + product._id}>
                <img src={product.image} alt={product.name} />

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
            <div className="buy-product">
                <span onClick={() => AddProductToCart(product)}>Mua Ngay</span>
            </div>
        </div>
    );
}

export default Product;
