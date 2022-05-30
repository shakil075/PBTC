import React from "react";

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row g-5">
                    <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                        <div class="logo-footer d-flex justify-content-center align-items-center">
                            <h3>College logo</h3>
                        </div>
                        <ul class="logo-icon d-flex justify-content-center align-items-center ">
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-phone"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <ul class="foot-content">
                            <li>
                                <a href="">3400 S. 43rd St.</a>
                            </li>
                            <li>
                                <a href="">Milwaukee, WI 53234</a>
                            </li>
                            <li>
                                <a href="">414-382-6000</a>
                            </li>
                            <li>
                                <a href="">admissions@alverno.edu</a>
                            </li>
                            <li>
                                <a href="">Campus Map</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="foot-content">
                            <li>
                                <a href="">Careers at our college</a>
                            </li>
                            <li>
                                <a href="">Event Spaces</a>
                            </li>
                            <li>
                                <a href="">Trustees</a>
                            </li>
                            <li>
                                <a href="">Early Learning Center</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="foot-content">
                            <li>
                                <a href="">Faculty & Staff</a>
                            </li>
                            <li>
                                <a href="">Accreditation</a>
                            </li>
                            <li>
                                <a href="">Learning Outcomes</a>
                            </li>
                            <li>
                                <a href="">Harassment/Discrimination Policy</a>
                            </li>
                            <li>
                                <a href="">Institutional Review Board</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="text-center">© 2022 College, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
