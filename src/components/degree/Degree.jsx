import React from "react";
import Ability from "../hsc/sections/Ability";
import Apply from "../hsc/sections/Apply";
import Banner from "../hsc/sections/Banner";
import Facilities from "../hsc/sections/Facilities";
import Faculty from "../hsc/sections/Faculty";
import Subject from "../hsc/sections/Subject";
import "../../css/Hsc/hsc.css";
import { degreeSubjects } from "../../lib/helper";

const Degree = () => {
    console.log("Degree Page Rendering");

    return (
        <div className="degreeContent">
            <a href="#top" class="back-top">
                <i class="fas fa-chevron-up"></i>
            </a>
            <Banner
                degree="Degree"
                desc="The Higher Secondary Certificate (HSC) is a public examination credential in Bangladesh, India, and
            Pakistan. HSC is equivalent to GCE A Level in England and 3rd and 4th year of high schools in the United
            States."
            />
            <Subject subjects={degreeSubjects} />
            <Ability />
            <Faculty />
            <Facilities />
            <Apply />
            <div class="sub-footer"></div>
        </div>
    );
};

export default Degree;
