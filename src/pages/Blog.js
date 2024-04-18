import React from 'react'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/3.jpg'
import news4 from '../images/news4.jpg'
import news5 from '../images/news5.jpg'
import news6 from '../images/news6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Subscribe from './Subscribe'
import Footer from './Footer'

const Blog = () => {
    return (
        <div>
            <section className='blog-style'>
                <div className="container">
                    <div className="blog-title-content">
                        <h3>Blog Slider</h3>
                    </div>
                    <div className="blog-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Blog</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Blog  Slider</span>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="container">
                    <div className="news-head">
                        <span>News</span>
                        <h2>Our Latest News
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
                    </div>
                    <div className="news-body">
                        <OwlCarousel className='owl-theme' responsive={{ '0': { items: 1 }, '768': { items: 2 }, '990': { items: 3 } }} loop items={3} autoplay autoplaySpeed={1000} >
                            <div class='item'>
                                <div className="card">
                                    <img src={news1} className="card-img-top" alt="news1" />
                                    <div className="card-body">
                                        <span>Admin <p>| 01 / 03 / 2023</p></span>
                                        <h5 className="card-title">Aspirin For Prevention</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card">
                                    <img src={news2} className="card-img-top" alt="news2" />
                                    <div className="card-body">
                                        <span>Admin <p>| 02 / 03 / 2023</p></span>
                                        <h5 className="card-title">New Operating Suites</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card">
                                    <img src={news3} className="card-img-top" alt="news3" />
                                    <div className="card-body">
                                        <span>Admin <p>| 03 / 03 / 2023</p></span>
                                        <h5 className="card-title">Medical Specialty Health</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card">
                                    <img src={news4} className="card-img-top" alt="news4" />
                                    <div className="card-body">
                                        <span>Admin <p>| 04 / 03 / 2023</p></span>
                                        <h5 className="card-title">Leading You To Health</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card">
                                    <img src={news5} className="card-img-top" alt="news5" />
                                    <div className="card-body">
                                        <span>Admin <p>| 05 / 03 / 2023</p></span>
                                        <h5 className="card-title">The Culture Of Care</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="card">
                                    <img src={news6} className="card-img-top" alt="news6" />
                                    <div className="card-body">
                                        <span>Admin <p>| 06 / 03 / 2023</p></span>
                                        <h5 className="card-title">A Healing Presence</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae suscipit commodi quis molestiae. Nihil magnam iure iste</p>
                                        <div className="news-btn">
                                            <button>Read More</button>
                                        </div>
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

export default Blog
