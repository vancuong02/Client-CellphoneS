<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./AdminOrder.css";
import AdminOrderAll from "./AdminOrderAll";

function AdminOrder() {
    return (
        <Router>
            <div className="orderAdmin">
                <span>Orders</span>
=======
import React from "react";
import "./AdminOrder.css";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";

function AdminOrder(props) {
    return (
        <Router>
            <div className="order">
                <span>Orders</span>
                <AdminOrderMenu></AdminOrderMenu>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                <Switch>
                    <Route
                        path="/admin/order"
                        exact
                        component={AdminOrderAll}
                    ></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AdminOrder;
