import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import user4 from '../images/user4.jpg'
import user5 from '../images/user5.jpg'
import user6 from '../images/user6.jpg'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Subscribe from './Subscribe'
import Footer from './Footer'

const PageDoctor = () => {
    return (
        <div>
            <section className='doctor-slider-style'>
                <div className="container">
                    <div className="doctor-slider-title-content">
                        <h3>Doctor Slider</h3>
                    </div>
                    <div className="doctor-slider-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Pages</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Doctor Slider</span>
                    </div>
                </div>
            </section>

            <section className="doctor">
                <div className="container">
                    <div className="doctor-head">
                        <span>Our Doctor's</span>
                        <h3>Our Expert Doctor's</h3>
                    </div>
                    <div className="doctor-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
                    </div>
                    <div className="doctor-slider-body">
                        <OwlCarousel className='owl-theme' responsive={{ '0': { items: 1 }, '768': { items: 2 }, '990': { items: 3 } }} loop items={3} autoplay autoplaySpeed={1000} >
                            <div className='item'>
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user1} alt="user1" />
                                    </div>
                                    <div className="doctor-content">
                                        <h3>Dr. Andrew</h3>
                                        <span>Internist, Orthopedic Surgeon
                                        </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user2} alt="user2" />
                                    </div>
                                    <div class="doctor-content">
                                        <h3>Dr. Anna</h3>
                                        <span>Internist, General Practitioner</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user3} alt="user3" />
                                    </div>
                                    <div className="doctor-content">
                                        <h3>Dr. Andrew</h3>
                                        <span>Internist, Orthopedic Surgeon
                                        </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user4} alt="user4" />
                                    </div>
                                    <div className="doctor-content">
                                        <h3>Dr. Anna</h3>
                                        <span>Internist
                                        </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user5} alt="user5" />
                                    </div>
                                    <div className="doctor-content">
                                        <h3>Dr. Dilken</h3>
                                        <span>Orthopedic
                                        </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="doctor-body">
                                    <div className="doctor-img">
                                        <img src={user6} alt="user6" />
                                    </div>
                                    <div className="doctor-content">
                                        <h3>Dr. Jack</h3>
                                        <span>Surgeon
                                        </span>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faFacebook} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faInstagram} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='i' icon={faLinkedinIn} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>

            <Subscribe />

            <Footer />

        </div>
    )
}

export default PageDoctor
