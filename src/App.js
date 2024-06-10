import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import ProductPage from "./pages/ProductPage";
import MyOrderPage from "./pages/MyOrderPage";
import PaymentPage from "./pages/PaymentPage";
// import NotFoundPage from "./pages/NotFoundPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ResetScroll from "./components/ResetScroll/ResetScroll";
import UserPage from "./pages/UserPage";
import Profile from "./components/User/pages/Profile";
import ChangePassword from "./components/User/pages/ChangePassword";
import LikedProductsMe from "./components/User/pages/LikedProductsMe";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";

function App() {
    return (
        <div className="App">
            <Router>
                <ResetScroll></ResetScroll>
                <Route path="/" exact>
                    <HomePage></HomePage>
                </Route>

                <Route path="/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword></ForgotPassword>
                </Route>
                <Route path="/reset-password/:token">
                    <ResetPassword></ResetPassword>
                </Route>

                <Route path="/register">
                    <SignupPage></SignupPage>
                </Route>

                <Route path="/product">
                    <ProductPage></ProductPage>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage></DetailPage>
                </Route>

                <Route path="/cart">
                    <CartPage></CartPage>
                </Route>

                <Route path="/order">
                    <OrderPage></OrderPage>
                </Route>
                <Route path="/orderSuccess">
                    <OrderSuccessPage></OrderSuccessPage>
                </Route>
                <Route path="/payment">
                    <PaymentPage></PaymentPage>
                </Route>
                <Route path="/MyOrder">
                    <MyOrderPage></MyOrderPage>
                </Route>

                <Route path="/search">
                    <SearchPage></SearchPage>
                </Route>

                <Route path="/admin">
                    <AdminPage></AdminPage>
                </Route>

                <Route path="/user/profile">
                    <UserPage>
                        <Profile />
                    </UserPage>
                </Route>

                <Route path="/user/changePassword">
                    <UserPage>
                        <ChangePassword />
                    </UserPage>
                </Route>

                <Route path="/user/productLiked">
                    <UserPage>
                        <LikedProductsMe />
                    </UserPage>
                </Route>

                {/* <Route path="*">
                    <NotFoundPage />
                </Route> */}
            </Router>
        </div>
    );
}

export default App;
