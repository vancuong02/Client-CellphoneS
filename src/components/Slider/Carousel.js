<<<<<<< HEAD
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Carousel.css";
=======
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
<<<<<<< HEAD
    let { slider1, slider2 } = props;
=======
    let { slider, slider1, slider2 } = props;
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const [nav, setNav] = useState({ nav1: null, nav2: null });

    useEffect(() => {
        setNav({
            nav1: slider1,
            nav2: slider2,
        });
<<<<<<< HEAD
    }, [slider1, slider2]);
=======
    }, []);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    const settings = {
        loop: true,
        dots: false,
        infinite: true,
<<<<<<< HEAD
=======
        // autoplay: true,
        // autoplaySpeed: 2500,
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
<<<<<<< HEAD
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
=======
                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"></img>
                            </div>
                            <div key={2}>
                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"></img>
                            </div>
                            <div key={3}>
                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"></img>
                            </div>
                            <div key={4}>
                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/04/banner/Frame-46764-min-1920x450.png"></img>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
