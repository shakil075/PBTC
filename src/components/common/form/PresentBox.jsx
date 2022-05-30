import React from "react";

const PresentBox = ({ name, roll, student_id, handleCheck }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{roll}</td>
            <td>
                <input
                    type="radio"
                    id={student_id}
                    onChange={handleCheck}
                    name={name}
                    value="present"
                    required
                />
            </td>
            <td>
                <input
                    type="radio"
                    onChange={handleCheck}
                    id={student_id}
                    name={name}
                    value="absent"
                    required
                />
            </td>
        </tr>
    );
};

export default PresentBox;
