import React from "react";
import Profile from "../../common/Profile";
import Course from "../../common/Course";
import { tcourses } from "../../../lib/helper";
import Summary from "./Summary";

const HomeContent = () => {
    return (
        <div className="content_wrapper home_target">
            <Profile pannel="teacher" />
            <Course pannel="teacher" courses={tcourses} />
            <Summary />
        </div>
    );
};

export default HomeContent;
