<<<<<<< HEAD
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
=======
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import AllProduct from '../components/allProduct/AllProduct';

ProductPage.propTypes = {
    
};

function ProductPage(props) {
    return (
        <div>
            <Header></Header>
            <AllProduct></AllProduct>
        </div>
    );
}

export default ProductPage;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
