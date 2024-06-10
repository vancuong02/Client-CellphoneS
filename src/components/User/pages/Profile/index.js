import { message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUserById } from "../../../../actions/UserAction";

const Profile = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userSignin);
    const { user } = useSelector((state) => state.users);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (userInfo && userInfo._id) {
            dispatch(getUserById(userInfo._id));
        }
    }, [dispatch, userInfo]);

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChangeValue = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const isValidVietnamesePhoneNumber = (phoneNumber) => {
        const vietnamesePhoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return vietnamesePhoneNumberRegex.test(phoneNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.name === "" ||
            formData.phone === "" ||
            formData.address === ""
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
            if (!isValidVietnamesePhoneNumber(formData.phone)) {
                message.error({
                    content: "Số điện thoại không hợp lệ",
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
        dispatch(updateUserById(userInfo._id, formData)).then(() => {
            success();
            setFormData(formData);
        });
    };

    const success = () => {
        message.success({
            content: "Sửa thông tin thành công",
            duration: 1,
            className: "custom-class",
            style: {
                position: "absolute",
                right: "1rem",
                top: "4rem",
                fontSize: "16px",
            },
        });
    };

    return (
        <div className="profile-container">
            <div className="profile-title">
                <span className="profile-heading">Hồ sơ của bạn</span>
                <span className="profile-des">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                </span>
            </div>
            <form onSubmit={handleSubmit} className="profile-content">
                <div className="profile-control">
                    <label>Email</label>
                    <span className="profile-email">
                        {formData.email || ""}
                    </span>
                </div>
                <div className="profile-control">
                    <label>Tên</label>
                    <input
                        type="text"
                        value={formData.name || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("name", event.target.value)
                        }
                    />
                </div>
                <div className="profile-control">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        value={formData.phone || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("phone", event.target.value)
                        }
                    />
                </div>
                <div className="profile-control">
                    <label>Địa chỉ</label>
                    <input
                        type="text"
                        value={formData.address || ""}
                        className="profile-input"
                        onChange={(event) =>
                            handleChangeValue("address", event.target.value)
                        }
                    />
                </div>
                <button className="btn-save-profile" type="submit">
                    Lưu
                </button>
            </form>
        </div>
    );
};

export default Profile;
