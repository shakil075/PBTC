import React from "react";
import ActivityCard from "./activities/ActivityCard";
import "../../../css/student/home/activities/activities.css";

const Activities = () => {
    return (
        <div className="activities">
            <h1 className="activity_head">Co-curriculum Activity Status</h1>
            <div class="row">
                <ActivityCard text="Winner" />
                <ActivityCard text="Runner Up" />
                <ActivityCard text="Winner" />
                <ActivityCard text="Third" />
            </div>
        </div>
    );
};

export default Activities;
