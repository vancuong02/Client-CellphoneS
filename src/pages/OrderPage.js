<<<<<<< HEAD
=======
import React from "react";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import Order from "../components/order/Order";
import Header from "../components/header/Header";
OrderPage.propTypes = {};

<<<<<<< HEAD
function OrderPage() {
    return (
        <>
            <Header />
            <Order></Order>
        </>
=======
function OrderPage(props) {
    return (
        <div>
            <Header />
            <Order></Order>
        </div>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    );
}

export default OrderPage;
