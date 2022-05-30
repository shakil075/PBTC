import React from "react";
import EventBody from "./EventBody";
import "../../../css/common/event/event.css";

const Event = ({ ui }) => {
    return (
        <div class="event_section">
            <div class="event_header">Events Calender</div>
            <EventBody ui={ui} />
        </div>
    );
};

export default Event;
