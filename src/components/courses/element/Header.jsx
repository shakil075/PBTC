import React from "react";
import student from "../../../img/pages/bacteria.png";

const Header = () => {
    return (
        <header class="department">
            <div class="container">
                <div class="row flex-column-reverse flex-md-row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <div class="science-content d-flex flex-column justify-content-center  align-items-start animate-left">
                            <h3>Science</h3>
                            <p class="single-animation">
                                Science is the pursuit and application of
                                knowledge and understanding of the natural and
                                social world following a systematic methodology
                                based on evidence.
                            </p>
                            <a href="" class="cmn-btn">
                                See more
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div class="student-img">
                            <img src={student} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
