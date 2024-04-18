import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import test1 from '../images/test1.jpg'
import test2 from '../images/test2.jpg'
import test3 from '../images/test3.jpg'
import test5 from '../images/test5.jpg'
import test6 from '../images/test6.jpg'
import test7 from '../images/test7.jpg'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Testimonial = () => {
    return (
        <div>
            <section className='test-style'>
                <div className="container">
                    <div className="test-title-content">
                        <h3>Testimonial Slider</h3>
                    </div>
                    <div className="test-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Pages</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Testimonial Slider</span>
                    </div>
                </div>
            </section>

            <section className="test">
                <div className="container">
                    <div className="test-head">
                        <span>Testimonials</span>
                        <h3>What Our Client’s Say</h3>
                    </div>
                    <div className="test-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
                    </div>

                    <OwlCarousel className='owl-theme' responsive={{ '0': { items: 1 }, '768': { items: 2 } }} loop items={2} autoplay autoplaySpeed={1000} >
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test1} alt="test1" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>William Robart</h4>
                                    <span>Consulting Doctor</span>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test2} alt="test2" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>Jeson Smith</h4>
                                    <span>Dental Hygienist</span>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test3} alt="test3" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>Ravert Smith</h4>
                                    <span>Dental</span>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test5} alt="test5" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>Juhon Smith</h4>
                                    <span>Hygienist</span>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test6} alt="test6" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>Jivle jeck</h4>
                                    <span>Consulting</span>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="test-card">
                                <div className="test-img">
                                    <img src={test7} alt="test7" />
                                </div>
                                <div className="test-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur magna aliqua. Lorem Ipsum is simply ipsum dolor</p>
                                </div>
                                <div className="test-last">
                                    <h4>Kilva jeck</h4>
                                    <span>Consulting</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </section >

            <Subscribe />

            <Footer />

        </div>
    )
}

export default Testimonial
