import React from "react";
import routine from "../../../img/routine.png";

const Routine = () => {
    return (
        <div className="content_wrapper routine_target">
            <div className="resultContentHeading">Class Routine</div>
            <div className="routineContent">
                <embed src={routine} title="routine"></embed>

                {routine.includes("pdf") ? null : (
                    <a className="download_routine" href={routine} download>
                        Download
                    </a>
                )}
            </div>
        </div>
    );
};

export default Routine;
