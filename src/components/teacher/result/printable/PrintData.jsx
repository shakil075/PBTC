import React from "react";
import Download from "../../../common/Download";

const PrintData = ({ user, degree, course_name }) => {
    return (
        <Download name={`${degree}_${course_name}_result`}>
            <table id="printTable" className="table table-bordered">
                <thead>
                    <tr>
                        <th
                            colSpan="4"
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
                        <th className="markSide">
                            <h3>Mark</h3>
                            <p>( {user.total_mark} )</p>
                        </th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {user.marks.map((mark, index) => (
                        <tr key={index}>
                            <td>{mark.name}</td>
                            <td>{mark.id}</td>
                            <td>{mark.mark}</td>
                            <td>{mark.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Download>
    );
};

export default PrintData;
