import React, { useState } from "react";
import CourseList from "./course/CourseList";
import { courses } from "../../../lib/helper";
import AbsolutePopup from "../../common/AbsolutePopup";
import CourseContent from "./absoluteContent/CourseContent";
import "../../../css/student/home/course/course.css";

const Course = () => {
    const [show, setShow] = useState("");
    const [animate, setAnimate] = useState("");
    const showCourse = () => {
        setShow("show_course");
        setAnimate("animate");
    };
    const handleToggle = () => {
        setShow("");
        setAnimate("");
    };
    return (
        <div class="course">
            <div class="course_heading">
                <div className="leftHeading">Your Courses</div>
                <div onClick={showCourse} className="rightHeading">
                    View all
                </div>
            </div>

            <div class="course_lists row justify-content-between">
                {courses.slice(0, 3).map((course, key) => (
                    <CourseList
                        col="col-sm-4 "
                        animate="animate"
                        key={key}
                        percent="60"
                        subject={course.subject}
                        teacher={course.teacher}
                    />
                ))}
            </div>

            <AbsolutePopup
                show={show}
                handleToggle={handleToggle}
                children={<CourseContent animate={animate} />}
            />
        </div>
    );
};

export default Course;
