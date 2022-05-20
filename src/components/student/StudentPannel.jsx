import React from "react";
import HomeContent from "./home/HomeContent";
import ResultContent from "./result/ResultContent";
import Routine from "./routine/Routine";
import Teacher from "./teacher/Teacher";

const StudentPannel = ({ show }) => {
    if (show === "home") {
        return (
            <div class="content_body">
                <HomeContent />
            </div>
        );
    }
    if (show === "results") {
        return (
            <div class="content_body">
                <ResultContent />
            </div>
        );
    }
    if (show === "routine") {
        return (
            <div class="content_body">
                <Routine />
            </div>
        );
    }
    if (show === "teacher") {
        return (
            <div class="content_body">
                <Teacher />
            </div>
        );
    }
};

export default StudentPannel;
