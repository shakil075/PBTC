import React from "react";
import Calender from "./Calender";
import EventCard from "./EventCard";
import { events } from "../../../lib/helper";

const EventBody = () => {
    const date = new Date().toDateString();

    return (
        <div class="event_body">
            <Calender />
            <div className="event_title">Academic Events</div>
            <div className="events">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        title={event.title}
                        description={event.description}
                        date={date}
                    />
                ))}
            </div>
            <div className="event_title">Notice</div>
            <div className="events">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        title={event.title}
                        description={event.description}
                        date={date}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventBody;
