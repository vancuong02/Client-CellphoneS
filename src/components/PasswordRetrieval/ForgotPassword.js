import React, { useEffect } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import "./PasswordRetrieval.css";
import { forgotPassword } from "../../actions/UserAction";

function ForgotPassword() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const forgotPasswordState = useSelector((state) => state.forgotPassword);
    const { success, error, loading } = forgotPasswordState;

    const onSubmit = (data) => {
        dispatch(forgotPassword(data.email));
    };

    useEffect(() => {
        if (success && !loading) {
            message.success(success);
        }
        if (error && !loading) {
            message.error(error);
        }
    }, [error, loading, success]);

    return (
        <div className="forgot-wrapper">
            <Link to="/login" className="back">
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <div className="login-title w3_title">
                <h1>CellphoneS</h1>
            </div>
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email là bắt buộc",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email sai định dạng",
                            },
                        })}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="error-message">{errors.email.message}</p>
                    )}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
