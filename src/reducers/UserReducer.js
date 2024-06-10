import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
} from "../constants/UserConstant";

export const UserSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return { ...state, userInfo: action.payload };
        case "USER_LOGIN_FAIL":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const UserSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_SIGNUP_SUCCESS":
            return { ...state, userInfo: action.payload };
        case "USER_SIGNUP_FAIL":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const UserSignoutReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_SIGNOUT_SUCCESS":
            return { ...state };
        default:
            return state;
    }
};

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_USER": {
            return { ...state, user: action.payload };
        }

        case "GET_USER_BY_ID_SUCCESS": {
            return { ...state, user: action.payload, error: null };
        }

        case "GET_USER_BY_ID_FAILL": {
            return { ...state, error: action.payload };
        }

        case "UPDATE_USER_BY_ID_SUCCESS": {
            return { ...state, user: action.payload, error: null };
        }

        case "UPDATE_USER_BY_ID_FAIL": {
            return { ...state, error: action.payload };
        }

        case "DELETE_USER": {
            return { ...state };
        }

        default:
            return state;
    }
};

export const forgotPasswordReducer = (
    state = { loading: false, success: false, error: null },
    action
) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return { ...state, loading: true };
        case FORGOT_PASSWORD_SUCCESS:
            return { loading: false, success: action.payload, error: null };
        case FORGOT_PASSWORD_FAIL:
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};

export const resetPasswordReducer = (
    state = { loading: false, success: false, error: null },
    action
) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return { ...state, loading: true };
        case RESET_PASSWORD_SUCCESS:
            return { loading: false, success: action.payload, error: null };
        case RESET_PASSWORD_FAIL:
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};
