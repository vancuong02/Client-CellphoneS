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

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  if (error) {
    message.error(error);
  }

  useEffect(() => {
    if (userInfo) {
      history.push("/");
      dispatch(getUserById(userInfo._id));
    }
  }, [userInfo, history, dispatch]);

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
              <p className="error-message">{errors.email?.message}</p>
            )}
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
                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <input type="submit" defaultValue="Submit" />
          </form>
          <div className="bottom-text w3_bottom_text">
            <p>
              Do not have an account?
              <Link to="/register">Sign up</Link>
            </p>
          </div>
          <div className="bottom-text w3_bottom_text">
            Forgot password? <Link to="/forgot-password">Reset here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
