import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";

export const getAllTypeProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/typeList`);
        dispatch({ type: "GET_ALL_TYPE_PRODUCT", payload: data });
    } catch (error) {}
};

export const CreateNewTypeProduct = (type) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/typeList/create`, type);
        dispatch({ type: "CREATE_NEW_TYPE_PRODUCT", payload: data });
    } catch (error) {}
};

export const deleteTypeProduct = (type) => async (dispatch) => {
    try {
        const { data } = await axios.delete(
            `${BASE_URL}/typeList/delete/${type._id}`
        );
        dispatch({ type: "DELETE_TYPE_PRODUCT", payload: data });
    } catch (error) {}
};
