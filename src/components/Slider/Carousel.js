import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                            <div key={1}>
                                <img
                                    src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"
                                    alt="hihi"
                                ></img>
                            </div>
                            <div key={2}>
                                <img
                                    src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"
                                    alt="hihi"
                                ></img>
                            </div>
                            <div key={3}>
                                <img
                                    src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"
                                    alt="hihi"
                                ></img>
                            </div>
                            <div key={4}>
                                <img
                                    src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"
                                    alt="hihi"
                                ></img>
                            </div>
                        </Slider>
                        <div
                            className="carousel-left-move"
                            onClick={() => previous()}
                        >
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
                            <span>IPHONE CHÍNH HÃNG</span>
                            <span>NOTE 20 ULTRA 5G</span>
                            <span>XR CHÍNH HÃNG</span>
                            <span>APPLE WATCH SE</span>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
