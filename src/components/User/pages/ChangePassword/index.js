import { message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUserById } from "../../../../actions/UserAction";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userSignin);
    const { user } = useSelector((state) => state.users);

    const initalValue = {
        current: "",
        password: "",
        confirm: "",
    };
    const [formData, setFormData] = useState(initalValue);

    useEffect(() => {
        if (userInfo && userInfo._id) {
            dispatch(getUserById(userInfo._id));
        }
    }, [dispatch, userInfo]);

    const handleChangeValue = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.current === "" ||
            formData.password === "" ||
            formData.confirm === ""
        ) {
            message.error({
                content: "Vui lòng điền đầy đủ thông tin",
                duration: 1,
                className: "custom-class",
                style: {
                    position: "absolute",
                    right: "1rem",
                    top: "4rem",
                    fontSize: "16px",
                },
            });
            return;
        } else {
            if (formData.current !== user.password) {
                message.error({
                    content: "Mật khẩu hiện tại không đúng",
                    duration: 1,
                    className: "custom-class",
                    style: {
                        position: "absolute",
                        right: "1rem",
                        top: "4rem",
                        fontSize: "16px",
                    },
                });
                return;
            }
            if (formData.password === user.password) {
                message.error({
                    content:
                        "Mật khẩu mới không được trùng với mật khẩu hiện tại",
                    duration: 1,
                    className: "custom-class",
                    style: {
                        position: "absolute",
                        right: "1rem",
                        top: "4rem",
                        fontSize: "16px",
                    },
                });
                return;
            }
            if (formData.confirm !== formData.password) {
                message.error({
                    content: "Mật khẩu không khớp",
                    duration: 1,
                    className: "custom-class",
                    style: {
                        position: "absolute",
                        right: "1rem",
                        top: "4rem",
                        fontSize: "16px",
                    },
                });
                return;
            }
        }
        dispatch(
            updateUserById(userInfo._id, { password: formData.password })
        ).then(() => {
            message.success({
                content: "Thay đổi mật khẩu thành công",
                duration: 1,
                className: "custom-class",
                style: {
                    position: "absolute",
                    right: "1rem",
                    top: "4rem",
                    fontSize: "16px",
                },
            });
            setFormData(initalValue);
        });
    };

    return (
        <div className="profile-container">
            <div className="profile-title">
                <span className="profile-heading">Thay Đổi Mật Khẩu</span>
                <span className="profile-des">
                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho
                    người khác
                </span>
            </div>
            <form onSubmit={handleSubmit} className="profile-content">
                <div className="profile-control">
                    <label>Mật Khẩu Hiện Tại</label>
                    <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={formData.current || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("current", event.target.value)
                        }
                    />
                    <div
                        onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="eys-pass"
                    >
                        {showCurrentPassword ? (
                            <EyeOutlined />
                        ) : (
                            <EyeInvisibleOutlined />
                        )}
                    </div>
                </div>
                <div className="profile-control">
                    <label>Mật Khẩu Mới</label>
                    <input
                        type={showNewPassword ? "text" : "password"}
                        value={formData.password || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("password", event.target.value)
                        }
                    />
                    <div
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="eys-pass"
                    >
                        {showNewPassword ? (
                            <EyeOutlined />
                        ) : (
                            <EyeInvisibleOutlined />
                        )}
                    </div>
                </div>
                <div className="profile-control">
                    <label>Xác Thực Mật Khẩu</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirm || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("confirm", event.target.value)
                        }
                    />
                    <div
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="eys-pass"
                    >
                        {showConfirmPassword ? (
                            <EyeOutlined />
                        ) : (
                            <EyeInvisibleOutlined />
                        )}
                    </div>
                </div>
                <button className="btn-save-profile" type="submit">
                    Lưu
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
