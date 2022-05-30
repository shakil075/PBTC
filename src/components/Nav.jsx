import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar/navbar.css";
import logo from "../img/college.png";

const Nav = () => {
    return (
        // <ul>
        //     <Link to="/">Home</Link>
        //     <Link to="/student-dashboard">Student Pannel</Link>
        //     <Link to="/teacher-dashboard">Teacher Pannel</Link>
        //     <Link to="/admin-dashboard">Admin Pannel</Link>
        //     <Link to="/bongobondhu-corner">Banggobondhu Corner</Link>
        // </ul>
        <div id="navbar" class="header">
            {/* <!-- Header Left Side --> */}
            <div class="headerLeft">
                <img src={logo} alt="logo" />
            </div>
            {/* <!-- Header Right Side --> */}
            <div class="headerRight">
                <div className="marquee">
                    <div className="marqueeLeft">HeadLine</div>
                    <div className="marqueeRight">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi quasi perferendis doloremque.
                    </div>
                </div>
                <div className="nav_links">
                    <div className="navLinks_left">
                        <a href="/">Home</a>

                        {/* <!-- Academic Lists --> */}
                        <div class="subNav">
                            <span class="subNavBtn">Academic</span>

                            <div class="subNavContent display">
                                {/* <!-- dropdown --> */}

                                <div class="dropDown">
                                    <div
                                        class="card"
                                        style={{ width: "18rem" }}
                                    >
                                        <div class="card-body">
                                            <h5 class="card-title">Hsc</h5>
                                            <p class="card-text">
                                                <div className="card_Box">
                                                    <h1>Class Routine</h1>
                                                    <div className="row">
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XI
                                                            </a>
                                                        </div>
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XII
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card_Box">
                                                    <h1>Syllabus</h1>
                                                    <div className="row">
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XI
                                                            </a>
                                                        </div>
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XII
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card_Box">
                                                    <h1>Result</h1>
                                                    <div className="row">
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XI
                                                            </a>
                                                        </div>
                                                        <div className="col-6 text-center">
                                                            <a
                                                                href="#"
                                                                class="card-link"
                                                            >
                                                                Class XII
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </p>
                                            <a href="#" class="card-link">
                                                Teachers
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- dropdown --> */}
                                <div class="dropDown">
                                    <div
                                        class="card"
                                        style={{ width: "18rem" }}
                                    >
                                        <div class="card-body">
                                            <h5 class="card-title">Degree</h5>
                                            <p class="card-text">
                                                <div className="card_Box">
                                                    <a href="">Class Routine</a>
                                                </div>
                                                <div className="card_Box">
                                                    <a href="">Syllabus</a>
                                                </div>
                                                <div className="card_Box">
                                                    <a href="">Result</a>
                                                </div>
                                            </p>
                                            <a href="#" class="card-link">
                                                Teachers
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- dropdown --> */}
                                <div class="dropDown">
                                    <div
                                        class="card"
                                        style={{ width: "18rem" }}
                                    >
                                        <div class="card-body">
                                            <p class="card-text">
                                                <div className="card_Box">
                                                    <a href="">
                                                        Co-curriculum Activities
                                                    </a>
                                                </div>
                                                <div className="card_Box">
                                                    <a href="">College Dress</a>
                                                </div>
                                                <div className="card_Box">
                                                    <a href="">Holidays</a>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- About Us Lists --> */}
                        <div class="subNav">
                            <span class="subNavBtn">About us</span>
                            <div class="subNavContent display">
                                <a href="">About pbtc college</a>
                                <a href="">Aim and Focus</a>
                                <a href="">Facilities</a>
                                <a href="">Achievements</a>
                                <a href="">News and Activities</a>
                                <a href="">Publications</a>
                                <a href="">Office Staffs</a>
                            </div>
                        </div>

                        <a href="">Bangabandhu Corner</a>
                    </div>
                    <a className="login" href="">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
