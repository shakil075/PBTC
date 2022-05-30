import React from "react";

const Degree = ({ handleSelect }) => {
    return (
        <div className="selectBox">
            <label for="cars">Choose Degree</label>
            <select onChange={handleSelect} name="degree" id="degree">
                <option selected hidden>
                    Select one
                </option>
                <option value="hsc">Hsc</option>
                <option value="degree">Degree</option>
            </select>
        </div>
    );
};

export default Degree;
