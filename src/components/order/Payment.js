import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { createOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";

export default function Payment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [setSdkReady] = useState(false);
    const [choosePay, setChoosePay] = useState({
        payLater: false,
        payOnline: false,
    });

    const { order } = useSelector((state) => state.orderInfo);

    const payLater = () => {
        setChoosePay({ payOnline: false, payLater: true });
    };

    const payOnline = () => {
        setChoosePay({ payLater: false, payOnline: true });
    };

    const successPaymentHandler = (paymentResult) => {
        const OrderPaid = {
            ...order,
            status: "pendding",
            paymentMethod: "payOnline",
            paymentResult: { ...paymentResult },
        };
        dispatch(createOrder(OrderPaid));
        history.push("/orderSuccess");
    };

    const SendOrderPayLater = () => {
        const OrderPaid = {
            ...order,
            status: "pendding",
            paymentMethod: "payLater",
        };

        dispatch(createOrder(OrderPaid));
        history.push("/orderSuccess");
    };

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await axios.get(
                "http://localhost:4000/api/config/paypal"
            );
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);

            addPayPalScript();
        };
    }, [setSdkReady]);
    return (
        <div className="choose-pay">
            <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
            <div className="choose">
                <button
                    type="submit"
                    className={choosePay.payLater ? "active" : ""}
                    onClick={() => payLater()}
                >
                    Thanh toán khi nhận hàng
                </button>
                <button
                    type="submit"
                    className={choosePay.payOnline ? "active" : ""}
                    onClick={() => payOnline()}
                >
                    Thanh toán Online
                </button>
            </div>
            {choosePay.payLater ? (
                <div className="customer-order">
                    <button onClick={SendOrderPayLater}>Đặt Hàng</button>
                </div>
            ) : (
                ""
            )}
            {choosePay.payOnline ? (
                <button type="submit" className="paypal">
                    <PayPalButton
                        className="paypal-btn"
                        style={{ color: "white", marginTop: "1rem" }}
                        amount={128}
                        onSuccess={successPaymentHandler}
                    ></PayPalButton>
                </button>
            ) : (
                ""
            )}
        </div>
    );
}
