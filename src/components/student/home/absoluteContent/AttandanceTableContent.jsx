import React from "react";
import CloseBtn from "../../../common/CloseBtn";

const AttandanceTableContent = ({ handleToggle, attendance }) => {
    return (
        <div className="attendanceTable">
            <CloseBtn handleToggle={handleToggle} />

            <div className="tableList">
                <table class="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Subject</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance.map((a, ind) => (
                            <tr key={ind}>
                                <td>{a.subject}</td>
                                <td>{a.present ? "Present" : "Absent"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttandanceTableContent;
