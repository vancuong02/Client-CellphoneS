import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  getOrderPenddingByUser,
} from "../../../../actions/OrderAction";
import { formatPrice } from "../../../../untils/index";
import "./PenddingOrder.css";

function PenddingOrder(props) {
  const [listOrders, setListOrders] = useState();
  const dispatch = useDispatch();
  const { myOrdersPendding } = useSelector((state) => state.orderByUser);
  const { userInfo } = useSelector((state) => state.userSignin);

  useEffect(() => {
    dispatch(getOrderPenddingByUser(userInfo._id));
  }, [dispatch, userInfo._id]);

  const handleCancelOrder = (item) => {
    if (window.confirm("Bạn có chắc chắn muốn hủy đơn hàng hay không?")) {
      dispatch(cancelOrder(item._id));
      dispatch(getOrderPenddingByUser(userInfo._id));
    }
  };

  useEffect(() => {
    dispatch(getOrderPenddingByUser(userInfo._id));
    setListOrders(myOrdersPendding);
  }, [dispatch, myOrdersPendding, userInfo._id]);

  const orderParent = (item, index) => (
    <div key={index} className="all-myorder-parent-item">
      <div className="all-myorder-list">
        {item.orderItems.map((item, index) => orderItem(item, index))}
      </div>
      <div className="all-myorder-item-totalprice">
        {item.paymentMethod === "payOnline" ? (
          <span>Đã thanh toán : </span>
        ) : (
          <span>Tổng số tiền : </span>
        )}{" "}
        <strong>{formatPrice(item.totalPrice)}đ</strong>
        <div className="myorder-cancel">
          {item.cancelOrder ? (
            <span>Đang yêu cầu hủy đơn</span>
          ) : (
            <span
              className="cancel-product"
              onClick={() => handleCancelOrder(item)}
            >
              Hủy
            </span>
          )}
        </div>
      </div>
    </div>
  );
  const orderItem = (item, index) => (
    <div key={index} className="all-myorder-item">
      <div className="all-myorder-item-img">
        <img src={item.image} alt="" />
      </div>
      <div className="all-myorder-item-name">
        <p>{item.name}</p>
        <span>x{item.qty}</span>
      </div>
      <div className="all-myorder-item-price">
        {formatPrice(item.salePrice)}
      </div>
    </div>
  );

  return (
    <div className="all-myorder">
      {listOrders && listOrders.length > 0
        ? listOrders.map((item, index) => orderParent(item, index))
        : "Bạn không có đơn hàng nào"}
    </div>
  );
}

export default PenddingOrder;
