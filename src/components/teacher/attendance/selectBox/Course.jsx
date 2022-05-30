import React from "react";

const Course = ({ degree, handleYear, course_id, courses }) => {
    if (degree === "hsc") {
        return (
            <div className="selectBox">
                <label for="cars">Choose Class</label>
                <select onChange={handleYear} name="course_id" id="course_id">
                    <option value="0" selected hidden>
                        Select one
                    </option>
                    {courses.map((course, index) => (
                        <option
                            key={index}
                            value={course.course_id}
                            selected={course_id === course.course_id}
                        >
                            {course.course_name}
                        </option>
                    ))}
                </select>
            </div>
        );
    } else if (degree === "degree") {
        return (
            <div className="selectBox">
                <label for="cars">Choose Course</label>
                <select onChange={handleYear} name="course_id" id="course_id">
                    <option value="0" selected hidden>
                        Select one
                    </option>

                    {courses.map((course, index) => (
                        <option
                            key={index}
                            value={course.course_id}
                            selected={course_id === course.course_id}
                        >
                            {course.course_name}
                        </option>
                    ))}
                </select>
            </div>
        );
    } else {
        return (
            <div className="selectBox">
                <label for="cars">Choose Class</label>
                <select
                    onChange={handleYear}
                    disabled
                    name="course_id"
                    id="course_id"
                >
                    <option>"Select one"</option>
                </select>
            </div>
        );
    }
};

export default Course;
