import { faArrowRight, faBrain, faCapsules, faEye, faHeart, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from './Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Subscribe from './Subscribe';

const Department = () => {
    return (
        <div>
            <section className='department-style'>
                <div className="container">
                    <div className="department-title-content">
                        <h3>Department Slider</h3>
                    </div>
                    <div className="department-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Departments</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Department Slider</span>
                    </div>
                </div>
            </section>

            <section className="service">
                <div className="container">
                    <div className="service-head">
                        <span>Our Departments</span>
                        <h3>Our Healthcare <p>Departments</p></h3>
                    </div>
                    <div className="service-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
                    </div>
                    <div className="service-body">
                        <OwlCarousel className='owl-theme' responsive={{ '0': { items: 1 }, '768': { items: 2 }, '990': { items: 3 } }} loop items={3} autoplay autoplaySpeed={1000} >
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faCapsules} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Medicine</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faBrain} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Neurology</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faEye} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Eye Care</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faHeart} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Cardiology</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faTooth} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Dental Care</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faLungs} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Pulmonary</h3>
                                    </div>
                                    <div className="service-col-6-p">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit, unde fugiat autem earum luptatem sequuntur.</p>
                                    </div>
                                    <div className="service-col-6-btn">
                                        <button>Read More</button>
                                    </div>
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

export default Department
