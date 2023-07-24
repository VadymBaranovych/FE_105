import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../img/footer-bg.jpg';
import logo from '../../img/logo.png';

import { SiInstagram } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si'; 
import { SiTwitter } from 'react-icons/si'; 
import { SiGoogle } from 'react-icons/si'; 
import { SiYoutube } from 'react-icons/si'; 
import { SiPinterest } from 'react-icons/si';
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Cinestar</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                    <div className="footer__content__social">
                        <IconContext.Provider value={{size:'2rem', color:'$main-color'}}>
                            <a href="https://instagram.com">
                                <SiInstagram className='instagram'/>
                            </a>
                            <a href="https://facebook.com">
                                <SiFacebook className='facebook'/>
                            </a>
                            <a href="https://twitter.com">
                                <SiTwitter className='twitter'/>
                            </a>
                            <a href="https://google.com">
                                <SiGoogle className='google'/>
                            </a>
                            <a href="https://youtube.com">
                                <SiYoutube className='youtube'/>
                            </a>
                            <a href="https://pinterest.com">
                                <SiPinterest className='pinterest'/>
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;