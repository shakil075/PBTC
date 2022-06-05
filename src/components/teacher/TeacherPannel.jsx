import React from "react";
import Routine from "../student/routine/Routine";
import Attendance from "./attendance/Attendance";
import HomeContent from "./home/HomeContent";
import Result from "./result/Result";

const TeacherPannel = ({ show }) => {
    console.log("Teacher Pannel Rendering");

    if (show === "home") {
        return (
            <div className="content_body">
                <HomeContent />
            </div>
        );
    }

    if (show === "attendance") {
        return (
            <div className="content_body">
                <Attendance />
            </div>
        );
    }

    if (show === "routine") {
        return (
            <div className="content_body">
                <Routine />
            </div>
        );
    }

    if (show === "result") {
        return (
            <div className="content_body">
                <Result />
            </div>
        );
    }
};

export default TeacherPannel;
