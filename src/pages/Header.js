import React from 'react';
import '../css/style.css';
import '../css/media.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <header className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="heading-left-part">
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <span>Call Us:</span>
                                    <a href="tel:+123-456-789">+123-456-789</a>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />

                                    </div>
                                    <span>Email:</span>
                                    <a href="mailto:hello@example.com">hello@example.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 centered-icons">
                            <ul className="heading-right-part">
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faSkype} />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar />
        </div>
    );
}

export default Header;
