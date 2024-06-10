import axios from "axios";
<<<<<<< HEAD
=======
import { BASE_URL } from "../constants/UserConstant";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

export const createOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.post(
<<<<<<< HEAD
            `http://localhost:4000/order/update/${orderId}`
=======
            `${BASE_URL}/order/update/${orderId}`
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        );
        dispatch({ type: "CREATE_ORDER_GHN", payload: data });
    } catch (error) {
        dispatch({ type: "CREATE_ORDER_GHN_FAIL", payload: error });
    }
};

export const PrintOrderGhn = (orderId) => async (dispatch) => {
    try {
<<<<<<< HEAD
        const { data } = await axios.get(
            `http://localhost:4000/order/print/${orderId}`
        );
=======
        const { data } = await axios.get(`${BASE_URL}/order/print/${orderId}`);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        window.open(data);
        dispatch({ type: "PRINT_ORDER_GHN", payload: data });
    } catch (error) {}
};
