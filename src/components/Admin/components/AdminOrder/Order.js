import React from "react";
import { useDispatch } from "react-redux";

import {
    ShippingOrder,
    deleteOrder,
    getAllOrder,
} from "../../../../actions/OrderAction";
import { createOrderGhn } from "../../../../actions/GhnAction";
import { formatDateOrderPaypal, formatPrice } from "../../../../untils";

function Order(props) {
    const { order } = props;
    const dispatch = useDispatch();

    const {
        status,
        orderItems,
        totalPrice,
        cancelOrder,
        paymentMethod,
        paymentResult,
        shippingAddress,
    } = order;

    const handleShippingOrder = async (order) => {
        await dispatch(createOrderGhn(order._id));
        await dispatch(ShippingOrder(order._id));
        dispatch(getAllOrder());
    };

    const handleDeleteOrder = async (order) => {
        await dispatch(deleteOrder(order._id));
        dispatch(getAllOrder());
    };

    return (
        <>
            <p className="info-order-item">THÔNG TIN ĐƠN HÀNG</p>
            <div className="order-list">
                <div className="order-list-items">
                    {orderItems &&
                        orderItems.length > 0 &&
                        orderItems.map((item, index) => (
                            <div key={index} className="order-items-item">
                                <span className="img">
                                    <img
                                        aria-hidden
                                        src={item.image}
                                        alt="image-product-order"
                                    />
                                </span>
                                <div className="order-deltail">
                                    <span className="qty">
                                        <b>Số lượng:</b> {item.qty}
                                    </span>
                                    <span className="name">
                                        <b>Tên:</b> {item.name}
                                    </span>
                                    <span className="price">
                                        <b>Giá:</b>{" "}
                                        {formatPrice(item.salePrice)}
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="order-infos">
                    <div className="order-info order-info-address">
                        <b>Tên khách hàng : </b> {"  "}
                        {shippingAddress?.name}.
                    </div>
                    <div className="order-info order-info-address">
                        <b>Địa chỉ : </b> {" Số nhà "}
                        {shippingAddress?.detail}, {shippingAddress?.district},{" "}
                        {shippingAddress?.ward}, {shippingAddress?.province}.
                    </div>
                    <div className="order-info order-info-address">
                        <b>Số điện thoại : </b> {"  "}
                        {shippingAddress?.phone}.
                    </div>
                    <div className="order-info order-info-price">
                        Tổng tiền: {formatPrice(totalPrice)}
                    </div>
                </div>
            </div>
            <div className="order-bottom">
                {paymentResult ? (
                    <div className="order-payment-check">
                        Paid: {formatDateOrderPaypal(paymentResult.update_time)}
                    </div>
                ) : (
                    ""
                )}
                {status === "shipping" ? (
                    <div className="order-status">
                        <span className="confirm">
                            Đã xác nhận{" "}
                            {paymentMethod === "payOnline" ? (
                                <span>& Đã thanh toán</span>
                            ) : (
                                ""
                            )}
                        </span>
                    </div>
                ) : (
                    ""
                )}

                <div className="order-button">
                    {status === "pendding" && cancelOrder === false ? (
                        <button
                            type="button"
                            className="shipping"
                            onClick={() => handleShippingOrder(order)}
                        >
                            Xác nhận đơn hàng
                        </button>
                    ) : (
                        ""
                    )}

                    {cancelOrder === true ? (
                        <>
                            <span> Khách yêu cầu hủy đơn </span>
                            <button
                                type="button"
                                className="shipping"
                                onClick={() => handleDeleteOrder(order)}
                            >
                                Hủy đơn
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default Order;
