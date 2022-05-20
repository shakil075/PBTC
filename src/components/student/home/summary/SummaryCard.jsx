import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const anime = (id) => keyframes`
100%{
    stroke-dashoffset: ${210 - 2.1 * id}%;
}
`;

const Circle = styled.circle`
    fill: none;
    stroke: seagreen;
    stroke-dasharray: 210%;
    stroke-dashoffset: 210%;
    stroke-width: 2rem;

    &.animate {
        animation: ${(props) => anime(props.id)} 3s linear forwards;
    }
`;

const SummaryCard = ({
    col,
    heading,
    percent,
    animate,
    status,
    progress = true,
    ...rest
}) => {
    const counter = document.querySelectorAll(
        ".absolute_popup .summary_content .result_box .percent"
    );
    useEffect(() => {
        counter.forEach((c) => {
            let startValue = 0;
            let endValue = parseInt(c.getAttribute("id"));
            let duration = Math.floor(3000 / endValue);

            let counting = setInterval(() => {
                startValue += 1;
                c.textContent = startValue + "%";

                if (startValue === endValue) {
                    clearInterval(counting);
                }
            }, duration);

            return () => clearInterval(counting);
        });
    }, [counter]);

    return (
        <div class={`result ${col}`}>
            <div class="result_heading">{heading}</div>
            <div {...rest} class="result_lists card">
                <div class="result_card">
                    <div class="result_box">
                        {progress ? (
                            <div className="outer">
                                <div className="inner">
                                    <div id={percent} className="percent"></div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    viewBox="0 0 500 500"
                                >
                                    <Circle
                                        className={animate}
                                        id={percent}
                                        cx="50%"
                                        cy="50%"
                                        r="33.33%"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <div className="status">{status}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
