import React from "react";
import EventCard from "./EventCard";

const EventCover = ({ title, events, date }) => {
    return (
        <>
            <div className="event_title">{title}</div>
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
        </>
    );
};

export default EventCover;
