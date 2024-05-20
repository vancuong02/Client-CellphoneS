import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";

export const getAllSelectList = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/selectList`);
        dispatch({ type: "GET_ALL_SELECT_LIST", payload: data });
    } catch (error) {}
};

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/selectList/create`,
            item
        );
        dispatch({ type: "CREATE_SELECT_LIST_ITEM", payload: data });
    } catch (error) {}
};

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const { data } = await axios.put(
            `${BASE_URL}/selectList/update/${item._id}`,
            item
        );
        dispatch({ type: "UPDATE_SELECT_LIST_ITEM", payload: data });
    } catch (error) {}
};

export const getSelectListItemById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/selectList/detail/${id}`);
        dispatch({ type: "GET_SELECT_LIST_ITEM_BY_ID", payload: data });
    } catch (error) {}
};

export const deleteSelectListItemById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(
            `${BASE_URL}/selectList/delete/${id}`
        );
        dispatch({ type: "DELETE_SELECT_LIST_ITEM_BY_ID", payload: data });
    } catch (error) {}
};
