import React, { useState } from "react";
import "../../../css/common/calender/calender.css";

const Calender = ({ pickDate }) => {
    const [data, setData] = useState(new Date());
    const date = new Date(data);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const getday = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const numberOfDays = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const now = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const dayArray = () => {
        const dArr = [];
        const mobj = new Date().getMonth();
        const yobj = new Date().getFullYear();

        for (let i = 1; i <= numberOfDays; i++) {
            dArr.push({ i, mobj, yobj });
        }

        return dArr;
    };

    const emptyArray = () => {
        const eArr = [];
        for (let j = 1; j <= getday; j++) {
            eArr.push(j);
        }

        return eArr;
    };

    const getDate = date.getDate();

    const prevBtn = () => {
        const prevdate = date.setMonth(date.getMonth() - 1);
        setData(prevdate);
    };

    const nextBtn = () => {
        const nextdate = date.setMonth(date.getMonth() + 1);
        setData(nextdate);
    };

    return (
        <div class="calender">
            <div class="month">
                <ul>
                    <li onClick={prevBtn} class="prev">
                        &#10094;
                    </li>
                    <li class="date">{now}</li>
                    <li onClick={nextBtn} class="next">
                        &#10095;
                    </li>
                </ul>
            </div>

            <ul class="weekdays">
                {day.map((d, index) => (
                    <li key={index}>{d}</li>
                ))}
            </ul>

            <ul class="days">
                {emptyArray().map((day, index) => (
                    <li key={index}></li>
                ))}
                {dayArray().map((day, index) => (
                    <li
                        key={emptyArray() + 1 + parseInt(index)}
                        id={emptyArray() + 1 + parseInt(index)}
                        onClick={pickDate}
                        class={
                            day.i === getDate &&
                            day.mobj === date.getMonth() &&
                            day.yobj === date.getFullYear()
                                ? "active"
                                : ""
                        }
                    >
                        {day.i}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calender;
