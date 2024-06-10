import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./AdminOrder.css";
import AdminOrderAll from "./AdminOrderAll";

function AdminOrder() {
    return (
        <Router>
            <div className="orderAdmin">
                <span>Orders</span>
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
