/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";

<<<<<<< HEAD
function Footer() {
=======
function Footer(props) {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
<<<<<<< HEAD
                        <p>Support: +84 971 087 088 (07:00-21:00)</p>
                        <p>Delivery: 1800 6936 (07:00-21:00)</p>
                        <p>Email: cellphones@gmail.com</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>
                            <img src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"></img>
                        </p>
=======
                        <p>Support 028.71.087.088 (07:00-21:00)</p>
                        <p>Delivery 1800 6936 (07:00-21:00)</p>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
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
