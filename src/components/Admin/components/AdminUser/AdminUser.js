import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../actions/UserAction";
import ListUser from "./ListUser";
import "./AdminUser.css";

<<<<<<< HEAD
function AdminUser() {
=======
function AdminUser(props) {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.user);

    useEffect(() => {
        dispatch(getAllUser());
<<<<<<< HEAD
    });

=======
    }, [dispatch]);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    return (
        <div className="admin-user">
            <span>Customers</span>
            {users ? <ListUser users={users}></ListUser> : <h2> Loading</h2>}
        </div>
    );
}

export default AdminUser;
