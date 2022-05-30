import React from "react";
import Download from "../../../common/Download";

const PrintData = ({ students, degree, course_name }) => {
    return (
        <Download name={`${degree}_${course_name}_attendance`}>
            <table id="printTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th
                            colSpan="3"
                            style={{
                                fontSize: "2rem",
                                textAlign: "center",
                            }}
                        >
                            <h1 className="tableSubject">{course_name}</h1>
                            <h6 className="tableDegree">
                                {`( ${degree.toUpperCase()} )`}
                            </h6>
                        </th>
                    </tr>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Roll</th>
                        <th>Class Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.student_name}</td>
                            <td>{student.student_id}</td>
                            <td>{student.present}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Download>
    );
};

export default PrintData;
