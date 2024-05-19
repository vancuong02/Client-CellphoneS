import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import "./Login.css";
import { login } from "../../actions/UserAction";

function Login(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const user = useSelector((state) => state.userSignin);
    const { userInfo } = user;

    const onSubmit = (data) => {
        dispatch(login(data));
    };

    useEffect(() => {
        if (userInfo) {
            history.push("/");
        }
    });

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
                        <input
                            type="password"
                            autoComplete="on"
                            placeholder="Password"
                            {...register("password", {
                                required: "Mật khẩu là bắt buộc",
                            })}
                        />
                        {errors.password && (
                            <p className="error-message">
                                {errors.password?.message}
                            </p>
                        )}
                        <input type="submit" defaultValue="Submit" />
                    </form>
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
                    <div className="bottom-text w3_bottom_text">
                        <p>
                            Do not have an account?
                            <Link to="/register">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
