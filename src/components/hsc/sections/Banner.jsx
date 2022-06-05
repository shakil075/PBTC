import React from "react";

const Banner = ({ degree, desc }) => {
    return (
        <header id="top">
            <div class="banner">
                <div class="banner-wrap">
                    <div class="banner-content">
                        <h1>{degree}</h1>
                        <small>{desc}</small>
                    </div>
                    <div class="banner-angle"></div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
