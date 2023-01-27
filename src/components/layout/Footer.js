import React, { useEffect, useState } from 'react';
import { StyledFooter } from './styles';
import { navigate, Link } from "gatsby";
import headerLogo from "../../images/erudex-logo.png";
import googlePayBadge from "../../images/google-play-badge.png";
import phoneIcon from "../../images/icons/phone.svg";
import emailIcon from "../../images/icons/email.svg";

export default function Footer() {
    const [path, setPath] = useState("");
    const [privacyPath, setPrivacyPath] = useState(false);

    useEffect(() => {
        if (typeof window == undefined) {
            return;
        }
        if (window.location.href) {
            setPath(window.location.href);
        }
        if (path.includes("privacy") || path.includes("terms")) {
            setPrivacyPath(true);
        }
    }, [path]);
    return (
        <StyledFooter>
            <div className='wrapper'>
                <div className='contact-wrapper'>
                    <div className='left'>
                        <div onClick={() => navigate("/")} onKeyDown={() => navigate("/")} role="button" tabIndex={0}>
                            <img
                                className='logo'
                                alt="Logo"
                                src={headerLogo}
                            />
                        </div>
                        <h3 className='desc'>Erudex is one of the leading Ed-tech companies in India that offers Digital Teaching & Learning Solutions for schools & colleges between grades 1-12</h3>
                        <div className='download'>
                            <h4>DOWNLOAD OUR APP</h4>
                            <div onClick={() => window.open("https://play.google.com/store/apps/details?id=com.erudex.eduapp", "_blank")}
                                onKeyDown={() => window.open("https://play.google.com/store/apps/details?id=com.erudex.eduapp", "_blank")}
                                role="button" tabIndex={0}>
                                <img src={googlePayBadge} alt='play store' />
                            </div>
                        </div>
                        <div className='contact-info'>
                            <h4>CONTACT US</h4>
                            <div className='cta'>
                                <a href='tel:8499033333'>
                                    <img src={phoneIcon} alt='Phone Number' /> +91 8499 03 3333
                                </a>
                                <a href='mailto:support@erudex.com'>
                                    <img src={emailIcon} alt='Email' /> support@erudex.com
                                </a>
                            </div>
                        </div>
                    </div>
                    {!privacyPath &&
                        <div className='right'>
                            <div className='products'>
                                <h4>PRODUCTS</h4>
                                <ul>
                                    <li>
                                        <Link
                                            to=""
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={2000}
                                        >
                                            Foundation Programs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/psychometric-tests"
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={2000}
                                        >
                                            Psychometric Tests
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/ar-classes"
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={2000}
                                        >
                                            AR Experiences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://theglobalspellingbee.erudex.com/"
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={2000}
                                        >
                                            Spelling Bee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/virtual-labs"
                                            spy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={2000}
                                        >
                                            Virtual Labs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='social-links'>
                                <h4>GET IN TOUCH</h4>
                                <ul>
                                    <li>
                                        <a href="https://www.instagram.com/erudexapp/" target="_blank" rel="noopener noreferrer">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/weareerudex" target="_blank" rel="noopener noreferrer">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/erudex-private-limited" target="_blank" rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCgbmhCsE6-cyp3F_c-Mp_2Q" target="_blank" rel="noopener noreferrer">
                                            Youtube
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/weareerudex" target="_blank" rel="noopener noreferrer">
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                <hr />
                <div className='copyright-wrapper'>
                    <div className='left'>
                        COPYRIGHT © 2014 - 2022 — ERUDEX PRIVATE LIMITED - ALL RIGHTS RESERVED
                    </div>
                    <div className='right'>
                        <div onClick={() => navigate('/privacy/')}
                            onKeyDown={() => navigate('/privacy/')}
                            role="button"
                            tabIndex={0}
                        >
                            Privacy Policy
                        </div>
                        <div onClick={() => navigate('/terms/')}
                            onKeyDown={() => navigate('/terms/')}
                            role="button"
                            tabIndex={0}
                        >
                            Terms of Service
                        </div>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
}