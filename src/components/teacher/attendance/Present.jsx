import React from "react";
import PresentBox from "../../common/form/PresentBox";

const Present = ({ students, handleCheck }) => {
    return (
        <tbody>
            {students.map((student, index) => (
                <PresentBox
                    key={index}
                    handleCheck={handleCheck}
                    student_id={student.student_id}
                    name={student.student_name}
                    roll={student.student_id}
                />
            ))}
        </tbody>
    );
};

export default Present;
