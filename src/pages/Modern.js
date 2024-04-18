import React from 'react'
import '../css/style.css';
import '../css/media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faComputer, faMedkit, faStar, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import man from '../images/banner.png'
import { faCertificate, faCheckCircle, faTrophy, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons/faCapsules'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
import { faEye, faHeart, faLungs, faTooth } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import test1 from '../images/test1.jpg'
import test2 from '../images/test2.jpg'
import test3 from '../images/test3.jpg'
import faqimg from '../images/faq-img.jpg'
import appointment from '../images/appointment-img.jpg'
import { faCalendar, faClock, faMessage, faMobile, faUser } from '@fortawesome/free-solid-svg-icons'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/3.jpg'
import Subscribe from './Subscribe';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Modern = () => {
  return (
    <div>
      <section className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <span>Welcome To Medic</span>
                    <h1>Exceptional Medical Specialty Healthcare</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad, adipisci fugiat maiores earum voluptatibus temporibus, optio libero provident.</p>
                    <div className="banner-btn">
                      <Link to={"/department"} >
                        <button className="default-btn">View Departments</button>
                      </Link>
                      <Link to={"/contact"}>
                        <button className="default-btn active">Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className='banner-area-img'>
                    <img src={man} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="about-data">
                <div className="about-head">
                  <p>About Us</p>
                </div>
                <div className='about-title'>
                  <h2>
                    Tackle The Challenge Of Delivering Health Care
                  </h2>
                </div>
                <div className="about-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna</p>
                </div>
                <ul className="about-icon">
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /></p>
                    Consultations Wif Specialized Pediatricians
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /></p>
                    A Wide Range Of Laboratory Studies
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /></p>
                    Ultrasound Examination
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /></p>
                    ECG, Echocardiography
                  </li>
                </ul>
                <div className="about-btn">
                  <button className="default-btn">
                    More About Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 col-md-6">
                  <div className="about-card">
                    <div className="about-img">
                      <FontAwesomeIcon className='i' icon={faUserDoctor} />
                    </div>
                    <div className="about-col-6-h3">
                      <h3>Skilled Doctors</h3>
                    </div>
                    <div className="about-col-6-p">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="about-col-6-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="about-card">
                    <div className="about-img">
                      <FontAwesomeIcon className='i' icon={faComputer} />
                    </div>
                    <div className="about-col-6-h3">
                      <h3>Quality Services</h3>
                    </div>
                    <div className="about-col-6-p">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="about-col-6-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="about-card">
                    <div className="about-img">
                      <FontAwesomeIcon className='i' icon={faStar} />
                    </div>
                    <div className="about-col-6-h3">
                      <h3>Positive Reviews</h3>
                    </div>
                    <div className="about-col-6-p">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="about-col-6-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="about-card">
                    <div className="about-img">
                      <FontAwesomeIcon className='i' icon={faMedkit} />
                    </div>
                    <div className="about-col-6-h3">
                      <h3>Latest Equipment</h3>
                    </div>
                    <div className="about-col-6-p">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className="about-col-6-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expert">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="expert-card">
                <div className="expert-img">
                  <FontAwesomeIcon className='i' icon={faUserCircle} />
                </div>
                <div className="expert-col-6-h3">
                  <h3>540 +</h3>
                </div>
                <div className="expert-col-6-p">
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="expert-card">
                <div className="expert-img">
                  <FontAwesomeIcon className='i' icon={faCheckCircle} />
                </div>
                <div className="expert-col-6-h3">
                  <h3>990 +</h3>
                </div>
                <div className="expert-col-6-p">
                  <p>Successful Story</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="expert-card">
                <div className="expert-img">
                  <FontAwesomeIcon className='i' icon={faTrophy} />
                </div>
                <div className="expert-col-6-h3">
                  <h3>3500 +</h3>
                </div>
                <div className="expert-col-6-p">
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="expert-card">
                <div className="expert-img">
                  <FontAwesomeIcon className='i' icon={faCertificate} />
                </div>
                <div className="expert-col-6-h3">
                  <h3>54 +</h3>
                </div>
                <div className="expert-col-6-p">
                  <p>Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <div className="service-head">
            <span>Our Services</span>
            <h3>Our Healthcare <p>Services</p></h3>
          </div>
          <div className="service-data">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
          </div>
          <div className="service-body">
            <div className="row">
              <div className="col-4">
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
              <div className="col-4">
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
              <div className="col-4">
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
              <div className="col-4">
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
              <div className="col-4">
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
              <div className="col-4">
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
            </div>
          </div>
        </div>
      </section>

      <section className="choose">
        <div className="container">
          <div className="choose-head">
            <span>Why Choose Us</span>
            <h3>Why We Are Different</h3>
          </div>
          <div className="choose-data">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="choose-body-head">
                <Link to={"/certified"}>
                  <h3>Certified Doctor's </h3>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="choose-body-head">
                <Link to={"/success"}>
                  <h3>Success Treatment  </h3>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="choose-body-head">
                <Link to={"/modern"}>
                  <h3>Modern Technology </h3>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="choose-img choose-img3">
                <button><FontAwesomeIcon className='i' icon={faPlay} /></button>
              </div>
            </div>
            <div className="col-6">
              <div className="choose-data">
                <div className="choose-head">
                  <p>Modern Technology</p>
                </div>
                <div className='choose-title'>
                  <h2>
                    Tackle The Challenge Of Delivering Health Care
                  </h2>
                </div>
                <div className="choose-body">
                  <p className='choose-body-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim fuga natus non necessitatibus.</p>
                </div>
                <ul className="choose-icon">
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} />
                    </p>
                    Consultations Wif Specialized Pediatricians
                  </li>
                  <li>

                    <p><FontAwesomeIcon className='i' icon={faCheck} />
                    </p>                                        A Wide Range Of Laboratory Studies
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} />
                    </p>                                        Ultrasound Examination
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} />
                    </p>                                        ECG, Echocardiography
                  </li>
                </ul>
                <div className="choose-btn">
                  <button className="default-btn">
                    More Learn About
                  </button>
                </div>
              </div>
            </div>
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
          <div className="row doctor-row">
            <div className="col-4">
              <div className="doctor-body">
                <div className="doctor-img">
                  <img src={user1} alt="user1" />
                </div>
                <div class="doctor-content">
                  <h3>Dr. Anthony</h3>
                  <span>Surgeon, Сardiologist</span>
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
            <div className="col-4">
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
            <div className="col-4">
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
          </OwlCarousel>

        </div>
      </section >

      <section className="faq">
        <div className="container">
          <div className="faq-head">
            <span>FAQ'S</span>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="faq-data">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={faqimg} alt="faqimg" />
            </div>
            <div className="col-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >What can me expect at the first appointment?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >What should I do if I miss my appointment?</button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    > What is the fee for doctors if visit home?</button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      What is an academic medical center?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      How are residents supervised?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >

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

      <section className="news">
        <div className="container">
          <div className="news-head">
            <span>News</span>
            <h2>Our Latest News
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat</p>
          </div>
          <div className="news-body">
            <div className="row">
              <div className="col-4">
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
              <div className="col-4">
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
              <div className="col-4">
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
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  )
}

export default Modern
