import React from "react";

const InfoBox = ({ label, value, rest }) => {
    return (
        <div className={`info_box ${rest}`}>
            <div className="label_name">{label} :</div>
            <input type="text" size={value.length} value={value} disabled />
        </div>
    );
};

export default InfoBox;
