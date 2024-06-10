<<<<<<< HEAD
import { message } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Login.css";
import { getUserById, login } from "../../actions/UserAction";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

=======
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import "./Login.css";
import { login } from "../../actions/UserAction";

function Login() {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

<<<<<<< HEAD
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, error } = userSignin;
=======
    const user = useSelector((state) => state.userSignin);
    const { userInfo } = user;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    const onSubmit = (data) => {
        dispatch(login(data));
    };

<<<<<<< HEAD
    if (error) {
        message.error(error);
    }

    useEffect(() => {
        if (userInfo) {
            history.push("/");
            dispatch(getUserById(userInfo._id));
        }
    }, [userInfo, history, dispatch]);
=======
    useEffect(() => {
        if (userInfo) {
            history.push("/");
        }
    });
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    return (
        <div className="login-form w3_form">
            <Link to="/" className="back">
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back Home</span>
            </Link>
            <div className="login-title w3_title">
                <h1>CellphoneS</h1>
            </div>
            <div className="login w3_login">
                <h2 className="login-header w3_header">Log in</h2>
                <div className="w3l_grid">
                    <form
                        className="login-container"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
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
                            <p className="error-message">
                                {errors.email?.message}
                            </p>
                        )}
<<<<<<< HEAD
                        <div className="input-authentication-pass">
                            <input
                                autoComplete="on"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Mật khẩu là bắt buộc",
                                })}
                                type={showPassword ? "text" : "password"}
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="eys-passs"
                            >
                                {showPassword ? (
                                    <EyeOutlined />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )}
                            </div>
                        </div>
=======
                        <input
                            type="password"
                            autoComplete="on"
                            placeholder="Password"
                            {...register("password", {
                                required: "Mật khẩu là bắt buộc",
                            })}
                        />
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                        {errors.password && (
                            <p className="error-message">
                                {errors.password?.message}
                            </p>
                        )}
                        <input type="submit" defaultValue="Submit" />
                    </form>
<<<<<<< HEAD
=======
                    <div className="second-section w3_section">
                        <div className="bottom-header w3_bottom">
                            <h3>OR</h3>
                        </div>
                        <div className="social-links w3_social">
                            <ul>
                                <li>
                                    <Link
                                        className="facebook"
                                        to="#"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="twitter"
                                        to="#"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="googleplus"
                                        to="#"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    <div className="bottom-text w3_bottom_text">
                        <p>
                            Do not have an account?
                            <Link to="/register">Sign up</Link>
                        </p>
                    </div>
<<<<<<< HEAD
                    <div className="bottom-text w3_bottom_text">
                        Forgot password?{" "}
                        <Link to="/forgot-password">Reset here</Link>
                    </div>
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                </div>
            </div>
        </div>
    );
}

export default Login;
