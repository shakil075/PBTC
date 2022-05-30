import React from "react";
import CourseList from "../course/CourseList";

const CourseContent = ({ animate, pannel, courses }) => {
    return (
        <div className="course_content row justify-content-center">
            {courses.map((course, key) => (
                <CourseList
                    col="col-xl-3 col-md-4 col-6"
                    key={key}
                    animate={animate}
                    percent="60"
                    subject={course.subject}
                    teacher={
                        pannel === "student" ? course.teacher : course.degree
                    }
                />
            ))}
        </div>
    );
};

export default CourseContent;
