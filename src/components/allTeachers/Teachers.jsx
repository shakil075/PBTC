import React, { useEffect, useState } from "react";
import "../../css/allteachers/teachers.css";
import {
    teacherCardList,
    scienceIconLists,
    commerceIconLists,
    artsIconLists,
} from "../../lib/helper";
import TeacheLists from "./element/TeacheLists";
import Wrapper from "./element/Wrapper";

const Teachers = ({ teacher }) => {
    const [scienceStart, setScienceStart] = useState(0);
    const [scienceEnd, setScienceEnd] = useState(8);
    const [commerceStart, setCommerceStart] = useState(0);
    const [commerceEnd, setCommerceEnd] = useState(8);
    const [artsStart, setArtsStart] = useState(0);
    const [artsEnd, setArtsEnd] = useState(8);

    const [firstDiv, setFirstDiv] = useState("");

    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");

        setFirstDiv("active");

        function parallax(e) {
            document.querySelectorAll(".layer").forEach((layer) => {
                const speed = layer.getAttribute("data-speed");
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }

        const parallaxContainer = (e) => {
            const reveals = document.querySelectorAll(".reveal");

            reveals.forEach((r) => {
                const windowHeight = window.innerHeight;
                const revelTop = r.getBoundingClientRect().top;
                const revealPoint = 360;

                if (revelTop < windowHeight - revealPoint) {
                    r.classList.add("active");
                }
            });
        };

        const resize = () => {
            if (x.matches) {
                setScienceEnd(6);
                setCommerceEnd(6);
                setArtsEnd(6);
            } else if (y.matches) {
                setScienceEnd(3);
                setCommerceEnd(3);
                setArtsEnd(3);
            } else {
                setScienceEnd(8);
                setCommerceEnd(8);
                setArtsEnd(8);
            }
        };
        document.addEventListener("mousemove", parallax);
        window.addEventListener("scroll", parallaxContainer);
        window.addEventListener("load", resize);
        window.addEventListener("resize", resize);
    }, []);

    const handleSciencePrev = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (scienceStart <= 0) {
            return null;
        } else {
            if (x.matches) {
                setScienceStart((prevState) => prevState - 6);
                setScienceEnd((prevState) => prevState - 6);
            } else if (y.matches) {
                setScienceStart((prevState) => prevState - 3);
                setScienceEnd((prevState) => prevState - 3);
            } else {
                setScienceStart((prevState) => prevState - 8);
                setScienceEnd((prevState) => prevState - 8);
            }
        }
    };

    const handleScienceNext = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (scienceEnd >= teacherCardList.length) {
            return null;
        } else {
            if (x.matches) {
                setScienceStart((prevState) => prevState + 6);
                setScienceEnd((prevState) => prevState + 6);
            } else if (y.matches) {
                setScienceStart((prevState) => prevState + 3);
                setScienceEnd((prevState) => prevState + 3);
            } else {
                setScienceStart((prevState) => prevState + 8);
                setScienceEnd((prevState) => prevState + 8);
            }
        }
    };
    const handleCommercePrev = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (commerceStart <= 0) {
            return null;
        } else {
            if (x.matches) {
                setCommerceStart((prevState) => prevState - 6);
                setCommerceEnd((prevState) => prevState - 6);
            } else if (y.matches) {
                setCommerceStart((prevState) => prevState - 3);
                setCommerceEnd((prevState) => prevState - 3);
            } else {
                setCommerceStart((prevState) => prevState - 8);
                setCommerceEnd((prevState) => prevState - 8);
            }
        }
    };
    const handleCommerceNext = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (commerceEnd >= teacherCardList.length) {
            return null;
        } else {
            if (x.matches) {
                setCommerceStart((prevState) => prevState + 6);
                setCommerceEnd((prevState) => prevState + 6);
            } else if (y.matches) {
                setCommerceStart((prevState) => prevState + 3);
                setCommerceEnd((prevState) => prevState + 3);
            } else {
                setCommerceStart((prevState) => prevState + 8);
                setCommerceEnd((prevState) => prevState + 8);
            }
        }
    };

    const handleArtsPrev = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (artsStart <= 0) {
            return null;
        } else {
            if (x.matches) {
                setArtsStart((prevState) => prevState - 6);
                setArtsEnd((prevState) => prevState - 6);
            } else if (y.matches) {
                setArtsStart((prevState) => prevState - 3);
                setArtsEnd((prevState) => prevState - 3);
            } else {
                setArtsStart((prevState) => prevState - 8);
                setArtsEnd((prevState) => prevState - 8);
            }
        }
    };
    const handleArtsNext = (e) => {
        const x = window.matchMedia("(max-width: 768px)");
        const y = window.matchMedia("(max-width: 576px)");
        if (artsEnd >= teacherCardList.length) {
            return null;
        } else {
            if (x.matches) {
                setArtsStart((prevState) => prevState + 6);
                setArtsEnd((prevState) => prevState + 6);
            } else if (y.matches) {
                setArtsStart((prevState) => prevState + 3);
                setArtsEnd((prevState) => prevState + 3);
            } else {
                setArtsStart((prevState) => prevState + 8);
                setArtsEnd((prevState) => prevState + 8);
            }
        }
    };

    if (teacher === "hsc") {
        return (
            <div className="teacherSection">
                <Wrapper
                    scienceIconLists={scienceIconLists}
                    cls={`wrapper science ${firstDiv}`}
                    id="parallax"
                    data-before="4"
                    data-after="-5"
                    children={
                        <TeacheLists
                            teacherCardList={teacherCardList}
                            index={scienceStart}
                            howMany={scienceEnd}
                            handlePrev={handleSciencePrev}
                            handleNext={handleScienceNext}
                            title="Science Teachers"
                        />
                    }
                />

                <Wrapper
                    scienceIconLists={commerceIconLists}
                    cls="wrapper commerce reveal"
                    id="parallax2"
                    children={
                        <TeacheLists
                            teacherCardList={teacherCardList}
                            index={commerceStart}
                            howMany={commerceEnd}
                            handlePrev={handleCommercePrev}
                            handleNext={handleCommerceNext}
                            title="Commerce Teachers"
                        />
                    }
                />

                <Wrapper
                    scienceIconLists={artsIconLists}
                    cls="wrapper arts reveal"
                    id="parallax3"
                    children={
                        <TeacheLists
                            teacherCardList={teacherCardList}
                            index={artsStart}
                            howMany={artsEnd}
                            handlePrev={handleArtsPrev}
                            handleNext={handleArtsNext}
                            title="Arts Teachers"
                        />
                    }
                />
            </div>
        );
    }

    if (teacher === "degree") {
        return (
            <div className="teacherSection">
                <Wrapper
                    scienceIconLists={scienceIconLists}
                    cls={`wrapper degree ${firstDiv}`}
                    id="parallax4"
                    data-before="4"
                    data-after="-5"
                    children={
                        <TeacheLists
                            teacherCardList={teacherCardList}
                            index={scienceStart}
                            howMany={scienceEnd}
                            handlePrev={handleSciencePrev}
                            handleNext={handleScienceNext}
                            title="Degree Teachers"
                        />
                    }
                />
            </div>
        );
    }
};

export default Teachers;
