import React, { useState } from "react";
import AbsolutePopup from "../../common/AbsolutePopup";
import SummaryContent from "../home/absoluteContent/SummaryContent";
import SummaryCard from "../home/summary/SummaryCard";
import { mark } from "../../../lib/helper";

const Summary = () => {
    const [show, setShow] = useState("");
    const [animate, setAnimate] = useState("");

    const showSummary = () => {
        setShow("show_summary");
        setAnimate("animate");
    };

    const handleToggle = () => {
        setShow("");
        setAnimate("");
    };
    return (
        <div className="summary_section">
            <div className="progress_summary row">
                <SummaryCard
                    col="col-xl-3 col-sm-4 col-5"
                    onClick={showSummary}
                    animate="animate"
                    heading="First Semister"
                    percent="90"
                />
                <SummaryCard
                    col="col-xl-3 col-sm-4  col-5"
                    onClick={showSummary}
                    animate="animate"
                    heading="Second Semister"
                    percent="90"
                />

                <SummaryCard
                    col="col-xl-3 col-sm-4  col-5"
                    onClick={showSummary}
                    animate="animate"
                    heading="Third Semister"
                    percent="90"
                />

                <SummaryCard
                    col="col-xl-3 col-sm-4 col-5"
                    onClick={showSummary}
                    animate="animate"
                    heading="Fourth Semister"
                    percent="90"
                />
            </div>

            <AbsolutePopup
                show={show}
                handleToggle={handleToggle}
                children={<SummaryContent animate={animate} array={mark} />}
            />
        </div>
    );
};

export default Summary;
