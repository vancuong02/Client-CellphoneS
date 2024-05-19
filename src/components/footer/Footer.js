/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";

function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <h2>cellphones</h2>
                    </div>
                    <div className="footer-top-about">
                        <h2>about</h2>
                        <ul>
                            <li>Về Chúng Tôi</li>
                            <li>Blog</li>
                            <li>Cơ Hội Nghề Nghiệp</li>
                            <li>Cửa Hàng</li>
                            <li>
                                <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-top-sp">
                        <h2>Always-on Support</h2>
                        <p>Support 028.71.087.088 (07:00-21:00)</p>
                        <p>Delivery 1800 6936 (07:00-21:00)</p>
                    </div>
                    <div className="footer-top-delivery">
                        <h2>Delivery</h2>
                        <ul>
                            <li>Shipping methods</li>
                            <li>Payment</li>
                            <li>Cash voucher</li>
                            <li>Shipping methods</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    <p>
                        Copyright © {currentYear} Cellphones. All rights
                        reserved
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
