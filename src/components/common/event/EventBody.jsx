import React, { useState } from "react";
import Calender from "./Calender";
import { events } from "../../../lib/helper";
import EventCover from "./EventCover";

const EventBody = ({ ui }) => {
    const date = new Date().toDateString();
    const [pick, setPick] = useState("");
    const [day, setDay] = useState(new Date().getDate());

    const pickDate = (e) => {
        const number = e.target.innerText;
        const fullDate = e.target.id;
        setDay(number);
        const parent = document.querySelectorAll(".days .day");
        parent.forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        console.log(new Date(fullDate).toDateString());
        const datedata = document.querySelector("#selectedDay");
        console.log(datedata);
    };

    return (
        <div className="event_body">
            <Calender pickDate={pickDate} selectedDay={day} />
            {ui === "teacher_pannel" && (
                <EventCover
                    title="Meeting Events"
                    events={events}
                    date={date}
                />
            )}
            <EventCover title="Academic Events" events={events} date={date} />
            <EventCover title="Notice" events={events} date={date} />
        </div>
    );
};

export default EventBody;
