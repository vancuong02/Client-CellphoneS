import React from "react";
import Chatbox from "../components/Chat/Chat";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Slider/Carousel";
import IPhone from "../components/HotSale/components/Iphone";
import Xiaomi from "../components/HotSale/components/Xiaomi";
import Samsung from "../components/HotSale/components/Samsung";
import Watch from "../components/HotSale/components/AppleWatch";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function HomePage() {
    return (
        <div style={{ position: "relative" }}>
            <Chatbox />
            <Header></Header>
            <Carousel></Carousel>
            <IPhone></IPhone>
            <Samsung></Samsung>
            <Xiaomi></Xiaomi>
            <Watch></Watch>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default HomePage;
