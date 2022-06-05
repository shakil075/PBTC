import React from "react";

const TeacherCard = ({ image, name, details, course }) => {
    return (
        <div className="teacherCardWrapper col-lg-3 col-md-4 col-sm-6 col-8">
            <div className="teacherCard d-flex flex-column justify-content-around align-items-center">
                <div className="teacherImg">
                    <img src={image} alt="" />
                </div>
                <div className="teacherFooter d-flex flex-column justify-content-center align-items-center">
                    <div className="teacherName">{name}</div>
                    <p className="teacherDetails">{details}</p>
                    <div className="teacherCourse">{course}</div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
