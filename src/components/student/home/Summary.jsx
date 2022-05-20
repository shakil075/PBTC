import React, { useState } from "react";
import SummaryCard from "./summary/SummaryCard";
import AbsolutePopup from "../../common/AbsolutePopup";
import AttendanceContent from "./absoluteContent/AttendanceContent";
import AttandanceTableContent from "./absoluteContent/AttandanceTableContent";
import SummaryContent from "./absoluteContent/SummaryContent";
import { mark, attendance } from "../../../lib/helper";
import "../../../css/student/home/summary/summary.css";

const Summary = () => {
    const [show, setShow] = useState("");
    const [animate, setAnimate] = useState("");
    const [pick, setPick] = useState(0);
    const showSummary = () => {
        setShow("show_summary");
        setAnimate("animate");
    };
    const handleToggle = () => {
        setShow("");
        setAnimate("");
    };
    const showAttendance = () => {
        setShow("show_attendance");
    };

    const pickDate = (e) => {
        const number = parseInt(e.target.innerText);
        setPick(number);
        setShow("show_attendance_table");
    };

    return (
        <div class="summary_section">
            <div className="progress_summary row justify-content-between">
                <SummaryCard
                    col="col-sm-3 col-5"
                    progress={false}
                    status="Paid"
                    heading="Latest Tution Fee"
                />
                <SummaryCard
                    col="col-sm-3 col-5"
                    progress={false}
                    status="Eligible"
                    heading="Stipend Status"
                />
                <SummaryCard
                    col="col-sm-3 col-5"
                    onClick={showSummary}
                    heading="Latest Exam"
                    percent="90"
                />
                <SummaryCard
                    col="col-sm-3 col-5"
                    onClick={showAttendance}
                    heading="Attendance"
                    percent="65"
                />
            </div>

            <AbsolutePopup
                show={show}
                handleToggle={handleToggle}
                children={<SummaryContent animate={animate} array={mark} />}
                children2={
                    <AttendanceContent
                        handleToggle={handleToggle}
                        pickDate={pickDate}
                    />
                }
                children3={
                    <AttandanceTableContent
                        attendance={attendance}
                        handleToggle={handleToggle}
                    />
                }
            />
        </div>
    );
};

export default Summary;
