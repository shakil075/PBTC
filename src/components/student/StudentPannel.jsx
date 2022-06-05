import React from "react";
import HomeContent from "./home/HomeContent";
import ResultContent from "./result/ResultContent";
import Routine from "./routine/Routine";
import Teacher from "./teacher/Teacher";

const StudentPannel = ({ show }) => {
    console.log("Student Pannel Rendering");
    if (show === "home") {
        return (
            <div className="content_body">
                <HomeContent />
            </div>
        );
    }
    if (show === "results") {
        return (
            <div className="content_body">
                <ResultContent />
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
    if (show === "teacher") {
        return (
            <div className="content_body">
                <Teacher />
            </div>
        );
    }
};

export default StudentPannel;
