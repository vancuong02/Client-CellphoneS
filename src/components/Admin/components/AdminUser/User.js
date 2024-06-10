/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser, getAllUser } from "../../../../actions/UserAction";

function User(props) {
    const { user, number } = props;
    const dispatch = useDispatch();
    const handleDeleteUser = (user) => {
        const confirmDeleteUser = confirm(
            `Bạn có chắc chắn muốn xóa user ${user.name} không ?`
        );
        if (confirmDeleteUser) {
            dispatch(deleteUser(user._id));
            dispatch(getAllUser());
        }
    };

    return (
        <tr>
            <td>{number + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td className="delete-user" onClick={() => handleDeleteUser(user)}>
                <DeleteOutlined />
            </td>
        </tr>
    );
}

export default User;
