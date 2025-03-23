import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";

export default function VnPaySuccess() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const getResultVNPay = async () => {
      const query = location.search;

      const { data } = await axios.get(
        `http://localhost:4000/order/payment-success${query}`
      );
      if (data.status === "success") {
        dispatch({ type: "CART_EMPTY" });
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalPriceOrderInCart");
      }
    };

    getResultVNPay();
  }, [location.search]);

  return (
    <section id="order-success">
      <div className="order-success">
        <span>
          <CheckOutlined></CheckOutlined>
        </span>
        <p>Đặt hàng thành công</p>
        <div className="links">
          <Link to="/myOrder">Xem lại đơn hàng</Link>
          <Link to="/">Trang chủ</Link>
        </div>
      </div>
    </section>
  );
}
