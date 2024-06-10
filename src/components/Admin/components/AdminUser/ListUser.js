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
<<<<<<< HEAD
                        <th>Phone</th>
                        <th>Address</th>
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                    {users &&
                        Object.values(users).map((item, index) => (
                            <User key={index} user={item} number={index}></User>
                        ))}
=======
                    {users.map((item, index) => (
                        <User key={index} user={item} number={index}></User>
                    ))}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;
