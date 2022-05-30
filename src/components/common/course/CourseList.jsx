import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const anime = (id) => keyframes`
100%{
    width: ${id}%;
}
`;

const Progress = styled.div`
    background-color: rgba(181, 177, 177, 0.638);
    width: 100%;
    height: 1.25rem;
    margin-top: 1.5rem;
    border-radius: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: absolute;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
    }

    &.animate::before {
        content: "";
        position: absolute;
        background-color: #254bdd;
        border-radius: 1rem;
        width: 0%;
        height: 100%;
        left: 0;
        top: 0;
        animation: ${(props) => anime(props.id)} 3s linear forwards;
    }
`;

const CourseList = ({ subject, teacher, percent, animate, col, pannel }) => {
    const textContent = document.querySelectorAll(
        ".course_content .card .course_footer div span"
    );

    useEffect(() => {
        textContent.forEach((progress) => {
            let startValue = 0;
            let endValue = parseInt(progress.parentElement.getAttribute("id"));
            let duration = Math.floor(3000 / endValue);

            let counting = setInterval(() => {
                startValue += 1;

                progress.textContent = startValue + "%";

                if (startValue === endValue) {
                    clearInterval(counting);
                }
            }, duration);

            return () => clearInterval(counting);
        });
    }, [textContent]);

    useEffect(() => {
        const homeContent = document.querySelectorAll(
            ".course_lists .card .course_footer div span"
        );

        homeContent.forEach((progress) => {
            let startValue = 0;
            let endValue = parseInt(progress.parentElement.getAttribute("id"));
            let duration = Math.floor(3000 / endValue);

            let counting = setInterval(() => {
                startValue += 1;

                progress.textContent = startValue + "%";

                if (startValue === endValue) {
                    clearInterval(counting);
                }
            }, duration);

            return () => clearInterval(counting);
        });
    }, []);

    return (
        <div className={`card-wrapper ${col}`}>
            <div class="card">
                <div class="course_title">{subject}</div>
                <div class="course_teacher">
                    <div class="courseTeacher_head">
                        {pannel === "student" ? "Course Teacher" : "Degree"}
                    </div>
                    <div class="courseTeacher_body">{teacher}</div>
                </div>
                <div className="course_footer">
                    <div class="card__progress">
                        <Progress className={animate} id={percent}>
                            <span></span>
                        </Progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseList;
