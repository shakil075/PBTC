import React, { useEffect } from "react";
import "../../../css/student/home/summary/summary.css";
import Summary from "./Summary";

const ResultContent = () => {
    useEffect(() => {
        const progress = document.querySelectorAll(
            ".result_target .progress_summary .result_box circle"
        );

        progress.forEach((p) => {
            let endValue = parseInt(
                p.parentElement.previousElementSibling.firstElementChild.getAttribute(
                    "id"
                )
            );
            let startValue = 0;
            let duration = Math.floor(3000 / endValue);

            let counting = setInterval(() => {
                startValue += 1;
                p.parentElement.previousElementSibling.firstElementChild.textContent =
                    startValue + "%";

                if (startValue === endValue) {
                    clearInterval(counting);
                }
            }, duration);

            return () => clearInterval(counting);
        });
    }, []);

    return (
        <div className="content_wrapper result_target">
            <div className="resultContentHeading">All Semister Result Logs</div>
            <Summary />
        </div>
    );
};

export default ResultContent;
