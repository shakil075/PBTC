import React, { useEffect, useRef, useState } from "react";
import "../css/BanggobondhuCorner/corner.css";
import mujib from "../img/bonggobondhu/bb3.png";
import mujib2 from "../img/bonggobondhu/mujib3.jpg";
import mujib3 from "../img/bonggobondhu/mujib4.jpg";
import curve from "../img/png/curve4.png";
import curve2 from "../img/png/curve2.png";
import Rellax from "rellax";

import { historicalEvents } from "../lib/helper";
import VideoList from "../components/bangobandhu/VideoList";

const BanggobondhuConrenr = () => {
    const rellaxRef = useRef();
    const [index, setIndex] = useState(0);
    const [url, setUrl] = useState("");

    const handleIndex = (e) => {
        const selectItem = e.target.getAttribute("data-index");
        setIndex(selectItem);
    };

    useEffect(() => {
        const scroll = document.querySelector(".magicCurve");
        const sectionTwo = document.querySelector(".sectionTwo");
        const sectionThree = document.querySelector(".sectionThree");
        const sectionFour = document.querySelector(".sectionFour");

        const contentThree = document.querySelector("#sectionThree");
        const contentTwo = document.querySelector("#sectionTwo");

        new Rellax(".imageDiv", {
            speed: 6,
            round: true,
        });

        new Rellax(".openQ", {
            speed: 2,
            round: true,
        });
        new Rellax(".closeQ", {
            speed: -2,
            round: true,
        });

        new Rellax(".sheikh", {
            speed: 10,
            round: true,
        });

        new Rellax(".mujibur", {
            speed: 6,
            round: true,
        });

        new Rellax(".rahman", {
            speed: 2,
            round: true,
        });

        new Rellax(".secondHead", {
            speed: -4,
            round: true,
        });

        window.addEventListener("scroll", function () {
            const value = 1 + window.scrollY / -500;
            let scale;

            if (value <= 0) {
                scale = 0;
            } else {
                scale = value;
            }

            const windowHeight = window.innerHeight;
            const revelTop = sectionThree.getBoundingClientRect().top;
            const revealPoint = 360;

            const contentTop = contentThree.getBoundingClientRect().top;
            const contentPoint = 150;

            const sectionFourTop = sectionFour.getBoundingClientRect().top;

            if (revelTop <= windowHeight - revealPoint) {
                sectionThree.classList.add("active");
            } else {
                sectionThree.classList.remove("active");
            }

            if (sectionFourTop <= windowHeight - revealPoint) {
                sectionFour.classList.add("active");
            } else {
                sectionFour.classList.remove("active");
            }

            if (contentTop <= windowHeight - contentPoint) {
                const measure =
                    0.15 +
                    (windowHeight - contentPoint - contentTop) /
                        (windowHeight - contentPoint);
                let height;
                if (contentTop <= 0) {
                    height = 1;
                } else {
                    height = measure;
                }

                contentTwo.style.setProperty(
                    "--magicHeight",
                    `${height * 25}rem`
                );
            }

            scroll.style.transform = `scaleY(${scale})`;
            sectionTwo.style.setProperty(
                "--marginTop",
                `${(1 - scale) * 25}rem`
            );
        });
    }, []);

    const handleVideo = (e) => {
        const iframe = e.target.parentElement;
        iframe.style.display = "none";
    };

    const handleVideoPlay = (e) => {
        const iframe = document.getElementById("iframe");
        iframe.style.display = "flex";
        const link = e.target.getAttribute("data-video");
        console.log(link);
        setUrl(link);
    };

    return (
        <div className="bangabandhuMain">
            <div className="CornerSection">
                <div className="sectionOne">
                    <div className="magicCurve">
                        <img src={curve} alt="" />
                    </div>
                    <div className="row w-100 h-100 justify-content-center align-items-center">
                        <div className="col-md-6 col-12 order-md-1 order-2 d-flex flex-column justify-content-center align-items-center">
                            <div className="heading">
                                <div className="firstHead d-flex flex-column ">
                                    <span className="sheikh">Sheikh</span>
                                    <span className="mujibur">Mujibur</span>
                                    <span className="rahman">Rahman</span>
                                </div>
                                <div
                                    data-text="Bangabandhu"
                                    className="secondHead"
                                >
                                    Bangabandhu
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex order-md-2 order-1 justify-content-center align-items-center col-12 position-relative">
                            <div className="imageDiv">
                                <img src={mujib} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sectionTwo" className="CornerSection">
                <div className="sectionTwo">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <div ref={rellaxRef} className="imageCol">
                                <img src={mujib2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
                            <div className="quotesCard">
                                <p>
                                    <i
                                        data-rellax-tablet-speed="1"
                                        className="fa-solid fa-quote-left openQ"
                                    ></i>
                                    <span>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Quidem, reiciendis ad
                                        delectus officia magni est expedita
                                        omnis, et repellendus, id aspernatur
                                        sequi natus soluta laboriosam libero
                                        dolore eos. Iste, ea.
                                    </span>

                                    <i
                                        data-rellax-tablet-speed="-1"
                                        class="fa-solid fa-quote-right closeQ"
                                    ></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="magicCurve2">
                    <img src={curve2} alt="" />
                </div>
            </div>
            <div id="sectionThree" className="CornerSection">
                <div className="sectionThree container">
                    <div className="event_card_div">
                        <div className="eventCard">
                            <div className="eventImg">
                                <img src={mujib3} alt="" />
                            </div>
                            <div className="eventDetails">
                                <div className="title">
                                    <span>{historicalEvents[index].title}</span>
                                </div>
                                <p className="details">
                                    {historicalEvents[index].desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="paginateEvents row justify-content-center align-items-center">
                        <div
                            onClick={handleIndex}
                            data-index="0"
                            className="paginateBtn col-md-2 m-1"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="1"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="2"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="3"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                        <div
                            onClick={handleIndex}
                            data-index="4"
                            className="paginateBtn m-1 col-md-2"
                        >
                            7th march
                        </div>
                    </div>
                </div>
            </div>
            <div className="CornerSection">
                <div className="sectionFour">
                    <div className="videoContainer row">
                        <VideoList
                            handleVideoPlay={handleVideoPlay}
                            image={mujib3}
                            urlLink="https://www.youtube.com/embed/wnseY8goQoc"
                        />

                        <VideoList
                            handleVideoPlay={handleVideoPlay}
                            image={mujib3}
                            urlLink="https://www.youtube.com/embed/wnseY8goQoc"
                        />

                        <VideoList
                            handleVideoPlay={handleVideoPlay}
                            image={mujib3}
                            urlLink="https://www.youtube.com/embed/wnseY8goQoc"
                        />

                        <VideoList
                            handleVideoPlay={handleVideoPlay}
                            image={mujib3}
                            urlLink="https://www.youtube.com/embed/wnseY8goQoc"
                        />
                    </div>

                    <div className="videoPlayer" id="iframe">
                        <iframe
                            src={`${url}?autoplay=1&mute=1&enablejsapi=1`}
                            mute="1"
                            title="YouTube video player"
                            frameborder="0"
                            autoplay="1"
                            type="text/html"
                            allow="autoplay"
                            allowfullscreen
                        ></iframe>

                        <i onClick={handleVideo} class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <svg id="svgWave">
                    <filter id="wavy">
                        <feTurbulence
                            x="0"
                            y="0"
                            baseFrequency="0.02"
                            numOctaves="4"
                            seed="2"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="120s"
                                values="0.02;0.005;0.02"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </svg>
            </div>
        </div>
    );
};

export default BanggobondhuConrenr;
