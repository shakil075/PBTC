import React from "react";
import { courseSubject } from "../../lib/helper";
import "../../css/course/course.css";
import Header from "./element/Header";
import CourseSubject from "./element/CourseSubject";
import Students from "./element/Students";
import Facility from "./element/Facility";
import StudentReview from "./element/StudentReview";
import Apply from "./element/Apply";

const Course = () => {
    console.log("Course Page Rendering");

    return (
        <div className="courseContent">
            <Header />
            <CourseSubject courseSubject={courseSubject} />
            <Students />
            <Facility />
            <StudentReview />
            <Apply />
        </div>
    );
};

export default Course;
