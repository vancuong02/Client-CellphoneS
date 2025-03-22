import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import "./Signup.css";
import { SignupUser } from "../../actions/UserAction";
import { message } from "antd";
import { useState } from "react";

function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const dispatch = useDispatch();
  const userSignup = useSelector((state) => state.userSignup);
  const { error } = userSignup;

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(SignupUser(data));
  };

  if (error) {
    message.error(error);
  }

  return (
    <div className="login-form w3_form">
      <Link to="/" className="back">
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back Home</span>
      </Link>
      <div className="login-title w3_title">
        <h1>Gearvn</h1>
      </div>
      <div className="login w3_login">
        <h2 className="login-header w3_header">Sign up</h2>
        <div className="w3l_grid">
          <form
            noValidate
            className="login-container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("name", {
                required: "Tên người dùng là bắt buộc",
              })}
              placeholder="Name"
            />
            {errors.name && (
              <p className="error-message">{errors.name?.message}</p>
            )}
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
              <p className="error-message">{errors.email?.message}</p>
            )}
            <div className="input-authentication-pass">
              <input
                type={showPass ? "text" : "password"}
                autoComplete="on"
                placeholder="Password"
                {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                })}
              />
              <div onClick={() => setShowPass(!showPass)} className="eys-passs">
                {showPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <div className="input-authentication-pass">
              <input
                type={showConfirmPass ? "text" : "password"}
                autoComplete="on"
                placeholder="Confirm Password"
                {...register("repeatPassword", {
                  required: "Nhập lại mật khẩu là bắt buộc",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Nhập lại mật khẩu không khớp",
                })}
              />
              <div
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="eys-passs"
              >
                {showConfirmPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
            {errors.repeatPassword && (
              <p className="error-message">{errors.repeatPassword?.message}</p>
            )}
            <input type="submit" defaultValue="Submit" />
          </form>
          <div className="bottom-text">
            <p>
              You already account?<Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
