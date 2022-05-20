import React from "react";
import CloseBtn from "../../../common/CloseBtn";
import Calender from "../../../common/event/Calender";

const AttendanceContent = ({ handleToggle, pickDate }) => {
    return (
        <div className="attendance">
            <CloseBtn handleToggle={handleToggle} />
            <Calender pickDate={pickDate} />
        </div>
    );
};

export default AttendanceContent;
