import React from "react";
import Header from "../components/header/Header";
import AllProduct from "../components/allProduct/AllProduct";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/footer/Footer";

ProductPage.propTypes = {};

function ProductPage(props) {
    return (
        <>
            <Header></Header>
            <AllProduct></AllProduct>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
        </>
    );
}

export default ProductPage;
