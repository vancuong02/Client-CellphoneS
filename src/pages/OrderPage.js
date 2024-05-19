import React from "react";
import Order from "../components/order/Order";
import Header from "../components/header/Header";
OrderPage.propTypes = {};

function OrderPage(props) {
    return (
        <div>
            <Header />
            <Order></Order>
        </div>
    );
}

export default OrderPage;
