import React from "react";
import SummaryCard from "../summary/SummaryCard";

const SummaryContent = ({ animate, array }) => {
    return (
        <div className="summary_content row justify-content-center align-items-center">
            {array.map((arr, index) => (
                <SummaryCard
                    key={index}
                    col="col-sm-3"
                    animate={animate}
                    heading={arr.heading}
                    percent={arr.percent}
                />
            ))}
        </div>
    );
};

export default SummaryContent;
