import React from "react";

const Counter = ({ title, count }) => {
    return (
        <div id={count} class="counter col-md-2 col-sm-5 col-8 box">
            <h5>{title}</h5>
            <p>0</p>
        </div>
    );
};

export default Counter;
