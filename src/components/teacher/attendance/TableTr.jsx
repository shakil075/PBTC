import React from "react";

export const TableTr = ({ lists }) => {
    return (
        <tr>
            {lists.map((list, index) => (
                <th key={index}>{list}</th>
            ))}
        </tr>
    );
};
