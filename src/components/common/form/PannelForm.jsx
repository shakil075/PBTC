import React from "react";
import Course from "../../teacher/attendance/selectBox/Course";
import Degree from "../../teacher/attendance/selectBox/Degree";
import { TableTr } from "../../teacher/attendance/TableTr";

const PannelForm = ({
    user,
    degree,
    handleSelect,
    handleYear,
    handleSubmit,
    handleStudents,
    courses,
    stdForm,
    children,
    lists,
}) => {
    return (
        <>
            <form className="courseForm" onSubmit={handleStudents}>
                <Degree handleSelect={handleSelect} />
                <Course
                    degree={degree}
                    course_id={user.course_id}
                    handleYear={handleYear}
                    courses={courses}
                />

                <button
                    className="btn btn-success"
                    disabled={user.course_id === 0}
                    type="submit"
                >
                    Show all students
                </button>
            </form>
            {stdForm && (
                <form className="attendanceForm" onSubmit={handleSubmit}>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th
                                    colSpan="4"
                                    style={{
                                        fontSize: "2rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <h1 className="tableSubject">
                                        {user.course_name}
                                    </h1>
                                    <h6 className="tableDegree">
                                        ( {degree.toUpperCase()} )
                                    </h6>
                                </th>
                            </tr>
                            <TableTr lists={lists} />
                        </thead>
                        {children}
                    </table>

                    <button className="btn btn-success mt-3" type="submit">
                        Submit Attendance
                    </button>
                </form>
            )}
        </>
    );
};

export default PannelForm;
