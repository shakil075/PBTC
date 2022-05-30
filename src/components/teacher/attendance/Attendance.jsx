import React, { useState } from "react";
import PannelForm from "../../common/form/PannelForm";
import PrintData from "./printable/PrintData";
import { hscCourses, degreeCourses, allStudents } from "../../../lib/helper";
import "../../../css/teacher/attendance/attendance.css";
import Present from "./Present";

const Attendance = () => {
    const [degree, setDegree] = useState(0);
    const [courses, setCourses] = useState();
    const [students, setStudents] = useState();
    const [stdForm, setStdForm] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [user, setUser] = useState({
        course_id: 0,
        course_name: "",
        teacher_id: "150102075",
        students: [],
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

    const handleCheck = (e) => {
        const student = user.students.filter(
            (std) => std.name !== e.target.name
        );
        setUser({
            ...user,
            students: [
                ...student,
                {
                    student_id: e.target.id,
                    student_name: e.target.name,
                    present: e.target.value,
                },
            ],
        });
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
                        <Present
                            handleCheck={handleCheck}
                            students={students}
                        />
                    }
                    lists={[
                        "Student Name",
                        "Student Roll",
                        "Present",
                        "Absent",
                    ]}
                />
            )}

            {user.students.length > 0 && showDownload && (
                <PrintData
                    students={user.students}
                    degree={degree}
                    course_name={user.course_name}
                />
            )}
        </div>
    );
};

export default Attendance;
