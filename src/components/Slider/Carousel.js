import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner/banner_1.webp";
import banner2 from "../../assets/banner/banner_2.webp";
import banner3 from "../../assets/banner/banner_3.webp";
import banner4 from "../../assets/banner/banner_4.webp";

const banners = [banner1, banner2, banner3, banner4];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let { slider1, slider2 } = props;
  const [nav, setNav] = useState({ nav1: null, nav2: null });

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2,
    });
  }, [slider1, slider2]);

  const settings = {
    loop: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    slider1.slickNext();
  };
  const previous = () => {
    slider2.slickPrev();
  };

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider
              asNavFor={nav.nav2}
              ref={(slider) => (slider1 = slider)}
              {...settings}
            >
              {banners.map((src, index) => (
                <div key={index} className="banner-home-page">
                  <img height={450} src={src} alt={`Banner ${index + 1}`} />
                </div>
              ))}
            </Slider>

            <div className="carousel-left-move" onClick={() => previous()}>
              <div className="prev">
                <LeftOutlined></LeftOutlined>
              </div>
              <div className="next" onClick={() => next()}>
                <RightOutlined></RightOutlined>
              </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider
              asNavFor={nav.nav1}
              ref={(slider) => (slider2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <span>MÀN HÌNH CHÍNH HÃNG</span>
              <span>BÀN PHÍM CƠ</span>
              <span>CHUỘT GAMING</span>
              <span>TAI NGHE CHÍNH HÃNG</span>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
