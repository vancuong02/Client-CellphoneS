import React from "react";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function DetailPage() {
    return (
        <>
            <Header />
            <Detail />
            <ScrollToTop></ScrollToTop>
        </>
    );
}

export default DetailPage;
