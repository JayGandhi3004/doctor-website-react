import React from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="footer-img">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="footer-data-p">
                                <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis amet earum consectetur</p>
                            </div>
                            <div className="footer-social-icon">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon className='i' icon={faLinkedin} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon className='i' icon={faYoutube} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-3">
                            <div className="footer-data-2">
                                <div className="footer-head-2">
                                    <h3>Departments</h3>
                                </div>
                                <div className="footer-body-2">
                                    <ul>
                                        <li>Medicine</li>
                                        <li>Neurology</li>
                                        <li>Eye Care</li>
                                        <li>Cardiology</li>
                                        <li>Dental Care</li>
                                        <li>Pulmonary</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="footer-data-3">
                                <div className="footer-head-3">
                                    <h3>Opening Hours</h3>
                                </div>
                                <div className="footer-body-3">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="col-6">
                                                    Mon-Tue:
                                                </div>
                                                <div className="col-md-6">
                                                    6:00AM-10:00PM
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-6">
                                                    Wed-Thu:
                                                </div>
                                                <div className="col-md-6">
                                                    6:00AM-10:00PM
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-6">
                                                    Fri:
                                                </div>
                                                <div className="col-md-6">
                                                    6:00AM-04:00PM

                                                </div>
                                            </div>
                                        </li>
                                        <li className='border'>
                                            <div className="row">
                                                <div className="col-6">
                                                    Sun:                                                </div>
                                                <div className="col-md-6">
                                                    Closed</div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-3">
                            <div className="footer-data-4">
                                <div className="footer-head-4">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-body-4">
                                    <ul>
                                        <li>
                                            <div className="footer-last-content">
                                                <div className="footer-last-icon">
                                                    <FontAwesomeIcon className='i' icon={faPhone} />
                                                </div>
                                                <div className="footer-last-h4">
                                                    <h4>Hotline:</h4>
                                                </div>
                                            </div>
                                            <div className="footer-last-p">
                                                <p>+123-456-789</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-last-content">
                                                <div className="footer-last-icon">
                                                    <FontAwesomeIcon className='i' icon={faEnvelope} />
                                                </div>
                                                <div className="footer-last-h4">
                                                    <h4>Email:</h4>
                                                </div>
                                            </div>
                                            <div className="footer-last-p">
                                                <p>hello@example.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-last-content">
                                                <div className="footer-last-icon">
                                                    <FontAwesomeIcon className='i' icon={faLocationPin} />
                                                </div>
                                                <div className="footer-last-h4">
                                                    <h4>Address:</h4>
                                                </div>
                                            </div>
                                            <div className="footer-last-p">
                                                <p>124, Western Road, Melbourne Australia</p>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </footer >


            <section className="footer-last">
                <p>Copyright &copy; 2023 Medic - HTML Website Template. All Rights Reserved.</p>
            </section>

        </div >
    )
}

export default Footer
