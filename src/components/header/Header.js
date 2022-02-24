import React from 'react';
import './Header.scss'
/* svg imports */
import Phone from "../../assets/img/vectorHeader/Vector-2.svg";
import Map from "../../assets/img/vectorHeader/Vector-1.svg";
import Time from "../../assets/img/vectorHeader/Vector.svg";
import Facebook from "../../assets/img/vectorHeader/Vector-5.svg";
import Twitter from "../../assets/img/vectorHeader/logo-twitter 1.svg";
import Instagram from "../../assets/img/vectorHeader/Vector-4.svg";
import Pinterest from "../../assets/img/vectorHeader/Vector-3.svg";
import Search from "../../assets/img/vectorNavigation/search 1.svg";
import Globe from "../../assets/img/vectorNavigation/Vector.svg";
import User from "../../assets/img/vectorNavigation/Group.svg";
import ShoppingBag from "../../assets/img/vectorNavigation/shopping-bag 2.svg";

/*routes*/
import { Link } from "react-router-dom";
import { useState } from 'react'
import MenuHeader from "../Menu/MenuHeader";
import Burger from "./Burger/Burger.js"

const Header = () => {
    const hide = () => { setMenuOpen(false) }
    const show = () => { setMenuOpen(true) }
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => { setMenuOpen(!menuOpen) }
    return (
        <div className='header' data-test-id='header'>
                <section className="nav1">
                    <div className="block1-nav1">
                        <div>
                            <img src={Phone} alt="phone" width="15" height="15"/>
                            <span>+375 29 100 20 30</span>
                        </div>
                        <div>
                            <img src={Map} alt="map" width="15" height="15"/>
                            <span>Belarus, Gomel, Lange 17</span>
                        </div>
                        <div>
                            <img src={Time} alt="time" width="15" height="15"/>
                            <span>All week 24/7</span>
                        </div>
                    </div>
                    <div className="block2-nav1">
                        <img src={Facebook} alt="facebook" width="20" height="20"/>
                        <img src={Twitter} alt="twitter" width="20" height="20"/>
                        <img src={Instagram} alt="instagram" width="20" height="20"/>
                        <img src={Pinterest} alt="pinterest" width="20" height="20"/>
                    </div>
                </section>

                <section className="nav2">
                    <div onBlur={hide}>
                        <div>
                            <Link to='/' className='header-nav-logo' data-test-id='header-logo-link'>
                                CleverShop
                            </Link>
                        </div>

                        <ul className="menu" data-test-id='burger-menu'>
                            <MenuHeader
                                show={show}
                                items={[
                                    "about us",
                                    "women",
                                    "men",
                                    "beauty",
                                    "accessories",
                                    "blog",
                                    "contact",
                                ]}
                            />
                        </ul>

                        <div className='nav2-img'>
                            <img src={Search} alt="search" height="25" width="25"/>
                            <img src={Globe} alt="globe" height="25" width="25"/>
                            <img src={User} alt="user" height="25" width="25"/>
                            <img src={ShoppingBag} alt="shoppingBag" height="25" width="25"/>
                        </div>

                        <Burger toggleMenu={toggleMenu} isOpen={menuOpen} />

                    </div>
                </section>
            <style>{`
                @media(max-width: 996px) { 
                    .menu{
                    transform: translate${menuOpen ? '(0)' : '(-100%)'};
                    }
                    body{
                        overflow: ${menuOpen ? 'hidden' : 'auto'} 
                    }
                }
        `}</style>
        </div>

    );
}

export default Header;
