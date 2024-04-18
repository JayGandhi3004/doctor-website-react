import React from 'react'
import error from '../images/error.jpg'
import { Link } from 'react-router-dom'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Error = () => {
    return (
        <div>
            <section className="error">
                <div className="error-img">
                    <img src={error} alt="error" />
                </div>
                <div className="error-data">
                    <h3>Page Not Found</h3>
                    <p>We’re sorry, the page you have looked for does not exist in our database! Maybe go to our home page or try to use a search?</p>
                </div>
                <Link to={"/"}><button class="default-btn active">Return To Home</button></Link>
            </section>

            <Subscribe />
            <Footer />
        </div>
    )
}

export default Error
