import React from "react";
import Chatbox from "../components/Chat/Chat";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Slider/Carousel";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ComputerRam from "../components/HotSale/components/ComputerRam";
import ComputerMouse from "../components/HotSale/components/ComputerMouse";
import ScreenComputer from "../components/HotSale/components/ScreenComputer";
import ComputerEarphone from "../components/HotSale/components/ComputerEarphone";
import ComputerKeyboard from "../components/HotSale/components/ComputerKeyboard";
import ComputerCase from "../components/HotSale/components/ComputerCase";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Chatbox />
      <Header></Header>
      <Carousel></Carousel>
      <ScreenComputer></ScreenComputer>
      <ComputerKeyboard></ComputerKeyboard>
      <ComputerMouse></ComputerMouse>
      <ComputerEarphone></ComputerEarphone>
      <ComputerRam></ComputerRam>
      <ComputerCase />
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default HomePage;
