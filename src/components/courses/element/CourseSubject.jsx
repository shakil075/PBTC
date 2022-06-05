import React from "react";
import Subject from "./Subject";

const CourseSubject = ({ courseSubject }) => {
    return (
        <section class="courses">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-3 d-flex justify-content-center justify-content-md-start align-items-center">
                        <div class="course-content">
                            <h3>Courses</h3>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row subjects">
                            {courseSubject.map((subject) => (
                                <Subject
                                    image={subject.image}
                                    subject={subject.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSubject;
