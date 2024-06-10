import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListOrder from "./ListOrder";
import { getAllOrder } from "../../../../actions/OrderAction";

function AdminOrderAll(props) {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.allOrder.order);

    useEffect(() => {
        dispatch(getAllOrder());
    }, [dispatch]);

    return (
        <div>
            {orders && orders.length > 0 && (
                <ListOrder orders={orders}></ListOrder>
            )}
            {orders && orders.length === 0 && <span>Chưa có đơn hàng nào</span>}
        </div>
    );
}

export default AdminOrderAll;
