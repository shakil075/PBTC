import React from "react";
import TeacherCard from "./TeacherCard";

const Teacher = () => {
    return (
        <div className="content_wrapper teacher_target ">
            <div className="resultContentHeading mb-5">Course Teachers</div>
            <div className="teacherContent row mt-5">
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
                <TeacherCard
                    name="Abbas Ali Mofiz"
                    subject="Bangla 1st Paper"
                />
            </div>
        </div>
    );
};

export default Teacher;
