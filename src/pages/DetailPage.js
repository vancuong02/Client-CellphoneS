import React from "react";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
<<<<<<< HEAD
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function DetailPage() {
    return (
        <>
            <Header />
            <Detail />
            <ScrollToTop></ScrollToTop>
        </>
=======

function DetailPage(props) {
    return (
        <div>
            <Header></Header>
            <Detail></Detail>
        </div>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    );
}

export default DetailPage;
