import React from "react";
import FacultyLists from "./children/FacultyLists";
import teacher from "../../../img/pages/teacher.webp";

const Faculty = () => {
    return (
        <section class="faculty">
            <div class="container">
                <h2 class="text-center">OUR FACULTY HEADS</h2>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <FacultyLists
                        cls="science"
                        image={teacher}
                        title="HEAD OF BACHELOR OF ARTS"
                    />
                    <FacultyLists
                        cls="commerce"
                        image={teacher}
                        title="HEAD OF BACHELOR OF SOCIAL SCIENCE"
                    />
                    <FacultyLists
                        cls="arts"
                        image={teacher}
                        title="HEAD OF BACHELOR OF SCIENCE"
                    />
                    <FacultyLists
                        cls="science"
                        image={teacher}
                        title="HEAD OF BACHELOR OF BUSINESS STUDIES"
                    />
                </div>
                <div class="button mt-5">
                    <a class="btn">See all faculty members</a>
                </div>
            </div>
        </section>
    );
};

export default Faculty;
