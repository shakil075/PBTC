import React from "react";

const MarkInput = ({ name, student_id, user, handleMark, handleTotalMark }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{student_id}</td>
            <td>
                <input
                    type="text"
                    onChange={handleTotalMark}
                    name="total_mark"
                    value={user.total_mark}
                    required
                />
            </td>
            <td>
                <input
                    type="text"
                    id={name}
                    onChange={handleMark}
                    name={student_id}
                    value={user.marks.mark}
                    required
                />
            </td>
        </tr>
    );
};

export default MarkInput;
