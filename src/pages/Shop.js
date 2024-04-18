import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import shop1 from '../images/shop1.jpg'
import shop2 from '../images/shop2.jpg'
import shop3 from '../images/shop3.jpg'
import shop4 from '../images/shop4.jpg'
import shop5 from '../images/shop5.jpg'
import shop6 from '../images/shop6.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Subscribe from './Subscribe'
import Footer from './Footer'

const Shop = () => {
    return (
        <div>
            <section className='shop-style'>
                <div className="container">
                    <div className="shop-title-content">
                        <h3>Shop Slider</h3>
                    </div>
                    <div className="shop-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Shop</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Shop Slider</span>
                    </div>
                </div>
            </section>

            <section className="shop">
                <div className="container">
                    <div className="shop-head">
                        <span>Product's</span>
                        <h3>Medical Products</h3>
                    </div>
                    <div className="shop-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
                    </div>
                    <div className="shop-body">
                        <OwlCarousel className='owl-theme' responsive={{ '0': { items: 1 }, '768': { items: 2 }, '990': { items: 3 } }} loop items={3} autoplay autoplaySpeed={1000} >
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop1} alt="shop1" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Armani</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>Digital BP Monitor</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$399.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop2} alt="shop2" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Canada</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>Non-Touch Thermometer</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$590.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop3} alt="shop3" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Moshi</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>Patient Monitor</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$450.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop4} alt="shop4" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Armani</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>Object Thermometer</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$120.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop5} alt="shop5" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Turnout</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>Esperanza Inhaler</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$370.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="shop-card">
                                    <div className="shop-img">
                                        <div className="shop-img-1">
                                            <img src={shop6} alt="shop6" />
                                        </div>
                                    </div>
                                    <div className="shop-col-6-p">
                                        <p>Swiss</p>
                                    </div>
                                    <div className="shop-col-6-h3">
                                        <h3>BP Machine</h3>
                                    </div>
                                    <div className="shop-col-6-span">
                                        <span>$399.00</span>
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

export default Shop
