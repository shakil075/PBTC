import React, { useState } from "react";
import PannelForm from "../../common/form/PannelForm";
import { hscCourses, degreeCourses, allStudents } from "../../../lib/helper";
import "../../../css/teacher/attendance/attendance.css";
import MarkSheet from "./MarkSheet";
import PrintData from "./printable/PrintData";

const Result = () => {
    const [degree, setDegree] = useState(0);
    const [courses, setCourses] = useState();
    const [students, setStudents] = useState();
    const [stdForm, setStdForm] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [user, setUser] = useState({
        course_id: 0,
        course_name: "",
        total_mark: 0,
        teacher_id: "150102075",
        marks: [],
    });

    const handleSelect = (e) => {
        setDegree(e.target.value);
        setUser({ ...user, course_id: 0 });
        if (e.target.value === "hsc") {
            setCourses(hscCourses);
        } else {
            setCourses(degreeCourses);
        }
    };

    const handleYear = (e) => {
        const course = courses.filter(
            (course) => course.course_id === e.target.value
        );
        console.log(course[0].course_name);
        setUser({
            ...user,
            course_id: e.target.value,
            course_name: course[0].course_name,
        });
    };

    const makeGrade = (mark, totalMark) => {
        const percent = (mark / totalMark) * 100;
        let grade;
        if (percent > 79 && percent <= 100) {
            grade = "A+";
        }
        if (percent < 80 && percent > 69) {
            grade = "A";
        }
        if (percent < 70 && percent > 59) {
            grade = "A-";
        }
        if (percent < 60 && percent > 49) {
            grade = "B";
        }
        if (percent < 50 && percent > 39) {
            grade = "C";
        }
        if (percent < 40 && percent >= 33) {
            grade = "d";
        }
        if (percent < 33) {
            grade = "F";
        }

        return grade;
    };

    const handleMark = (e) => {
        const markSheet = user.marks.filter((std) => std.id !== e.target.name);
        setUser({
            ...user,
            marks: [
                ...markSheet,
                {
                    name: e.target.id,
                    id: e.target.name,
                    mark: e.target.value,
                    grade: makeGrade(e.target.value, user.total_mark),
                },
            ],
        });
    };

    const handleTotalMark = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowDownload(true);
        console.log(user);
    };
    const handleStudents = (e) => {
        e.preventDefault();
        setStdForm(true);
        const searchStudent = allStudents.filter(
            (student) => student.course_id === user.course_id
        );
        setStudents(searchStudent);
    };
    return (
        <div className="content_wrapper">
            {showDownload === false && (
                <PannelForm
                    user={user}
                    degree={degree}
                    handleSelect={handleSelect}
                    handleYear={handleYear}
                    handleSubmit={handleSubmit}
                    handleStudents={handleStudents}
                    stdForm={stdForm}
                    courses={courses}
                    setStudents={setStudents}
                    children={
                        <MarkSheet
                            user={user}
                            handleMark={handleMark}
                            students={students}
                            handleTotalMark={handleTotalMark}
                        />
                    }
                    lists={[
                        "Student Name",
                        "Student Roll",
                        "Total Mark",
                        "Mark",
                    ]}
                />
            )}

            {user.marks.length > 0 && showDownload && (
                <PrintData
                    user={user}
                    degree={degree}
                    course_name={user.course_name}
                />
            )}
        </div>
    );
};

export default Result;
