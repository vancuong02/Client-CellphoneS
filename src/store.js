import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import {
    forgotPasswordReducer,
    resetPasswordReducer,
    userReducer,
    UserSigninReducer,
    UserSignupReducer,
} from "./reducers/UserReducer";

import {
    getAllProductReducer,
    getProductByIdReducer,
    searchProductReducer,
} from "./reducers/ProductReducer";

import {
    addressReducer,
    getAllOrderReducer,
    getOrderByUserReducer,
    OrderInfoReducer,
    orderPayReducer,
} from "./reducers/OrderReducer";

import {
    SelectListReducer,
    UpdateSelectListReducer,
} from "./reducers/SelectListReducer";

import {
    ListTypeProductReducer,
    TypeProductReducer,
} from "./reducers/ListTypeProductReducer";

import { CartReducer } from "./reducers/CartReducer";
import { InfoGhnReducer } from "./reducers/GhnReducer";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : undefined,
    },
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
    },
};

const reducer = combineReducers({
    users: userReducer,
    userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,
    allProduct: getAllProductReducer,
    getProductById: getProductByIdReducer,
    searchProduct: searchProductReducer,
    cart: CartReducer,
    allOrder: getAllOrderReducer,
    address: addressReducer,
    orderByUser: getOrderByUserReducer,
    orderInfo: OrderInfoReducer,
    payOrder: orderPayReducer,
    orderGhn: InfoGhnReducer,
    selectList: SelectListReducer,
    updateSelect: UpdateSelectListReducer,
    allTypeProduct: ListTypeProductReducer,
    detailType: TypeProductReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
