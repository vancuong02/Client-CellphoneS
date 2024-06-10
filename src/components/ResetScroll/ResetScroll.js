import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetScroll() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);
    return null;
}

export default ResetScroll;
