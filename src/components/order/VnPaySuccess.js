import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
<<<<<<< HEAD
=======
import { BASE_URL } from "../../constants/UserConstant";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

export default function VnPaySuccess() {
    const location = useLocation();

    useEffect(() => {
        const getResultVNPay = async () => {
            const query = location.search;
<<<<<<< HEAD
            // eslint-disable-next-line no-unused-vars
            const { data } = await axios.get(
                `http://localhost:4000/payment/vnpay_return${query}`
=======
            const { data } = await axios.get(
                `${BASE_URL}/payment/vnpay_return${query}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            );
        };

        getResultVNPay();
<<<<<<< HEAD
    }, [location.search]);
=======
    }, []);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    return (
        <section id="order-success">
            <div className="order-success">
                <span>
                    <CheckOutlined></CheckOutlined>
                </span>
                <p>Đặt hàng thành công</p>
<<<<<<< HEAD
=======
                {/* <Link to="">OK</Link> */}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                <div className="links">
                    <Link to="/myOrder">Xem lại đơn hàng</Link>
                    <Link to="/">Trang chủ</Link>
                </div>
            </div>
        </section>
    );
}
