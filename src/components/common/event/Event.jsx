import React from "react";
import EventBody from "./EventBody";
import "../../../css/common/event/event.css";

const Event = () => {
    return (
        <div class="event_section">
            <div class="event_header">Events Calender</div>
            <EventBody />
        </div>
    );
};

export default Event;
