import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";
export const getAllConversationList = (product) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/chat`);
        dispatch({ type: "GET_ALL_CONVERSATION", payload: data });
    } catch (error) {}
};

export const updateIdConversation = (conversation) => async (dispatch) => {
    dispatch({ type: "UPDATE_ID_CONVERSATION", payload: conversation });
};

export const updateLastMessageConversation = (message) => async (dispatch) => {
    dispatch({ type: "UPDATE_LAST_MESSAGE_CONVERSATION", payload: message });
};

export const showConversation = (conversation) => async (dispatch) => {
    dispatch({ type: "SHOW_CONVERSATION", payload: conversation });
};

export const SeenConversation = (idConversation) => async (dispatch) => {
    dispatch({ type: "SEEN_CONVERSATION", payload: idConversation });
};
