import axios from "axios";
<<<<<<< HEAD
=======
import { BASE_URL } from "../constants/UserConstant";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
let config = {
    headers: {
        "Content-Type": "application/json",
        Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
    },
};

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.post(
            "http://localhost:4000/order/create",
            order,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.post(`${BASE_URL}/order/create`, order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "ORDER_CREATE-SUCCESS", payload: data });
        dispatch({ type: "CART_EMTY" });
        localStorage.removeItem("cartItems");
    } catch (error) {}
};

export const updateOrder = (orderId, order) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();

        const { data } = await axios.post(
<<<<<<< HEAD
            `http://localhost:4000/order/update/${orderId}`,
=======
            `${BASE_URL}/order/update/${orderId}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            order,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
        dispatch({ type: "ORDER_UPDATE-SUCCESS", payload: data });
    } catch (error) {}
};

export const cancelOrder = (orderId) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(
<<<<<<< HEAD
            `http://localhost:4000/order/cancel/${orderId}`
=======
            `${BASE_URL}/order/cancel/${orderId}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        );
        dispatch({ type: "CANCEL_ORDER", payload: data });
    } catch (error) {}
};

export const getAllOrder = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.get(`http://localhost:4000/order/`, {
=======
        const { data } = await axios.get(`${BASE_URL}/order/`, {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: "GET_ALL_ORDER", payload: data });
    } catch (error) {}
};

export const RemoveAllOrder = () => async (dispatch, getState) => {
    dispatch({ type: "REMOVE_ALL_ORDER" });
};

// export const GetAllOrderPaypal = () => async (dispatch, getState) => {
//   try {
//     const {
//       userSignin: { userInfo },
//     } = getState();
<<<<<<< HEAD
//     const { data } = await axios.get(`http://localhost:4000/order/orderPaypal`, {
=======
//     const { data } = await axios.get(`${BASE_URL}/order/orderPaypal`, {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     });
//     dispatch({ type: "GET_ALL_ORDER_PAYPAL", payload: data });
//   } catch (error) {
//   }
// };

export const GetAllOrderPendding = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.get(
            `http://localhost:4000/order/orderPendding`,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.get(`${BASE_URL}/order/orderPendding`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "GET_ALL_ORDER_PENDDING", payload: data });
    } catch (error) {}
};

export const GetAllOrderShipping = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.get(
            `http://localhost:4000/order/orderShipping`,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.get(`${BASE_URL}/order/orderShipping`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "GET_ALL_ORDER_SHIPPING", payload: data });
    } catch (error) {}
};

export const GetAllOrderPaid = () => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.get(
            `http://localhost:4000/order/orderPaid`,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.get(`${BASE_URL}/order/orderPaid`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "GET_ALL_ORDER_PAID", payload: data });
    } catch (error) {}
};

export const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await axios.delete(
<<<<<<< HEAD
            `http://localhost:4000/order/delete/${orderId}`,
=======
            `${BASE_URL}/order/delete/${orderId}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
        dispatch({ type: "DELETE_ORDER", payload: data });
    } catch (error) {}
};

export const ShippingOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();

        const { data } = await axios.put(
<<<<<<< HEAD
            `http://localhost:4000/order/shipping/${orderId}`,
=======
            `${BASE_URL}/order/shipping/${orderId}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
        dispatch({ type: "SHIPPING_ORDER", payload: data });
    } catch (error) {}
};

export const PaidOrder = (orderId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();

<<<<<<< HEAD
        const { data } = await axios.put(
            `http://localhost:4000/order/paid/${orderId}`,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.put(`${BASE_URL}/order/paid/${orderId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "PAID_ORDER", payload: data });
    } catch (error) {}
};

export const GetAllProvince = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province`,
            config
        );
        dispatch({ type: "GET_ALL_PROVINCE", payload: data });
    } catch (error) {}
};

export const GetAllDistrict = (provinceId) => async (dispatch, getState) => {
    const newConfig = {
        headers: {
            Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
        },
        params: {
            province_id: provinceId,
        },
    };
    try {
        const { data } = await axios.get(
            `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district`,
            newConfig
        );
        dispatch({ type: "GET_ALL_DISTRICT", payload: data });
    } catch (error) {}
};

export const GetAllWard = (districtId) => async (dispatch, getState) => {
    const newConfig = {
        headers: {
            Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
        },
        params: {
            district_id: districtId,
        },
    };
    try {
        const { data } = await axios.get(
            `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?${districtId}`,
            newConfig
        );
        dispatch({ type: "GET_ALL_WARD", payload: data });
    } catch (error) {}
};

//-----------------------  user

export const getOrderByUser = (idUser) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
<<<<<<< HEAD
        const { data } = await axios.get(
            `http://localhost:4000/order/${idUser}`,
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
=======
        const { data } = await axios.get(`${BASE_URL}/order/${idUser}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        dispatch({ type: "GET_ORDER_BY_USER", payload: data });
    } catch (error) {}
};

export const getOrderPenddingByUser =
    (idUser) => async (dispatch, getState) => {
        try {
            const {
                userSignin: { userInfo },
            } = getState();
            const { data } = await axios.get(
<<<<<<< HEAD
                `http://localhost:4000/order/orderPendding/${idUser}`,
=======
                `${BASE_URL}/order/orderPendding/${idUser}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            dispatch({ type: "GET_ORDER_PENDDING_BY_USER", payload: data });
        } catch (error) {}
    };

export const getOrderShippingByUser =
    (idUser) => async (dispatch, getState) => {
        try {
            const {
                userSignin: { userInfo },
            } = getState();
            const { data } = await axios.get(
<<<<<<< HEAD
                `http://localhost:4000/order/orderShipping/${idUser}`,
=======
                `${BASE_URL}/order/orderShipping/${idUser}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            dispatch({ type: "GET_ORDER_SHIPPING_BY_USER", payload: data });
        } catch (error) {}
    };

export const getOrderPaidByUser = (idUser) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await axios.get(
<<<<<<< HEAD
            `http://localhost:4000/order/orderPaid/${idUser}`,
=======
            `${BASE_URL}/order/orderPaid/${idUser}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }
        );
        dispatch({ type: "GET_ORDER_PAID_BY_USER", payload: data });
    } catch (error) {}
};

export const payOrder =
    (order, paymentResult) => async (dispatch, getState) => {
        const {
            userSignin: { userInfo },
        } = getState();
        try {
            const { data } = axios.put(
<<<<<<< HEAD
                `http://localhost:4000/order/pay/${order._id}`,
=======
                `${BASE_URL}/order/pay/${order._id}`,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                paymentResult,
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            dispatch({ type: "ORDER_PAY_SUCCESS", payload: data });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({ type: "ORDER_PAY_FAIL", payload: message });
        }
    };

export const OrderInfo = (orderInfo) => async (dispatch, getState) => {
    dispatch({ type: "ORDER_INFO", payload: orderInfo });
};
