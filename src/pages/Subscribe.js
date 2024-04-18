import React from 'react'

const Subscribe = () => {
    return (
        <div>
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
                                    <button className='default-btn'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscribe
