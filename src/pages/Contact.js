import { faArrowRight, faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Contact = () => {
    return (
        <div>
            <section className='contact-style'>
                <div className="container">
                    <div className="contact-title-content">
                        <h3>contact Style One</h3>
                    </div>
                    <div className="contact-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>contact Style One</span>
                    </div>
                </div>
            </section>

            <section className="service">
                <div className="container">
                    <div className="service-body">
                        <div className="row service-row">
                            <div className="col-4">
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faEnvelope} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Email Us:</h3>
                                    </div>
                                    <div className="service-col-6-p service-p">
                                        <p>hello@example.com</p>
                                        <p>info@medic.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faPhone} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>Call Us:</h3>
                                    </div>
                                    <div className="service-col-6-p service-p">
                                        <p>+123-456-789</p>
                                        <p>+153-567-984</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="service-card">
                                    <div className="service-img">
                                        <FontAwesomeIcon className='i' icon={faLocationPin} />
                                    </div>
                                    <div className="service-col-6-h3">
                                        <h3>London</h3>
                                    </div>
                                    <div className="service-col-6-p service-p">
                                        <p>124, Western Road, Melbourne</p>
                                        <p> Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form">
                <div className="container">
                    <div className="contact-field">
                        <div className="contact-head">
                            <h3>Drop Us A Message For Any Query</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus molestiae, neque earum magnam enim, magni maiores laudantium ratione libero sapiente eum molestias</p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="name" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Your Phone" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="name" placeholder="Your Subject" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea placeholder='Your Message' className="form-control" name="" id="" cols="50" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="default-btn btn-two" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Subscribe />

            <Footer />
        </div>
    )
}

export default Contact
