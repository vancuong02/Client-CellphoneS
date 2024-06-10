import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderPaidByUser } from "../../../../actions/OrderAction";
import { formatPrice } from "../../../../untils/index";

const orderItem = (item) => (
    <div className="all-myorder-item">
        <div className="all-myorder-item-img">
<<<<<<< HEAD
            <img src={item.image} alt="alllllll"></img>
=======
            <img src={item.image}></img>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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

export const orderParent = (item) => (
    <div className="all-myorder-parent-item">
        <div className="all-myorder-list">
            {item.orderItems.map((item) => orderItem(item))}
        </div>
        <div className="all-myorder-item-totalprice">
            <span>Tổng số tiền : </span>{" "}
            <strong>{formatPrice(item.totalPrice)}đ</strong>
        </div>
    </div>
);

function PaidOrder(props) {
    const dispatch = useDispatch();

    const { myOrdersPaid } = useSelector((state) => state.orderByUser);
    const { userInfo } = useSelector((state) => state.userSignin);

    useEffect(() => {
        dispatch(getOrderPaidByUser(userInfo._id));
    }, [dispatch, userInfo._id]);

    return (
        <div className="all-myorder">
            {myOrdersPaid && myOrdersPaid.length > 0
                ? myOrdersPaid.map((item) => orderParent(item))
                : "Bạn không có đơn hàng nào"}
        </div>
    );
}

export default PaidOrder;
