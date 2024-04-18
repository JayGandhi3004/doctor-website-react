import React, { useEffect, useState } from 'react'
import '../css/style.css';
import '../css/media.css';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <div className="nav-area desktop-nav">
                <div className={isScrolled ? "header scrolled" : "header"}>
                    <div className="navbar-area">
                        <div className="main-nav">
                            <nav className="navbar navbar-expand-md">
                                <div className="container">
                                    <Link className="navbar-brand" to={"/"}>
                                        < img src={logo} alt="Logo" />
                                    </Link>
                                    <div className="collapse navbar-collapse mean-menu" style={{ display: 'block' }}>
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                                <Link to={"/"} className="nav-link active">
                                                    Home
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link active">Homepage Style One</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Homepage Style Two</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">One Page Home</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Boxed Homepage</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Dark Homepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/about"} className="nav-link">About Us
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">About Style One</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">About Style Two</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/department"} className="nav-link">
                                                    Department
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Department Grid</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Department Slider</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Department Details Left Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Department Details Right Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)l" className="nav-link">Department Details No Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/shop"} className="nav-link">
                                                    Shop
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Shop Grid</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Shop Slider</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Shop List</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Shop Details</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Cart</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Checkout</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/login"} className="nav-link">Log In</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/signup"} className="nav-link">Sign Up</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link">
                                                    Pages
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link to={"/pagedoctor"} className="nav-link">Doctor</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/testimonial"} className="nav-link">Testimonial</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">FAQ</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/appointment"} className="nav-link">Appointment</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/error"} className="nav-link">404 Error Page</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Page Left Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Page Right Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Page No Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/blog"} className="nav-link">
                                                    Blog Classic
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Grid</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Slider</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Left Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Right Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Details Left Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Details Right Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Blog Details No Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/contact"} className="nav-link">Contact
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Contact Style One</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link">Contact Style Two</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="others-option">
                                            <div className="get-quote">
                                                <Link to={"/appointment"}>
                                                    <button className='default-btn'>
                                                        Get An Appointment
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="nav-area mobile-nav mean-container">
                            <nav className="mean-bar">
                                <button
                                    className="navbar-toggler toggle-white"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar"
                                    aria-controls="offcanvasNavbar"
                                    aria-label="Toggle navigation"
                                >
                                    <FontAwesomeIcon className="navbar-toggler-icon" icon={faBars} />
                                </button>
                                <div
                                    className="offcanvas offcanvas-start"
                                    tabIndex={-1}
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                >
                                    <div className="offcanvas-header">
                                        <a className="navbar-brand" href="#">
                                            <img src={logo} alt="logo" />
                                        </a>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Home
                                                    <FontAwesomeIcon className="i" icon={faPlus} />

                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="/" className="dropdown-item">
                                                            <p>Homepage Style One</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Homepage Style Two</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>one page Home</p>

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Boxed HomePage</p>


                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p> dark HomePage</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    About Us
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link
                                                            to="/about"
                                                            className="dropdown-item"
                                                        >
                                                            <p>About Style One</p>

                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p> About Style Two</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Department
                                                    <FontAwesomeIcon className="i" icon={faPlus} />

                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link
                                                            to="/department"
                                                            className="dropdown-item"
                                                        >
                                                            <p>Department Grid</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Department Slider</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Department Details Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Department Details Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p> Department Details No Sidebar</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Shop
                                                    <FontAwesomeIcon className="i" icon={faPlus} />

                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link
                                                            to="/shop"
                                                            className="dropdown-item"
                                                        >
                                                            <p>Shop Grid</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Shop Slider</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Shop List</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Shop Details</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Cart</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Checkout</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/login" className="dropdown-item">
                                                            <p>Log In</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/signup" className="dropdown-item">
                                                            <p> Sign Up</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Pages
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="/pagedoctor" className="dropdown-item">
                                                            <p>Doctor</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/testimonial" className="dropdown-item">
                                                            <p> Testimonial</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>FAQ</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/appointment"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Appointment</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/error" className="dropdown-item">
                                                            <p>404 Error Page</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p> Page Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>  Page Right Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Page No Sidebar</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Blog Classic
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="/blog" className="dropdown-item">
                                                            <p> Blog Grid</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Blog Slider</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Blog Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="react:web(0)"
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            <p>Blog Right Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Blog Details Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Blog Details Right Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p>Blog Details No Sidebar</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Contact
                                                    <FontAwesomeIcon className="i" icon={faPlus} />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="/contact" className="dropdown-item">
                                                            <p> Contact Style One</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="react:web(0)" className="dropdown-item">
                                                            <p> Contact Style Two</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                        <Link className="mobile-logo" to={"/"}>
                            < img src={logo} alt="Logo" />
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Navbar
