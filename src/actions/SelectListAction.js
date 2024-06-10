import axios from "axios";
<<<<<<< HEAD

export const getAllSelectList = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:4000/selectList')
        dispatch({type: 'GET_ALL_SELECT_LIST', payload: data})
    } catch (error) {
    }
}

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:4000/selectList/create', item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
    }
}

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`http://localhost:4000/selectList/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
    }
}

export const getSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:4000/selectList/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
    }
}

export const deleteSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`http://localhost:4000/selectList/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
    }
}
=======
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
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
