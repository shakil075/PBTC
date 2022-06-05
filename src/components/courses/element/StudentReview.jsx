import React from "react";
import student from "../../../img/pages/peter.png";

const StudentReview = () => {
    return (
        <section class="students-review">
            <div class="container">
                <h2 class="text-center">
                    <span class="yellow">REVIEW</span>
                    <span class="maroon-light"> FROM OUR STUDENT</span>
                </h2>
                <div class="row justify-content-between flex-md-row flex-column-reverse align-items-center">
                    <div class="col-md-7 review-content d-flex justify-content-center align-items-center">
                        <div className="review_card">
                            <i class="fa-solid fa-comments"></i>
                            <p>
                                Providing feedback means giving students an
                                explanation of what they are doing correctly and
                                incorrectly. However, the focus of the feedback
                                should be based essentially on what the students
                                is doing right.
                            </p>
                            <p>Department</p>
                            <h4>Student name</h4>
                        </div>
                    </div>
                    <div class="col-md-5 d-flex justify-content-center align-items-center">
                        <div class="male-img d-flex justify-content-center align-items-center">
                            <img src={student} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
