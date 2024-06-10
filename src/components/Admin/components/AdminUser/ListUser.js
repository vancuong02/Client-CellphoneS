import React from "react";
import User from "./User";

function ListUser(props) {
    const { users } = props;

    return (
        <div className="admin-user-list">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        Object.values(users).map((item, index) => (
                            <User key={index} user={item} number={index}></User>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;
