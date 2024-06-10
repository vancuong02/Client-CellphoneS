import React, { useEffect } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../actions/UserAction";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function ResetPassword() {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const { token } = useParams();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const resetPasswordState = useSelector((state) => state.resetPassword);
    const { loading, success, error } = resetPasswordState;

    const onSubmit = (data) => {
        dispatch(resetPassword(token, data.password));
    };

    useEffect(() => {
        if (success && !loading) {
            message.success(success);
        }
        if (error && !loading) {
            message.error("Yêu cầu hết hạn");
        }
    }, [error, loading, success]);

    const password = useWatch({
        control,
        name: "password",
    });

    return (
        <div className="forgot-wrapper">
            <div className="login-title w3_title">
                <h1>CellphoneS</h1>
            </div>
            <div className="forgot-password-form">
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="input-authentication-pass">
                        <input
                            type={showPass ? "text" : "password"}
                            autoComplete="on"
                            {...register("password", {
                                required: "Mật khẩu là bắt buộc",
                            })}
                            placeholder="Password"
                        />
                        <div
                            onClick={() => setShowPass(!showPass)}
                            className="eys-passs"
                        >
                            {showPass ? (
                                <EyeOutlined />
                            ) : (
                                <EyeInvisibleOutlined />
                            )}
                        </div>
                    </div>
                    {errors.password && (
                        <p className="error-message">
                            {errors.password.message}
                        </p>
                    )}
                    <div className="input-authentication-pass">
                        <input
                            type={showConfirmPass ? "text" : "password"}
                            autoComplete="on"
                            {...register("confirmPassword", {
                                required: "Nhập lại mật khẩu là bắt buộc",
                                validate: (value) =>
                                    value === password || "Mật khẩu không khớp",
                            })}
                            placeholder="Confirm Password"
                        />
                        <div
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
                            className="eys-passs"
                        >
                            {showConfirmPass ? (
                                <EyeOutlined />
                            ) : (
                                <EyeInvisibleOutlined />
                            )}
                        </div>
                    </div>
                    {errors.confirmPassword && (
                        <p className="error-message">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                    <input type="submit" value="Submit" />
                </form>

                {success && !loading && (
                    <div className="back-login-here">
                        <span>Quay lại trang đăng nhập</span>{" "}
                        <Link to="/login">Tại đây</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetPassword;
