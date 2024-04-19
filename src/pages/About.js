import React from 'react'
import '../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCertificate, faCheck, faCheckCircle, faPlay, faTrophy, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import Footer from './Footer'


const About = () => {
  return (
    <div>
      <section className='about-style'>
        <div className="container">
          <div className="about-title-content">
            <h3>About Style One</h3>
          </div>
          <div className="about-text-content">
            <p>Home</p>
            <FontAwesomeIcon className='i' icon={faArrowRight} />
            <span>About Style One</span>
          </div>
        </div>
      </section>

      <section className="choose">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="choose-data">
                <div className="choose-head">
                  <p>About Us</p>
                </div>
                <div className='choose-title'>
                  <h2>
                    Tackle The Challenge Of Delivering Health Care
                  </h2>
                </div>
                <div className="choose-body">
                  <p className='choose-body-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim fuga natus non necessitatibus.</p>
                </div>
                <ul className="choose-icon2">
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    Consultations Wif Specialized Pediatricians
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    A Wide Range Of Laboratory Studies
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    Ultrasound Examination
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    ECG, Echocardiography
                  </li>
                </ul>
                <div className="choose-btn">
                  <button className="default-btn">
                    More Learn About
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="choose-img2">
                <button><FontAwesomeIcon className='i' icon={faPlay} /></button>
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
                <h3>Certified Doctor's </h3>
              </div>
            </div>
            <div className="col-4">
              <div className="choose-body-head">
                <h3>Success Treatment  </h3>
              </div>
            </div>
            <div className="col-4">
              <div className="choose-body-head">
                <h3>Modern Technology </h3>
              </div>
            </div>
            <div className="col-6">
              <div className="choose-img">
                <button><FontAwesomeIcon className='i' icon={faPlay} /></button>
              </div>
            </div>
            <div className="col-6">
              <div className="choose-data">
                <div className="choose-head">
                  <p>Certified Doctor's</p>
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
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    Consultations Wif Specialized Pediatricians
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    A Wide Range Of Laboratory Studies
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    Ultrasound Examination
                  </li>
                  <li>
                    <p><FontAwesomeIcon className='i' icon={faCheck} /> </p>
                    ECG, Echocardiography
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

      <section className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="subscribe-head">
                <h2>Subscribe Now
                </h2>
                <p>Get our latest news & update regularly</p>
              </div>
            </div>
            <div className="col-6">
              <div className="subscribe-body">
                <input type="email" placeholder='Enter Your Email' />
                <div className="subscribe-btn">
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
