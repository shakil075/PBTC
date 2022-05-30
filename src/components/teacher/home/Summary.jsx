import React, { useEffect, useState } from "react";
import AbsolutePopup from "../../common/AbsolutePopup";
import AttandanceTableContent from "../../student/home/absoluteContent/AttandanceTableContent";
import AttendanceContent from "../../student/home/absoluteContent/AttendanceContent";
import SummaryCard from "../../student/home/summary/SummaryCard";
import { attendance } from "../../../lib/helper";

const Summary = () => {
    const [show, setShow] = useState("");
    const [pick, setPick] = useState(0);
    const handleToggle = () => {
        setShow("");
    };

    const showAttendance = () => {
        setShow("show_attendance");
    };

    const pickDate = (e) => {
        const number = parseInt(e.target.innerText);
        setPick(number);
        setShow("show_attendance_table");
    };

    useEffect(() => {
        const progress = document.querySelectorAll(
            ".progress_summary .result_box circle"
        );

        progress.forEach((p) => {
            let endValue = parseInt(
                p.parentElement.previousElementSibling.firstElementChild.getAttribute(
                    "id"
                )
            );
            let startValue = 0;
            let duration = Math.floor(3000 / endValue);

            let counting = setInterval(() => {
                startValue += 1;
                p.parentElement.previousElementSibling.firstElementChild.textContent =
                    startValue + "%";

                if (startValue === endValue) {
                    clearInterval(counting);
                }
            }, duration);
        });
    }, []);
    return (
        <div class="summary_section">
            <div className="progress_summary row justify-content-between">
                <SummaryCard
                    col="col-sm-6 col-5"
                    progress={false}
                    status="Paid"
                    heading="Salary Status"
                />
                <SummaryCard
                    col="col-sm-6 col-5"
                    onClick={showAttendance}
                    heading="Attendance"
                    percent="90"
                    animate="animate"
                />
            </div>

            <AbsolutePopup
                show={show}
                handleToggle={handleToggle}
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
