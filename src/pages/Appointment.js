import React from 'react'
import appointment from '../images/appointment-img.jpg'
import { faArrowRight, faCalendar, faClock, faHeart, faMessage, faMobile, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Appointment = () => {
    return (
        <div>


            <section className='appointment-style'>
                <div className="container">
                    <div className="appointment-title-content">
                        <h3>Appointment</h3>
                    </div>
                    <div className="appointment-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Pages</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Appointment</span>
                    </div>
                </div>
            </section>

            <section className='appointment'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="appointment-form">
                                <div className="appointment-head">
                                    <p>Make An Appointment</p>
                                    <h2>We Are Here For You
                                    </h2>
                                </div>
                                <div className="appointment-data">
                                    <div className="row">
                                        <div className="col-md-6 position-relative">
                                            <input type="text" className="form-control pl-4" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faUser} />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faUser} />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone" />
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faMobile} />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <select id="options" name="options">
                                                <option value="Select Service">Select Service</option>
                                                <option value="option">Surgery & Radiology</option>
                                                <option value="option">Neurology</option>
                                                <option value="option">Angiography</option>
                                                <option value="option">Children Care</option>
                                                <option value="option">Orthopedics</option>
                                                <option value="option">Nuclear Magnetic</option>
                                                <option value="option">Eye Treatment</option>
                                                <option value="option">X-Ray</option>
                                            </select>
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faHeart} />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" />
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faCalendar} />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <select className='appointment-select' id="options" name="options">
                                                <option value="Select Time">Select Time</option>
                                                <option value="option">09.00 AM To 10.00 AM</option>
                                                <option value="option">10.00 AM To 11.00 AM</option>
                                                <option value="option">11.00 AM To 12.00 AM</option>
                                                <option value="option">12.00 AM To 1.00 PM</option>
                                                <option value="option">1.00 PM To 3.00 PM</option>
                                                <option value="option">4.00 PM To 6.00 PM</option>
                                                <option value="option">7.00 PM To 10.00 PM</option>
                                                <option value="option">10.00 PM To 11.00 PM</option>
                                            </select>
                                            <FontAwesomeIcon className='i position-absolute translate-middle-y' icon={faClock} />
                                        </div>
                                        <div className="col-12 position-relative">
                                            <textarea placeholder='Your Message' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <FontAwesomeIcon className='i-textarea position-absolute translate-middle-y' icon={faMessage} />
                                        </div>
                                        <div className="appointment-btn">
                                            <button className="default-btn">
                                                Send Request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="appointment-img">
                                <img src={appointment} alt="appointment" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <Subscribe />

            <Footer />

        </div>
    )
}

export default Appointment
