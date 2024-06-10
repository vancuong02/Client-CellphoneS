<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetScroll() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);
=======
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetScroll(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    return null;
}

export default ResetScroll;
