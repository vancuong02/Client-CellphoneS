import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdminProduct from "./AdminProduct/AdminProduct";
import AdminCreate from "./AdminProduct/AdminCreate";
import AdminUpdate from "./AdminProduct/AdminUpdate";
<<<<<<< HEAD
import AdminUser from "./AdminUser/AdminUser";
import ReviewProduct from "./AdminProduct/ReviewProduct/ReviewProduct";
import DataFilterProduct from "./AdminProduct/DataFilterProduct/DataFilterProduct";
import AdminOrder from "./AdminOrder/AdminOrder";
import RevenueStatistics from "./AdminStatistical/RevenueStatistics";
=======
import AdminOrder from "./AdminOrder/AdminOrder";
import AdminUser from "./AdminUser/AdminUser";
import ReviewProduct from "./AdminProduct/ReviewProduct/ReviewProduct";
import DataFilterProduct from "./AdminProduct/DataFilterProduct/DataFilterProduct";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

function Routes(props) {
    return (
        <Switch>
            <Route path="/admin/" exact component={Dashboard} />
            <Route path="/admin/customer" component={AdminUser} />

            <Route path="/admin/product/create" component={AdminCreate} />
            <Route
                path="/admin/product/update/info"
                component={DataFilterProduct}
            />
            <Route path="/admin/product/update/:id" component={AdminUpdate} />
            <Route
                path="/admin/product/reviewProduct/:id"
                component={ReviewProduct}
            />
            <Route path="/admin/product" component={AdminProduct} />

            <Route path="/admin/order" component={AdminOrder} />
<<<<<<< HEAD
            <Route path="/admin/statistical" component={RevenueStatistics} />
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        </Switch>
    );
}

export default Routes;
