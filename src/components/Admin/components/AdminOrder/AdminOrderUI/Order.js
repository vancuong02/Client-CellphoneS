import React from "react";
import { useDispatch } from "react-redux";
import { createOrderGhn } from "../../../../../actions/GhnAction";
import {
    deleteOrder,
    getAllOrder,
    ShippingOrder,
} from "../../../../../actions/OrderAction";
import {
    formatPrice,
    formatDateOrderPaypal,
} from "../../../../../untils/index";

function Order(props) {
    const { order } = props;
    const dispatch = useDispatch();

    const {
        orderItems,
        totalPrice,
        paymentMethod,
        cancelOrder,
        shippingAddress,
        status,
        paymentResult,
    } = order;

    const handleShippingOrder = (order) => {
        dispatch(createOrderGhn(order._id));
        dispatch(ShippingOrder(order._id));
        dispatch(getAllOrder());
    };

    const handleDeleteOrder = (order) => {
        dispatch(deleteOrder(order._id));
        dispatch(getAllOrder());
    };

    return (
        <>
            <div className="order-list">
                <div className="order-list-items">
                    {orderItems.map((item, index) => (
                        <div key={index} className="order-items-item">
                            <span className="img">
                                <img src={item.image} alt="alo"></img>
                            </span>
                            <span className="qty">Qty: {item.qty}</span>
                            <span className="name">{item.name}</span>
                            <span className="price">
                                {formatPrice(item.salePrice)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="toatalPrice">
                    <span>Tổng tiền: {formatPrice(totalPrice)}</span>
                </div>
                <div className="order-info">
                    <div className="order-info-address">
                        <b>Tên khách hàng : </b> {"  "}
                        {shippingAddress?.name}.
                    </div>
                    <div className="order-info-address">
                        <b>Địa chỉ : </b> {" Số nhà "}
                        {shippingAddress?.detail}, {shippingAddress?.district},{" "}
                        {shippingAddress?.ward}, {shippingAddress?.province}.
                    </div>
                    <div className="order-info-address">
                        <b>Số điện thoại : </b> {"  "}
                        {shippingAddress?.phone}.
                    </div>
                </div>

                {paymentResult ? (
                    <div className="order-payment-check">
                        Paid :{" "}
                        {formatDateOrderPaypal(paymentResult.update_time)}
                    </div>
                ) : (
                    ""
                )}

                <div className="order-bottom">
                    {status === "shipping" ? (
                        <div className="order-status">
                            <span>
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
                            <>
                                <button
                                    type="button"
                                    className="shipping"
                                    onClick={() => handleShippingOrder(order)}
                                >
                                    Xác nhận đơn hàng
                                </button>
                            </>
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
            </div>
        </>
    );
}

export default Order;
