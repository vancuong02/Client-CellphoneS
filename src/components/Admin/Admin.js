import React from "react";
import { useSelector } from "react-redux";
import "./Admin.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Routes from "./components/Routes";

function Admin() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();

    if (!userInfo || !userInfo.isAdmin) {
        history.push("/");
    }

    return (
        <Router>
            <Route
                render={() => (
                    <div className={`layout`}>
                        <Sidebar />
                        <div className="layout__content">
                            <div className="layout__content-main">
                                <Routes />
                            </div>
                        </div>
                    </div>
                )}
            ></Route>
        </Router>
    );
}

export default Admin;
