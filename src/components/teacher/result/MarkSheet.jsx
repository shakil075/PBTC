import React from "react";
import MarkInput from "./MarkInput";

const MarkSheet = ({ students, user, handleMark, handleTotalMark }) => {
    return (
        <tbody>
            {students.map((student, index) => (
                <MarkInput
                    key={index}
                    user={user}
                    name={student.student_name}
                    student_id={student.student_id}
                    handleMark={handleMark}
                    handleTotalMark={handleTotalMark}
                />
            ))}
        </tbody>
    );
};

export default MarkSheet;
