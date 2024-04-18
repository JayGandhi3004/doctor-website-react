import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Login = () => {
    return (
        <div>
            <section className='login-style'>
                <div className="container">
                    <div className="login-title-content">
                        <h3>Log In</h3>
                    </div>
                    <div className="login-text-content">
                        <p>Home</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <p>Pages</p>
                        <FontAwesomeIcon className='i' icon={faArrowRight} />
                        <span>Log In</span>
                    </div>
                </div>
            </section>

            <section className="login-form">
                <div className='container'>
                    <div className="login-contact-form">
                        <div className="login-title">
                            <h2>Log In to your account!</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione</p>
                        </div>
                        <form method="post">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" placeholder="Password" />
                            </div>
                            <div className="col-12">
                                <button className="default-btn btn-two" type="submit">
                                    Log In Now
                                </button>
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

export default Login
