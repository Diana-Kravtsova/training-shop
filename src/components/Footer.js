import React from "react";
/* svg imports */
import Facebook from "../assets/img/vectorHeader/Vector-5.svg";
import Twitter from "../assets/img/vectorHeader/logo-twitter 1.svg";
import Instagram from "../assets/img/vectorHeader/Vector-4.svg";
import Pinterest from "../assets/img/vectorHeader/Vector-3.svg";
import Location from "../assets/img/vectorFooter/location-marker 1.svg";
import Phone from "../assets/img/vectorHeader/Vector-2.svg";
import TimeDark from "../assets/img/vectorFooter/timeDark.svg";
import Mail from "../assets/img/vectorFooter/Vector.svg";
import Card1 from "../assets/img/vectorFooter/cards/card1.svg";
import Card2 from "../assets/img/vectorFooter/cards/card2.svg";
import Card3 from "../assets/img/vectorFooter/cards/card3.svg";
import Card4 from "../assets/img/vectorFooter/cards/card4.svg";
import Card5 from "../assets/img/vectorFooter/cards/card5.svg";
import Card6 from "../assets/img/vectorFooter/cards/card6.svg";
import Card7 from "../assets/img/vectorFooter/cards/card7.svg";

/* routes */
import MenuFooter from "./MenuFooter";

const Footer = () => {
    return (
        <div className='footer' data-test-id='footer'>
            <div className="email">
                <span>Be in touch with us:</span>
                <input type="email" id="email" placeholder="Enter your email"
                       pattern=".+@globex\.com"/>
                <button><span>Join us</span></button>
                <div className="footer-social">
                    <img src={Facebook} alt="facebook" width="20" height="20"/>
                    <img src={Twitter} alt="twitter" width="20" height="20"/>
                    <img src={Instagram} alt="instagram" width="20" height="20"/>
                    <img src={Pinterest} alt="pinterest" width="20" height="20"/>
                </div>
            </div>
            <nav className="footer-nav">
                <div className="footer-nav-categories">
                    <ul>
                        <li>Categories</li>

                        <MenuFooter
                            items={[
                                "men",
                                "women",
                                "accessories",
                                "beauty"
                            ]}
                        />

                    </ul>
                </div>
                <div className="footer-nav-information">
                    <ul>
                        <li>Information</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="footer-nav-links">
                    <ul>
                        <li>Useful links</li>
                        <li>Terms & Conditions</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping & Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-nav-contact">
                    <ul>
                        <li>Contact us</li>
                        <li>
                            <img src={Location} alt="location" width="15" height="15"/>
                            <span>Belarus, Gomel, Lange 17</span>
                        </li>
                        <li>
                            <img src={Phone} alt="phone" width="15" height="15"/>
                            <span>+375 29 100 20 30</span>
                        </li>
                        <li>
                            <img src={TimeDark} alt="time" width="15" height="15"/>
                            <span>All week 24/7</span>
                        </li>
                        <li>
                            <img src={Mail} alt="mail" width="15" height="15"/>
                            <span>info@clevertec.ru</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="copyright">
                <div><span>Copyright © 2032 all rights reserved</span></div>
                <div>
                    <img src={Card1} alt="card" width="50" height="20"/>
                    <img src={Card2} alt="card" width="50" height="20"/>
                    <img src={Card3} alt="card" width="50" height="20"/>
                    <img src={Card4} alt="card" width="50" height="20"/>
                    <img src={Card5} alt="card" width="50" height="20"/>
                    <img src={Card6} alt="card" width="50" height="20"/>
                    <img src={Card7} alt="card" width="50" height="20"/>
                </div>
                <div>
                    <a href="https://clevertec.ru/study/frontend.html" rel="noreferrer" target="_blank">Clevertec.ru/training</a>
                </div>
            </section>
        </div>
    );
};

export default Footer;