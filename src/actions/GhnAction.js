import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";

export const createOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/order/update/${orderId}`
        );
        dispatch({ type: "CREATE_ORDER_GHN", payload: data });
    } catch (error) {
        dispatch({ type: "CREATE_ORDER_GHN_FAIL", payload: error });
    }
};

export const PrintOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/order/print/${orderId}`);
        window.open(data);
        dispatch({ type: "PRINT_ORDER_GHN", payload: data });
    } catch (error) {}
};
