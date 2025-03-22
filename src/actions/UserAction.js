import axios from "axios";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constants/UserConstant";

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:4000/user/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SignupUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/user/register",
      user
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: "USER_SIGNUP_SUCCESS", payload: data });
    document.location.href = "/";
  } catch (error) {
    dispatch({
      type: "USER_SIGNUP_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SignoutUser = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_SIGNOUT_SUCCESS", payload: {} });
  document.location.href = "/";
};

export const getAllUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/user");
    dispatch({ type: "GET_ALL_USER", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ALL_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/user/${userId}`);
    dispatch({ type: "GET_USER_BY_ID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_USER_BY_ID_FAIL",
      payload: "User not found",
    });
  }
};

export const updateUserById = (userId, userData) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:4000/user/${userId}`,
      userData
    );
    dispatch({ type: "UPDATE_USER_BY_ID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_BY_ID_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`http://localhost:4000/user/${userId}`);
    dispatch({ type: "DELETE_USER", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAIL", error: error.message });
  }
};

// Lấy lại mất khẩu
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/user/forgot-password",
      { email },
      config
    );

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:4000/user/reset-password/${token}`,
      { password },
      config
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
