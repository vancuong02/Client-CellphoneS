import axios from "axios";
import queryString from "query-string";
import { BASE_URL } from "../constants/UserConstant";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "content-type": "application/json",
        Accept: "application/json",
    },
    paramsSerializer: (params) => {
        return queryString.stringify(params, {
            encode: false,
        });
    },
});

<<<<<<< HEAD
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
=======
axiosClient.interceptors.response?.use(
    (response) => {
        if (response && response?.data) {
            return response?.data;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        }
        return response;
    },
    (error) => {
        throw error;
    }
);
