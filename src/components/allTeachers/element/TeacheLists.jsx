import React from "react";
import TeacherCard from "./TeacherCard";

const TeacheLists = ({
    teacherCardList,
    index,
    howMany,
    handlePrev,
    handleNext,
    title,
}) => {
    return (
        <div className="container position-relative d-flex flex-column justify-content-center align-items-center">
            <div className="head">{title}</div>
            <div className="teacherLists row justify-content-center align-items-center">
                {teacherCardList.slice(index, howMany).map((teacher, index) => (
                    <TeacherCard
                        key={index}
                        image={teacher.image}
                        name={teacher.name}
                        details={teacher.details}
                        course={teacher.course}
                    />
                ))}
            </div>

            <div className="paginateTeachers position-relative d-flex justify-content-between">
                <div
                    className={`prevBtn ${index <= 0 && "disableBtn"}`}
                    onClick={handlePrev}
                >
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>
                <div
                    className={`nextBtn ${
                        howMany >= teacherCardList.length && "disableBtn"
                    }`}
                    onClick={handleNext}
                >
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </div>
    );
};

export default TeacheLists;
