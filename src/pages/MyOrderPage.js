<<<<<<< HEAD
import React from "react";
import Header from "../components/header/Header";
import MyOrder from "../components/MyOrder/MyOrder";

function MyOrderPage() {
    return (
        <>
            <Header></Header>
            <MyOrder></MyOrder>
        </>
    );
}

export default MyOrderPage;
=======
import React from 'react';
import Header from '../components/header/Header';
import MyOrder from '../components/MyOrder/MyOrder';

function MyOrderPage(props) {
    return (
        <div>
           <Header></Header> 
           <MyOrder></MyOrder>
        </div>
    );
}

export default MyOrderPage;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
