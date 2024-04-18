import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Signup = () => {
    return (
        <div>
            <section className='signup-style'>
                <div className="container">
                    <div className="signup-title-content">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="signup-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Pages</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Sign Up</span>
                    </div>
                </div>
            </section>

            <section className="signup-form">
                <div className="container">
                    <div className="signup-contact-form">
                        <div className="signup-title">
                            <h2>Create An Account!</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione</p>
                        </div>
                        <form method="post">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Enter Your Username" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="name" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="default-btn btn-two" type="submit">
                                        Register Account
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >


            <Subscribe />
            <Footer />
        </div >
    )
}

export default Signup
