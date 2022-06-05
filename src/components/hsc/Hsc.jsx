import React from "react";
import Ability from "./sections/Ability";
import Apply from "./sections/Apply";
import Banner from "./sections/Banner";
import Facilities from "./sections/Facilities";
import Faculty from "./sections/Faculty";
import Subject from "./sections/Subject";
import { hscSubjects } from "../../lib/helper";
import "../../css/Hsc/hsc.css";

const Hsc = () => {
    console.log("Hsc page Rendering");

    return (
        <div className="degreeContent">
            <a href="#top" class="back-top">
                <i class="fas fa-chevron-up"></i>
            </a>
            <Banner
                degree="Higher Secondary Certificate"
                desc=" The Higher Secondary Certificate (HSC) is a public
                            examination credential in Bangladesh, India, and
                            Pakistan. HSC is equivalent to GCE A Level in
                            England and 3rd and 4th year of high schools in the
                            United States."
            />
            <Subject subjects={hscSubjects} />
            <Ability />
            <Faculty />
            <Facilities />
            <Apply />
        </div>
    );
};

export default Hsc;
