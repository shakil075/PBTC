import React, { useEffect, useState } from "react";
import Activities from "./Activities";
import Course from "./Course";
import Profile from "./Profile";
import Summary from "./Summary";

const HomeContent = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const progress = document.querySelectorAll(
            ".home_target .progress_summary .result_box circle"
        );
        const progress_summary = document.querySelector(".progress_summary");
        const x = window.matchMedia("(max-width: 576px)");

        const scrollerEvent = () => {
            const screenPosition = window.innerHeight / 1.4;
            const child = progress_summary.getBoundingClientRect().top;

            if (parseInt(screenPosition) >= parseInt(child)) {
                setScrolled(true);
                progress.forEach((p) => {
                    p.classList.add("animate");
                });
            } else {
                setScrolled(false);
                progress.forEach((p) => {
                    p.classList.remove("animate");
                });
            }
        };

        if (x.matches) {
            window.addEventListener("scroll", scrollerEvent);
        } else {
            setScrolled(true);
            progress.forEach((p) => {
                p.classList.add("animate");
            });
        }
    }, []);

    useEffect(() => {
        const progress = document.querySelectorAll(
            ".home_target .progress_summary .result_box circle"
        );
        if (scrolled) {
            progress.forEach((p) => {
                let endValue = parseInt(
                    p.parentElement.previousElementSibling.firstElementChild.getAttribute(
                        "id"
                    )
                );
                let startValue = 0;
                let duration = Math.floor(3000 / endValue);

                let counting = setInterval(() => {
                    startValue += 1;
                    p.parentElement.previousElementSibling.firstElementChild.textContent =
                        startValue + "%";

                    if (startValue === endValue) {
                        clearInterval(counting);
                    }
                }, duration);
            });
        }
    }, [scrolled]);

    return (
        <div className="content_wrapper home_target">
            <Profile />
            <Course />
            <Summary />
            <Activities />
        </div>
    );
};

export default HomeContent;
