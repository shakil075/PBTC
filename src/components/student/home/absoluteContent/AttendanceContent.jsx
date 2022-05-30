import React from "react";
import CloseBtn from "../../../common/CloseBtn";
import Calender from "../../../common/event/Calender";

const AttendanceContent = ({ handleToggle, pickDate, day }) => {
    return (
        <div className="attendance">
            <CloseBtn handleToggle={handleToggle} />
            <Calender pickDate={pickDate} selectedDay={day} />
        </div>
    );
};

export default AttendanceContent;
