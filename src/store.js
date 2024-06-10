<<<<<<< HEAD
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import {
    forgotPasswordReducer,
    resetPasswordReducer,
    userReducer,
    UserSigninReducer,
    UserSignupReducer,
} from "./reducers/UserReducer";

=======
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
    getAllUserReducer,
    UserSigninReducer,
    UserSignupReducer,
} from "./reducers/UserReducer";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import {
    getAllProductReducer,
    getProductByIdReducer,
    searchProductReducer,
} from "./reducers/ProductReducer";

<<<<<<< HEAD
=======
import { CartReducer } from "./reducers/CartReducer";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import {
    addressReducer,
    getAllOrderReducer,
    getOrderByUserReducer,
    OrderInfoReducer,
    orderPayReducer,
} from "./reducers/OrderReducer";
<<<<<<< HEAD

=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import {
    SelectListReducer,
    UpdateSelectListReducer,
} from "./reducers/SelectListReducer";
<<<<<<< HEAD

=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import {
    ListTypeProductReducer,
    TypeProductReducer,
} from "./reducers/ListTypeProductReducer";
<<<<<<< HEAD

import { CartReducer } from "./reducers/CartReducer";
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
<<<<<<< HEAD
};

const reducer = combineReducers({
    users: userReducer,
=======
    //   shippingAddress: localStorage.getItem('shippingAddress')
    //   ? JSON.parse(localStorage.getItem('shippingAddress'))
    //   : {},
};

const reducer = combineReducers({
    users: getAllUserReducer,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
<<<<<<< HEAD
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
