import React, { useEffect, useState } from "react";
import student from "../../../img/pages/peter_dream.png";
import Counter from "./Counter";

const Students = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const progressDiv = document.getElementById("studentCount");
        const scrollerEvent = () => {
            const targetPoint = progressDiv.getBoundingClientRect().top;

            if (targetPoint <= 480) {
                setScrolled(true);
            }
        };
        window.addEventListener("scroll", scrollerEvent);
    }, []);

    useEffect(() => {
        const progress = document.querySelectorAll(".student-content .counter");
        if (scrolled) {
            progress.forEach((p) => {
                let endValue = p.getAttribute("id");
                let startValue = 0;
                let duration = Math.floor(1500 / Number(endValue));

                let counting = setInterval(() => {
                    startValue += 1;

                    if (Number(endValue) === 4 || Number(endValue) === 5) {
                        p.lastElementChild.textContent = startValue + "k+";
                    } else {
                        p.lastElementChild.textContent = startValue + "+";
                    }
                    if (Number(startValue) === Number(endValue)) {
                        clearInterval(counting);
                    }
                }, duration);
            });
        }
    }, [scrolled]);

    return (
        <section id="studentCount" class="student">
            <div class="container">
                <h2 class="text-center">
                    <span class="yellow mx-3">Science</span>
                    <span class="maroon-light">Department At a Glance</span>
                </h2>
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-5">
                        <div class="male-img">
                            <img src={student} alt="" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="row student-content justify-content-center">
                            <Counter title="Student Count" count="5" />
                            <Counter title="Pass Statistics" count="4" />
                            <Counter title="Teacher Count" count="50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Students;
